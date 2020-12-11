import extractMdxMetadata from 'extract-mdx-metadata';
import { readdir, readFile } from 'fs/promises';

export interface Meta {
  title: string;
  to: string;
}

const BaseArticlesPath = './src/pages/posts';

const getArticleFiles = async (): Promise<Array<string>> => {
  return readdir(BaseArticlesPath)
    .then(paths => paths.map(path => `${BaseArticlesPath}/${path}`));
};

export const getMetaList = async (): Promise<Array<Meta>> => {
  const files = await getArticleFiles();
  const contents = await Promise.all(files.map(path => readFile(path)));
  const metas = await Promise.all(contents.map(content => extractMdxMetadata<Meta>(content)));
  return metas;
};
