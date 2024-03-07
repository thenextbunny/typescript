# TypeScript

This is a repository for my TypeScript learning. I will be using this repository to store all the
code I write while learning TypeScript.

## Installation

To install TypeScript in your system:

```bash
npm install -g typescript ts-node
```

To install TypeScript in a project, you will need to create a `tsconfig.json` file in the root of
your project. This file will contain the configuration for the TypeScript compiler.

```bash
npm init
npm install typescript --save-dev
```

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true
    }
}
```

## Compilation

In this repository, I will be using the following commands to compile the TypeScript code to
JavaScript.

```bash
tsc <file> # manual compilation
tsc -w # automatic compilation
```

## In practice

In my TypeScript practice, I running the JavaScript code in terminal or using the Live Server
extension in Visual Studio Code. For code indentation, I am using the Prettier and to check the code
I am using the ESLint.

## Helpful commands for my practice

```bash
tsc --target ES5 --module commonjs <file> # compile to ES5 and commonjs
ts-node <file> # run the TypeScript file
```
