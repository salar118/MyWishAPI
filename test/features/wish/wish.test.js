const Wish = require("../../../features/wish/wish");
const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').default;

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;
const opts = {};

beforeAll(async () => {
  mongoServer = new MongoMemoryServer({
    debug: true
  });
  const mongoUri = await mongoServer.getConnectionString();
  const connect = await mongoose.connect(mongoUri, opts, (err) => {
    if (err) console.error(err);
  });
});

afterAll(() => {
  console.log('afterAll.................');
  mongoose.disconnect();
  mongoServer.stop();
});

describe("Wish", () => {
  it("should save a wish", async () => {
    const newWish = new Wish({
      title: 'title wish sd ',
      story: 'story of wish'
    });
    await newWish.save();

    const cnt = await Wish.count();
    expect(cnt).toBe(1);
  });
});