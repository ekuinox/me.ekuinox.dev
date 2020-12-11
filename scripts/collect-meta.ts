import { readdir, readFile, writeFile } from 'fs/promises';
import { pipe } from 'fp-ts/lib/pipeable';
import { map as mapArray, filter as filterArray } from 'fp-ts/lib/ReadonlyArray';
import { Task, map as mapTask, flatten as flattenTask, sequenceArray } from 'fp-ts/lib/Task';
import extractMdxMetadata from 'extract-mdx-metadata';
import { Meta } from 'src/common/articles';

// ページのディレクトリのパス
const BaseArticlesPath = './src/pages/posts';


// ディレクトリを読み込むタスク
const taskReadDir: Task<ReadonlyArray<string>> = () => {
  return readdir(BaseArticlesPath)
    .then(mapArray(path => `${BaseArticlesPath}/${path}`));
};

/**
 * readFileタスクを作成する
 * @param path
 */
const createReadFileTask = (path: string): Task<Buffer> => () => readFile(path);

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

const createReadMetaListTask = (): Task<ReadonlyArray<Meta>> => {
  return pipe(
  taskReadDir, // ディレクトリを読み込む
  mapTask(filterArray(s => /\.mdx$/.test(s))), // .mdx
  mapTask(mapArray(createReadMetaTask)), // string[] -> Task<Meta>[]
  mapTask(sequenceArray), // Task<Meta>[] -> Task<Meta[]>
  flattenTask, // Task<Task<_> -> Task<_>
  );
};

(async () => {
  const metaList = await createReadMetaListTask()();
  const json = JSON.stringify(metaList);
  await writeFile('./lib/metadata.json', json);
})();
