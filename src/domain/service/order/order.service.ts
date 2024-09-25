import { v4 as uuid } from "uuid";
import Customer from "../../entity/customer/customer";
import { Order } from "../../entity/orders/order";
import { OrderItem } from "../../entity/orders/orderItem";

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
  static placeOrder(customer: Customer, item: OrderItem[]): Order {
    const order = new Order(uuid(), customer.id, item);
    customer.addRewardPoints(order.total() / 2);
    return order;
  }
}
