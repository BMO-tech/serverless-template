export interface IDataModel<N, U, T> {
  create: (data: N) => Promise<T>;
  find: (id: string) => Promise<T>;
  remove: (id: string) => Promise<void>;
  search: () => Promise<T[]>;
  update: (id: string, data: U) => Promise<T>;
}
