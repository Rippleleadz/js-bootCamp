//Global scope (converFahrenheitCelsius, tempOne, temptTwo,)
  // Local scope (fahrenheit, celsius)
   //Local scope (isFreezing)

let convertFahrenheitToCelsius = function(fahrenheit){

    let celsius = (fahrenheit- 32 ) * 5 / 9;

    if (celsius <= 0){
        let isFreezing = true
    }
    return celsius
}

 let temp1 = convertFahrenheitToCelsius (32);
 let temp2 = convertFahrenheitToCelsius (68);
  console.log(temp1)
  console.log(temp2)
 