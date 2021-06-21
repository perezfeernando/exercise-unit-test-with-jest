 
// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
}); 




test("Un euro deberia ser ... dolares", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});


 test("Un dolar deberia ser ... yen", function(){
    //importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    //hago mi comparación (la prueba)
    expect(fromDollarToYen(3.2).toBe(409.28));
 }); 



  
