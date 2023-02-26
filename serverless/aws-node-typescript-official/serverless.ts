import { AWS } from "@serverless/typescript";

const provider: AWS["provider"] = {
  name: "aws",
  runtime: "nodejs18.x",
};

const config: AWS = {
  service: "aws-node-typescript-official",
  frameworkVersion: "3",
  provider,
  plugins: ["serverless-esbuild"],
  functions: {
    hello: { handler: "src/helloHandler.hello" },
  },
};

module.exports = config;
