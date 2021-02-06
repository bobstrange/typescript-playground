// ref: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

type Point = { x: number; y: number }
type P = keyof Point // "x" | "y"

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish // number

type Mapish = { [k: string]: unknown }
type M = keyof Mapish // string | number
