let temp = 55

// Logical And Operator - True if both sides are true. False otherwise

// Logical Or Operator - True if at least one is true. false otherwise

// if(temp >= 60 && temp <= 90){
//     console.log('it is good!')
// }

// if(temp <= 0 || temp >= 120){
//     console.log('do not go outside!')
// }else {
//     console.log('do what you want')
// }

//Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// are both vegan? Only offer up vegan dishes
if(isGuestOneVegan && isGuestTwoVegan ){
console.log('Only offer up vegan dishes')
}
// At least one vegan? Make sure to offer up some vegan options.

else if(isGuestOneVegan || isGuestTwoVegan ){
 console.log('offer up some vegan options.')

}else {
    console.log(' Offer up anything on the menu');
}
//Else, Offer up anything on the menu

