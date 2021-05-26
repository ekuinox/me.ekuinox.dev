export interface Options<T> {
  defaultReturnValue: T
}

export default function extractMdxMetadata<M = unknown>(
  content: Buffer,
  options?: Options<M>
): Promise<M>;
