import { OrderItem } from "./orderItem";

export class Order {
  _id: string;
  _customerId: string; // aggregate -> referencia apenas por id
  _items: OrderItem[] = []; // dependencia direta, passa todo a entity

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}
