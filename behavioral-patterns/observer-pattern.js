class Car {
  constructor(gas) {
    this.gas = gas;
    this.actions = [];
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  register(obs) {
    this.actions.push(obs);
  }

  unregister(obs) {
    this.actions.filter((el) => el !== obs);
  }

  notifyAll() {
    this.actions.forEach((el) => console.log("updated"));
  }
}
