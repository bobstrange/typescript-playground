declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchJSONPath(value: string): R
    }
  }
}
