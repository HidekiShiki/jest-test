const modulo1 = require('./modulo1')

describe('basic feature', ()=>{
it('should return the right value', () =>{
    expect(modulo1.func1(10)).toBe(11)
    })

    it('func2', () => {
        const cb = jest.fn()
        cb.mockReturnValue(1)
        expect(modulo1.funct2(10, cb)).toBe(11)
        expect(cb.mock.calls[0][0]).toBe(10)
    })
})