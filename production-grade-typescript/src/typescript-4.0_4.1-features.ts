// Variadic tuple type

// Tuple の途中に ... を書くことができるようになった
type Bar<T extends any[]> = [boolean, ...T, boolean]

//labeled tuple type
// Tuple の定義時に、label: 型 と書くことができるようになった
// Auto Completion 時に、わかりやすくなる

type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postal: number
]

function printAddress(...address: Address) {}

// Recursive Type Aliases

/** Before TS 4.0 */
// Type Alias 時に、自分自身を参照することができなかった
// そのため、別の Type Alias を定義して、参照させることで解決していた
/*
type JSONValue = string | number | boolean | null | JSONArray | JSONObject
interface JSONObject {
  [k: string]: JSONValue
}
type JSONArray = Array<JSONValue>
*/

// Type Alias に自分自身を記述できるようになった
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue
    }

const val: JSONValue = {
  name: 'mike',
  address: {
    street: 'Something St.',
  },
}

// Template Type Literal from TS 4.1

type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`
// 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
