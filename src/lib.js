// main exported function
function buildCollection(arr) {
  let output = [];

  // find all top level names
  arr.map((item) => {
    let names = getNames(output);
    output = addName(item.name, output);
    output = addName(item.parent, output);
  });

  // find children
  arr.map((item) => {
    output = addChild(item, output);
  });

  return output;
}

// add a top-level name if it's not already there
function addName(name, collection) {
  let output = collection.slice();
  let keys = getNames(output);
  if (keys.indexOf(name) === -1) {
    output.push({ name: name, children: [] });
  }
  return output;
}

// add a child to a top-level name
function addChild(item, collection) {
  let output = collection.slice();
  let person = getByName(item.parent, collection);
  let names = getNames(output);
  let index = names.indexOf(item.parent);
  if (index) {
    let child = getByName(item.parent, collection);
    if (child) {
      output[index].children.push({ name: item.name, children:[] });
    }
  }
  return output;
}

// get names in the array
function getNames(arr) {
  return arr.map((item) => item.name);
}

// get a child node by name
function getByName(name, array) {
  for (let item in array) {
    if (array[item].name === name) {
      return array[item];
    }
  }
  return null;
}

module.exports = {
  buildCollection,
  addName,
  addChild,
  getNames,
  getByName
};
