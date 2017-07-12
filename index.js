'use strict'

function toAst(s, i) {
  const value = s.trim()
  const line = i + 1
  if (value.length === 0) {
    return false
  }
  if (value.indexOf('#') === 0) {
    return {
      type: 'comment',
      value,
      line,
    }
  }
  return {
    type: 'rule',
    value,
    line,
  }
}

module.exports = content => {
  const lines = content.split(/\r?\n/)
  return {
    type: 'root',
    body: lines.map(toAst).filter(Boolean),
  }
}
