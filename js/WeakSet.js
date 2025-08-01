"use strict";

class ObjectTracker {
  #processedObjList = new WeakSet();
  mark(obj) {
    this.#processedObjList.add(obj);
  }

  wasProcessed(obj) {
    if (this.#processedObjList.has(obj)) return true;
    else if (!this.#processedObjList.has(obj)) return false;
  }
}

const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true
