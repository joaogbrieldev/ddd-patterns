import EventDispatcher from "./event-dispacher";
import SendEmailWhenProductIsCreatedHandler from "./product/handler/send-email.handler";


describe(("Domain events tests"), () => {
  test(("should register an event handler"), ()  => {
    const eventDispacher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
  })
})