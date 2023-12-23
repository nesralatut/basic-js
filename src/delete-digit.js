const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString();
  let maximal = Number(string.slice(1));

  for (let i = 1; i < string.length; i += 1) {
    const current = Number(string.slice(0, i).concat(string.slice(i + 1)));
    if (current > maximal) maximal = current;
  }

  const last = Number(string.slice(0, -1));
  if (last > maximal) maximal = last;

  return maximal;
}

module.exports = {
  deleteDigit
};
