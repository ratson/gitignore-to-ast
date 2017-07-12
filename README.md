# gitignore-to-ast

Parse .gitignore file to AST

## Installation

```
npm install gitignore-to-ast --save
```

## Usage

<!-- eslint-disable strict,no-unused-vars -->

```js
const parseGitignore = require('gitignore-to-ast')
const parsed = parseGitignore('# comment\n*\r\n\n!.gitignore')
const result = {
  type: 'root',
  body: [
    {
      type: 'comment',
      value: '# comment',
      line: 1,
    },
    {
      type: 'rule',
      value: '*',
      line: 2,
    },
    {
      type: 'rule',
      value: '!.gitignore',
      line: 4,
    },
  ],
}
```
