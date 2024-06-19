const functions = require('./code')

const capitalized = functions.capitalized

const reverseStr = functions.reverseStr

const calc = functions.calc

const cipher = functions.cipher

analyzeArray = functions.analyzeArray

it('First letter is Capitalized', () =>{
  expect(capitalized('apple')).toMatch('Apple')
})
/* reverse str */
it('String is reversed', () =>{
  expect(reverseStr('apple')).toMatch('elppa')
})
/* calculator */
it('adds correctly', () =>{
  expect(calc(2, 4, 'add')).toEqual(6)
})

it('subtracts correctly', () =>{
  expect(calc(6, 2,'subtract')).toEqual(4)
})

it('multiplies correctly', () => {
  expect(calc(6, 6, 'multiply')).toEqual(36)
})

it('divides correctly', () => {
  expect(calc(81, 9, 'divide')).toEqual(9)
})
/* cipher */
it('caeserCipher', () => {
  expect(cipher('apple', 3)).toBe('dssoh')
})

it('caeserCipher accounts for punctuation', ()=>{
  expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
/* array */
it('analyze array => {min, max, avg, length}', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({min:1 , max: 8, average: 4, length: 6})
})