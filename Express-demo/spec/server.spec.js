var request = require("request");

describe("calc", () => {
  it("should multiple 2 and 2", () => {
    expect(2 * 2).toBe(4);
  });
});

describe("get messages", () => {
  it("should return 200 Ok", (done) => {
    request.get("http://localhost:3000/messages", (err, res) => {
      //   console.log(res.body);
      expect(res.statusCode).toEqual(200);
      done();
      //console.log("I am here");
    });
  });
  it("should return a list, thats not empty", (done) => {
    //console.log("hey let me in ");
    request.get("http://localhost:3000/messages", (err, res) => {
      expect(JSON.parse(res.body).length).toBeGreaterThan(0);
      done();
    });
  });
});

describe(" get message from user", () => {
  it("should return 200 Ok", (done) => {
    request.get("http://localhost:3000/messages/Ram", (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
  it("name should be Ram", (done) => {
    request.get("http://localhost:3000/messages/Ram", (err, res) => {
      expect(JSON.parse(res.body)[0].name).toEqual("Ram");
      done();
    });
  });
});
