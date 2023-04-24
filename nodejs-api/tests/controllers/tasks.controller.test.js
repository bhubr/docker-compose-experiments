const request = require("supertest");
const app = require("../../src/app");
const { truncateTasks, shutdownDb } = require("../_support/helpers");

describe("tasks controller", () => {
  beforeEach(truncateTasks);

  afterAll(shutdownDb);

  describe("postTask", () => {
    it("nok - no title", async () => {
      await request(app).post("/api/tasks").send({}).expect(400);
    });
    it("ok - all fields provided", async () => {
      await request(app)
        .post("/api/tasks")
        .send({ title: "Sample task" })
        .expect(200);
    });
  });
});
