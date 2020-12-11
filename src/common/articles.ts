export interface Meta {
  title: string;
  to: string;
}

export const getMetaList = () => import('../../lib/metadata.json').then(r => r.default);
