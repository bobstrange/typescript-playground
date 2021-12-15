// これだと、リテラル型になってしまうので、string 型として判定させたい...
// type Includes<T extends any[], U> = U extends keyof T ? true : false
type Includes<T extends readonly any[], U> = U extends keyof T ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
