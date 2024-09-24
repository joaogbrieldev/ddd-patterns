export default interface IRepository<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  update(id: string): Promise<T>;
}
