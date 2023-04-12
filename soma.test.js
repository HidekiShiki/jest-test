const calculo = require('./soma')

test('Soma dois numeros', ()=>{

    expect(calculo.soma(10,20)).toBe(30)

})