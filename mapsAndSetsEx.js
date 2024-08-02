new Set([1,1,2,2,3,4]) // {1,2,3,4}
// --------------------------------------------------------------------------

const question2 = [...new Set("referee")].join("") // "ref"
// --------------------------------------------------------------------------

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/
// --------------------------------------------------------------------------

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length
// --------------------------------------------------------------------------
const isVowel = (char) => 'aeiou'.includes(char)
const vowelCount = str => {
    const vowelMap = new Map();
    for(let char of str){
    let lowerCasedChar = char.toLowerCase()
    if(isVowel(lowerCasedChar)){
      if(vowelMap.has(lowerCasedChar)){
        vowelMap.set(lowerCasedChar, vowelMap.get(lowerCasedChar) + 1);
      } else {
        vowelMap.set(lowerCasedChar, 1);
      }
    }
  }
  return vowelMap;
}



