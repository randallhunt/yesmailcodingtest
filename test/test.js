const chai = require('chai');
const expect = require('chai').expect;
const lib = require('../src/lib');

describe('buildCollection', () => {
  it('should build a collection of children based on an input collection of parents', () => {
    let input = [{ 'name': 'foo', parent: 'bar' }];
    let output = lib.buildCollection(input);
    expect(output).to.deep.equal([ {name: 'bar', children:[{ name: 'foo', children:[] }]} ]);
  });
});

describe('addName', () => {
  it('should add a name to the top level of a collecton', () => {
    let data = [];
    expect(lib.addName('foo', data)).to.deep.equal([{ name: 'foo', children: [] }]);
  });
});

describe('addChild', () => {
  it('should add a child based on the data of a parent', () => {
    let data = { name: 'foo', parent: 'bar' };
    let array = [{name: 'foo', children: []}, {name: 'bar', children: []}];
    let output = lib.addChild(data, array);
    expect(output).to.deep.equal([
      {name: 'foo', children: []},
      {name: 'bar', children: [{ name: 'foo', children: []}]}
    ]);
  });
});

describe('getNames', () => {
  it('should return an array of names from the collection', () => {
    let array = [ { name: 'foo', children: [] }, { name: 'bar', children: [] } ];
    let names = lib.getNames(array);
    expect(names).to.deep.equal(['foo', 'bar']);
  });
});

describe('getByName', () => {
  it('should return an item if the name exists', () => {
    let array = [ { name: 'foo', children: [] }, { name: 'bar', children: [] } ];
    let foo = lib.getByName('foo', array);
    expect(foo.name).to.equal('foo');
    let bar = lib.getByName('bar', array);
    expect(bar.name).to.equal('bar');
  });

  it('should return null if the name does not exist', () => {
    let array = [ { name: 'bar', children: [] } ];
    let foo = lib.getByName('foo', array);
    expect(foo).to.equal(null);
  });
});

