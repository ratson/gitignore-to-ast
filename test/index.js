import test from 'ava'

import parseGitignore from '..'

test('blank', t => {
  t.deepEqual(parseGitignore(''), { type: 'root', body: [] })
})

test('comment', t => {
  t.deepEqual(parseGitignore('# comment'), {
    type: 'root',
    body: [
      {
        type: 'comment',
        value: '# comment',
        line: 1,
      },
    ],
  })
})

test('sinelg rule', t => {
  t.deepEqual(parseGitignore('*'), {
    type: 'root',
    body: [
      {
        type: 'rule',
        value: '*',
        line: 1,
      },
    ],
  })
})

test('multiple line', t => {
  t.deepEqual(parseGitignore('# multiple line\n*\r\n\n!.gitignore'), {
    type: 'root',
    body: [
      {
        type: 'comment',
        value: '# multiple line',
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
  })
})
