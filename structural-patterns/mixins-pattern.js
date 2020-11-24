class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "v6", "grey");
      case "honda":
        return new Car(2, "v8", "red");
    }
  }
}

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUVFactory {
  createCar(type) {
    switch (type) {
      case "cx5":
        return new Car(4, "v6", "grey");
      case "sante fe":
        return new Car(2, "v8", "red");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

let carMixin = {
  revEngine() {
    console.log(`The ${this.engine} is doing Vroom Vroom`);
  },
};

const autoManufacture = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createCar(model);

    default:
      break;
  }
};

Object.assign(Car.prototype, carMixin);

const honda = autoManufacture("car", "honda");

honda.revEngine();
