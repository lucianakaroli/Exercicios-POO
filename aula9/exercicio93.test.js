import { somar } from './index';


describe('somar', () => {
    it.each([
        [0,0,0],
        [1,0,1],
        [-1,-1,0],
        [0,-1,1]
    ])('deve retornar %i para %i + %i', (r,x,y) => {
        expect(somar(x,y)).toBe(r);
    });
});
