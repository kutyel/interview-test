export default class Emitter {
    constructor() {
        this.events = new Map()
    }

    subscribe(name, cb) {
        this.events.set(name, [
            ...this.events.has(name) ? this.events.get(name) : [], cb
        ])
    }

    emit(name, ...args) {
        this.events.has(name) && this.events.get(name).forEach(fn => fn(...args))
    }
}
