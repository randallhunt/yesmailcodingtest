const Leg = require('./leg');
const Arm = require('./arm');
const Head = require('./head');
const Body = require('./body');

class Robot {
  constructor() {
    this.leftLeg = new Leg('left');
    this.rightLeg = new Leg('right');
    this.legs = [this.leftLeg, this.rightLeg];

    this.leftArm = new Arm('left');
    this.rightArm = new Arm('right');
    this.arms = [this.leftArm, this.rightArm];

    this.head = new Head();

    this.body = new Body();
  }

  nod() {
    this.head.nod();
  }

  speak() {
    this.head.speak('hello world');
  }

  walk(steps) {
    var leg = parseInt(2 * Math.random(), 10);
    var steps = steps ? steps : 8;
    for (let i=0; i < steps; i++) {
      this.legs[leg].step();
      leg = (leg + 1) % 2;
    }
  }

  wave() {
    var arm = parseInt(2 * Math.random(), 10);
    this.arms[arm].wave();
  }
}

module.exports = Robot;
