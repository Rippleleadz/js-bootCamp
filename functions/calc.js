// 15/20 -> You got a C (75%)!

// student score

// total score

// A 90- 100, B 80-89, C 70-79, D 60-69, F 0-59



let scoreCalc = function (score, total) {

  let percent = (score / total) * 100

  let letter = '';

  if (percent >= 90) {
    letter = 'A'
  } else if (percent >= 80) {
    letter = 'B'
  } else if (percent >= 70) {
    letter = 'C'
  } else if (percent >= 60) {
    letter = 'D'

  } else {
    letter = 'F'
  }



  return `You got a (${letter})(${percent}) `
}

let result = scoreCalc(5, 20)
console.log(result);