import EventEmitter from "eventemitter3";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const eventEmitter = new EventEmitter();

/**
 * Exercise:
 * Complete the custom emitter named eventEmitter
 * that will console.log the following string
 * 'an event was raised'
 * when the string 'start' is sent
 */

export const emitter = async () => eventEmitter.emit("start");
eventEmitter.on("start", () => {
  console.log("an event was raised");
});
