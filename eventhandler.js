

class EventHandler {

    constructor() {
        this.listeners = [];
        this.queue = [];
    }

    enqueue(event) {
        this.queue.push(event);
    }

    distribute() {
        for( let i = 0; i < this.listeners.length ; i++ ) {
            for(let j = 0; j < this.queue.length ; j++) {
                this.listeners[i].handleEvent(this.queue[j]);
            }
        }

        this.queue = [];
    }

    register(component) {
        this.listeners.push(component);
    }

    spewEvents() {
        let str = "";
        for(let i = 0; i < this.queue.length ; i++) {
            str += this.queue[i].name + " " + this.queue[i].data + "\n"; 
        }
    }
}


class Event {
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }
}




