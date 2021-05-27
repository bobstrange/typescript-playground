# Hello deno

## [インストール](https://deno.land/manual/getting_started/installation)

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

するだけ

## [環境構築](https://deno.land/manual/getting_started/setup_your_environment)

vscode_deno を入れて、コマンドパレットから `Deno: Initialize workspace configuration` をするだけ。
(※ デフォルトではこの拡張はグローバルで有効になっていないので、ワークスペース毎に個別でやる)

## [ハロワ](https://deno.land/manual@v1.10.2/getting_started/first_steps#hello-world)

`deno run` で実行

```bash
deno run https://deno.land/std@0.97.0/examples/welcome.ts
```

## [HTTP request](https://deno.land/manual@v1.10.2/getting_started/first_steps#making-an-http-request)

コマンドライン引数に指定されたサイトの中身を取得してくるコード

```bash
deno run https://deno.land/std@0.97.0/examples/curl.ts https://example.com
```

これは、エラーになる。
理由は、このプログラムに必要な実行権限(Network へのアクセス許可)を与えていないため

`--allow-net=example.com` を追加して実行すれば OK

```bash
deno run --allow-net=example.com https://deno.land/std@0.97.0/examples/curl.ts https://example.com
```

## [CLI](https://deno.land/manual/getting_started/command_line_interface)

### Script の実行

`deno run` でスクリプトを実行できる

ファイル名、URL，'-' (標準入力)

```bash
deno run main.ts
deno run https://mydomain.com/main.ts
cat main.ts | deno run -
```

### 引数

引数はスペース区切り
`Deno.args` で引数を参照できる

```bash
deno run main.ts a b c --help
```

```typescript
// main.ts
console.log(Deno.args); // ["a", "b", "c", "--help"]
```

※ スクリプト名の後のものは全て引数として処理される

```bash
// --allow-net も main.ts の引数として処理されてしまうので NG
deno run main.ts --allow-net
```

### watch

```bash
deno run --watch main.ts
```

## [Permissions](https://deno.land/manual@v1.10.2/getting_started/permissions)

Deno は基本的に Secure になっているので、明示的に Permission を渡さないと
Network, File, Environment などにアクセスできない。

Permission はコマンドライン引数で渡す

## [Debugging](https://deno.land/manual@v1.10.2/getting_started/debugging_your_code)

V8 Inspector Protocol に準拠しているもの (Chrome Devtool など) で Debug 可能

`--inspect` or `--inspect-brk` オプションをつけて Deno を実行すれば良い




