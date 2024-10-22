import IEvent from "../../../event/@shared/event.interface";

export default class ProductCreatedEvent implements IEvent {
  dataTimeOccured: Date;
  eventData: any;
  
  constructor (eventData: any) {
    this.dataTimeOccured = new Date();
    this.eventData = eventData;
  }
}