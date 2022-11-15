/**
 * the begginer recursion program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-14
 */

/**
 * Reverses a string using recursion.
 *
 * @param {string} inputString - input from main
 * @returns {string} reversed string
 */
function reverse(inputString: string): string {
  if (inputString === '') {
    return inputString
  } else {
    return reverse(inputString.slice(1)) + inputString.slice(0, 1)
  }
}

const reversedString = 'reversed'

console.log(`original: ${reversedString}`)
console.log(`reversed: ${reverse(reversedString)}`)

console.log('\nDone.')
