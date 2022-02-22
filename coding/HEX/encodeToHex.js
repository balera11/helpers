/**
 * @param {string} str
 * @returns {string}
 */
function encodeToHEX(str) {
  let res = ''

  for (let i = 0; i < str.length; i += 1) {
    res += '' + str.charCodeAt(i).toString(16)
  }

  return res
}
