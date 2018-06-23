// //Multiple arguments

// let add = function(a, b, c){
//   return a + b + c
// }

// let result = add(10, 1, 5)
// console.log(result)

// //Deafult arguments

// let getScoreText = function (name = 'Anonymous', score = 0) {
//    // return 'name: ' + name + ' - Score: ' + score
//    return `Name: ${name} - Score: ${score}`
// }

// let scoreText = getScoreText(undefined, 99);

// console.log(scoreText)

//challenge area 

//a 25% tip on a $40 would be $10

let getTip = function(total, percent = .2){
    
    let tipPercent = percent * 100;
    let tip =total * percent
    return ` a ${percent * 100}% tip on a $${total} would be $${total * percent}`
}

let tip = getTip(60)

console.log(tip)

