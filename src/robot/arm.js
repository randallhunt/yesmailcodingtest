class Arm {
  constructor(side) {
    this.side = side;
  }

  wave() {
    console.log(`${this.side} arm waved`);
  }
}

module.exports = Arm;
