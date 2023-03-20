const assertEquals = (actual, expected) => {
  return JSON.stringify(actual) === JSON.stringify(expected)
}

module.exports = {
  assertEquals
}