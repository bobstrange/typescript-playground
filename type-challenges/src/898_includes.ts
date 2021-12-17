// これだと、リテラル型になってしまうので、string 型として判定させたい...
// type Includes<T extends any[], U> = U extends keyof T ? true : false

type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type C1 = Includes<[1, 2, 3], 3>
type C2 = Includes<[1, 2, 3], 4>
type C3 = Includes<[boolean, 1, 2, 3], false>
type C4 = Includes<[true, 1, 2, 3], boolean>
type C5 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>
