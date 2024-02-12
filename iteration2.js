console.log(`#Iteracción 2`)

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code

    let longestWord = '';
    
    for (
        let pos = 0;
        pos < param.length;
        pos++) {

      if (param[pos].length > longestWord.length) {
        longestWord = param[pos];
      }
    }
  
    return longestWord;
  }
console.log(findLongestWord(avengers))


//tengo que contar las letras de cada palabra
//cada palabra tiene un valor numerico ----length?
//elegir la palabra con el valor numerico mas alto ----bucles??
