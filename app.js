  const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
     // convertimos el valor a yen
     let valueInYen = valueInDollar  * 127.9;
     // retornamos el valor
     return valueInYen;
}



module.exports = { sum, fromEuroToDollar };  


/*
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){

    let euro = valueInDollar/oneEuroIs.USD;
    let valueInYen = euro * oneEuroIs.JPY;

    return parseFloat(valueInYen.toFixed(1));
}

const fromDollarToYen = function(valueInDollar){

    let euro = valueInDollar/oneEuroIs.USD;
    let valueInYen = euro * oneEuroIs.JPY;

    return parseFloat(valueInYen.toFixed(1));
}

 

module.exports = {fromEuroToDollar, fromDollarToYen}; */



 
