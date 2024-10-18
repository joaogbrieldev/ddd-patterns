import IEventDispacher from "./event-dispacher.interface";
import IEventHandler from "./event-handler.interface";
import IEvent from "./event.interface";

export default class EventDispatcher implements IEventDispacher {
  notify(event: IEvent): void {
    throw new Error("Method not implemented.");
  }
  register(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (!this.eventHandlers[eventName]){
      this.eventHandlers[eventName] = []
    } 
    this.eventHandlers[eventName].push(eventHandler)
  }
  unregister(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    throw new Error("Method not implemented.");
  }
  unregisterAll(): void {
    throw new Error("Method not implemented.");
  }

  private eventHandlers: { [ eventName: string]: IEventHandler[] } = {};

  get getEventHandlers(): {[eventName: string]: IEventHandler[]} {
    return this.eventHandlers;
  }
}