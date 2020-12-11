import { PathLike, readdir, readFile } from 'fs';
import { pipe } from 'fp-ts/lib/pipeable';
import { map as mapArray } from 'fp-ts/lib/ReadonlyArray';
import { Task, map as mapTask, flatten as flattenTask, sequenceArray } from 'fp-ts/lib/Task';
import extractMdxMetadata from 'extract-mdx-metadata';

export interface Meta {
  title: string;
  to: string;
}

/**
 * ページのディレクトリのパス
 */
const BaseArticlesPath = './src/pages/posts';

// ディレクトリを読み込むタスク
const taskReadDir: Task<ReadonlyArray<string>> = () => {
  return new Promise((resolve, reject) => readdir(BaseArticlesPath, (err, files) => {
    if (err != null) {
      return reject(err);
    }
    return mapArray(path => `${BaseArticlesPath}/${path}`)(files);
  }));
};

/**
 * readFileタスクを作成する
 * @param path
 */
const createReadFileTask = (path: PathLike): Task<Buffer> => () => new Promise((resolve, reject) => readFile(path, (err, buffer) => {
  if (err != null) {
    return reject(err);
  }
  return resolve(buffer);
}));

/**
 * Meta展開タスクを作成する
 * @param buffer 
 */
const createExtractTask = (buffer: Buffer): Task<Meta> => async () => {
  // なんか`next`したら2回目からのコンパイルでオブジェクトになっていて、なんもわからん
  if (typeof extractMdxMetadata !== 'function') return extractMdxMetadata;
  return extractMdxMetadata<Meta>(buffer);
};

/**
 * パスからMetaを読み込むタスクを作成する
 * @param path 
 */
const createReadMetaTask = (path: string): Task<Meta> => {
  return pipe(
    createReadFileTask(path),
    mapTask(createExtractTask),
    flattenTask,
  );
};

export const createReadMetaListTask = (): Task<ReadonlyArray<Meta>> => {
  return pipe(
    taskReadDir, // ディレクトリを読み込む
    mapTask(mapArray(createReadMetaTask)), // string[] -> Task<Meta>[]
    mapTask(sequenceArray), // Task<Meta>[] -> Task<Meta[]>
    flattenTask, // Task<Task<_> -> Task<_>
  );
};
