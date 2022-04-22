interface RestError {
  code?: string;
  message: string;
  type: string;
  instance: string;
  description?: string;
}
type ErrorHandle = (err: Error) => RestError;

export function errors(
  handle: ErrorHandle,
  code: number
): (error: Error, res) => void {
  return function (err: Error, res) {
    let errorJson = handle(err);
    res.status(code).json(errorJson).send();
  };
}
