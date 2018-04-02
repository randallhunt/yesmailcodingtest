class Leg {
  constructor(side) {
    this.side = side;
  }

  step() {
    console.log(`${this.side} leg stepped`);
  }

  kick() {
    console.log(`${this.side} leg kicked`);
  }
}

module.exports = Leg;
