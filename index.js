const buildCollection = require('./src/lib').buildCollection;

const data = people=[
  { name: "John", parent: "Sue" },
  { name: "Jack", parent: "Steve" },
  { name: "Jill", parent: "Sally" },
  { name: "Wayne", parent: "Jack" },
  { name: "Twinkle", parent: "Jack" },
  { name: "Garth", parent: "Sue" },
  { name: "Steve", parent: "Alejandro" },
  { name: "Peter", parent: "Alejandro" },
];

const result = buildCollection(data);

console.log(JSON.stringify(result));
