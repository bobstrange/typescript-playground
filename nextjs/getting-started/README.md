# Next.js Getting Started

## Setup

### create-next-app で初期化する

```bash
yarn create next-app getting-started
```

### TypeScript 関係の設定を入れる

```bash
touch tsconfig.json
yarn add -D typescript @types/react @types/node
yarn dev
```

### ESLint の設定をする

```bash
yarn eslint --init
```

質問には ↓のように答える

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser, node
✔ What format do you want your config file to be in? · JavaScript
Local ESLint installation not found.
✔ Would you like to install them now with npm? · No

今回は yarn を使うので、最後の質問は No を選ぶ

そして、自前でインストールする

```bash
yarn add -D eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest
```