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

const factory = new CarFactory();

const honda = factory.createCar("honda");

console.log(honda);
