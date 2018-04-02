class Head {
  constructor() {
  }

  nod() {
    console.log('nodded');
  }

  speak(words) {
    console.log(`said "${words}"`);
  }
}

module.exports = Head;
