test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});


test("Yen", function(){
    // importo la funcion desde app.js
    const {fromDollarToYen} = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.6);
});



  
