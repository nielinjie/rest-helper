import request from "supertest";

function json200(
  server: any,
  url: string,
  fun: (res) => void,
  done: () => void,
  code: number = 200
): void {
  request(server)
    .get(url)
    .expect("Content-Type", /json/)
    .expect(code)
    .expect(fun)
    .end(function (err, res) {
      if (err) throw err;
      done();
    });
}
