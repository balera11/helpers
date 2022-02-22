/**
 * @param {string} str
 * @returns {string}
 */
function decodeFromHEX(str) {
  let res = ''

  for (let i = 0; i < str.length; i += 2) {
    res += String.fromCharCode(parseInt(str.substring(i, i + 2), 16))
  }

  return res
}
