
function capitalized(word){
  let firstLetter = word[0].toUpperCase()
  return word = word.replace(word[0], firstLetter)
}

function reverseStr(word){
  wordArr = word.split('')
  wordArr = wordArr.reverse()
  return word = (wordArr.toString()).replaceAll(',','')
}

function calc(value1, value2, operation){
  if(operation === 'add'){
    return value1 + value2
  }
  else if(operation === 'subtract'){
    return value1 - value2
  }
  else if(operation === 'multiply'){
    return value1 * value2
  }
  else if(operation === 'divide'){
    return value1 / value2
  }
}

function cipher(word, shift){
  word = word.split('')
 
  let string = ''
  let letter = undefined

  for(i of word){
    if(i.toUpperCase() !== i){
      letter = shiftFunc(i,'abcdefghijklmnopqrstuvwxyz', shift )
    }
    else{
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if(alphabet.includes(i)){
        letter = shiftFunc(i, alphabet ,shift)
      }
      else{
        letter = i
      }
    }
    string += letter
  }
  return string
}

function shiftFunc(letter, alphabet, shift){
  let position = alphabet.indexOf(letter) + shift
  if(position >= alphabet.length){
    position = position - alphabet.length
  }
  return alphabet[position]
}

function analyzeArray(array = [1,8,3,4,2,6]){
  array = array.sort()

  let length = array.length 
  let min = array[0]
  let max = array[length - 1]
  let average = 0

  for( i of array){
    average += i
  }
  average = average/length

  return {min: min, max: max, average: average, length: length}
}
analyzeArray()
module.exports = {
  capitalized,
  reverseStr,
  calc,
  cipher, 
  analyzeArray
}