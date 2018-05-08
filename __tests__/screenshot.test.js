const TakePrint = require('../screenshot');
const array = [
  {width: 1024, height: 768},
  {width: 800, height: 600},
  {width: 1440, height: 900},
  {width: 320, height: 600},
];
const data = {typeImage: 'jpeg', path: 'tmp', sizes: array, url: 'http://www.bbc.com/'};
let instance;
let dataObject;

jest.setTimeout(100000);


describe('#getUser() using Promises', () => {
  beforeAll(async () => {
    instance = new TakePrint(data);
    dataObject = await instance.run();
  });

  it('should load user data', () => {
    expect(TakePrint).toBeDefined();
  });

  it('should have tmp path', () => {
    expect(instance.config.path).toBe('tmp');
  });

  it('should have same url', () => {
    expect(instance.config.url).toBe(data.url);
  });

  it('should have size length the same size of array length', () => {
    expect(instance.config.sizes.length).toBe(array.length);
  });

  it('should have width the same size of array width', () => {
    expect(instance.config.sizes[0].width).toBe(array[0].width);
  });

  it('should have height the same size of array height', () => {
    expect(instance.config.sizes[0].height).toBe(array[0].height);
  });

  it('should have height the same size of array height', async () => {
    expect.assertions(2);
    expect(dataObject.length).toBe(array.length);
    expect(dataObject.length).toBe(instance.config.sizes.length);
  });
});
