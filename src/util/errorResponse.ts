export default class ErrorResponse extends Error {
  constructor(
    public statusCode: number,
    public primaryError: string,
    public originalError?: any
  ) {
    super(primaryError);
    Error.captureStackTrace(this, this.constructor);
  }
}
