import IEvent from "../event.interface";

export class CreateCustomerEvent implements IEvent {
  dataTimeOccured: Date;
  eventData: any;

  constructor (eventData: any) {
    this.dataTimeOccured = new Date();
    this.eventData = eventData;
  }
}