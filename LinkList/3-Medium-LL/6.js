console.log("Start");

setTimeout(() => console.log("Timeout Callback"), 0);

setImmediate(() => console.log("Immediate Callback"));

Promise.resolve().then(() => console.log("Promise Callback"));

console.log("End");
