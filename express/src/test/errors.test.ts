import express from "express";
import { errorsHandled } from "../errors";

test("1", () => {
  expect(1).toEqual(1);
});
let app;
beforeAll(() => (app = express()));
function errorMap() {}
test("error", () => {
  app.get(
    "/",
    errorsHandled(
      (req, res) => {
        res.json({ hello: "world" }).status(200).send();
      },
      (err) => {
        return {
          message: err.message,
          code: 500,
          instance: "xxx:xx",
          type: "xxx",
        };
      }
    )
  );
});
