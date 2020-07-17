### ttag-po-loader
Webpack loader for .po files for ttag
A working proof of concept for https://github.com/ttag-org/ttag-webpack-plugin/issues/8

#### Installation

```console
> yarn add --dev https://github.com/dimaqq/ttag-po-loader
> yarn add --dev ttag-cli
```

#### Webpack rules

```js
draft.module.rules.push({
  test: [/\.po$/],
  loader: "ttag-po-loader",
});
```


P.S. make sure `.po` file extension is not covered by `file-loader`, for example for CRA, override:

```js
const loaders = draft.module.rules.find(r => r.oneOf).oneOf;
loaders.find(o => o?.loader?.match(/file-loader/)).exclude.push(/[.]po$/);
```
