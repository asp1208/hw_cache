import { Cache } from "../src/cache";

describe("Set function", () => {
  it('should return null if set without args', () => {
    const c = new Cache();
    c.set();
    expect(c.get('name')).toBeNull();

  });
});


describe("Get function", () => {
  it('should return Jhon if key name is exist', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 3);
    expect(c.get('name')).toEqual('Jhon')
  });
});

describe("Get function", () => {
  it('should return null if key is not exist', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 3);
    expect(c.get('age')).toBeNull();
  });
});


describe("Set function", () => {
  it('should set hits = 1 if set without hits arg', () => {
    const c = new Cache();
    c.set('name', 'Jhon');
    c.get('name');
    expect(c.get('name')).toBeNull();
  });
});

describe("Set function", () => {
  it('should throw an error if hits is negative', () => {
    const c = new Cache();
    c.set('name', 'Jhon', -1);
    expect(c.get('name')).toBeNull();
  });
});

describe("Check hits decriment", () => {
  it('should return null if hits = 0', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 2);
    c.get('name');
    c.get('name');
    expect(c.get('name')).toBeNull();
  });
});

describe("getHistory function", () => {
  it('should check history generation', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 2);
    c.get('name');
    c.get('name');
    expect(c.getHistory()).toEqual(expect.arrayContaining(["name Jhon 1"], ["name Jhon 0"]));
  });
});

describe("getHistory function", () => {
  it('should pass if history is empty', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 2);
    expect(c.getHistory()).toEqual([]);
  });
});

describe("Set function", () => {
  it('should set hits = 1 if set without hits arg', () => {
    const c = new Cache();
    c.set('name', 'Jhon');
    c.get('name');
    expect(c.get('name')).toBeNull();
  });
});

describe("2 cache element", () => {
  it('should return values if keys are exist', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 1);
    c.set('age', '24', 1);
    expect(c.get('name')).toEqual('Jhon');
    expect(c.get('age')).toEqual('24');
  });
});

describe("2 cache element", () => {
  it('should set hits = 1 if set without hits arg', () => {
    const c = new Cache();
    c.set('name', 'Jhon', 1);
    c.set('age', '24', 1);
    c.get('name');
    c.get('age');
    expect(c.get('name')).toBeNull();
    expect(c.getHistory()).toEqual(expect.arrayContaining(["name Jhon 0"], ["age 24 0"]));
  });
});
