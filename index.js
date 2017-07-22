export default class Emitter {
  e = new Map()
  subscribe = (n, cb) => (
    this.e.set(n, [...this.e.has(n) ? this.e.get(n) : [], cb]),
    () => this.e.set(n, this.e.get(n).filter(f => f !== cb)))
  emit = (n, ...a) => this.e.has(n) && this.e.get(n).map(f => f(...a))
}
