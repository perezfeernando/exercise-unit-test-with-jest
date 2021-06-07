 

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



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

 

module.exports = {fromEuroToDollar, fromDollarToYen};



 
