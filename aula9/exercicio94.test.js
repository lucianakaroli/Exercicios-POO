import { ContaCorrente } from './exercicio94.js';


describe('ContaCorrente', () => {
    let conta;
    describe('contructor', () => {
        it('deve inicializar a conta com o saldo inicial 0', () => {
            const saldoInicial = 0;
            conta = new ContaCorrente(saldoInicial);
            expect(conta.saldo).toBe(0);
        });
        it('deve lançar uma exceção com o saldo inicial -1', () => {
            const saldoInicial = -1;
            expect(() => new ContaCorrente(saldoInicial)).toThrow(Error);
        });
    });
    describe('depositar', () => {
        beforeEach(() => {
            const saldoInicial = 0;
            conta = new ContaCorrente(saldoInicial);
        });
        it('dado uma conta com saldo 0 deve depositar o valor 0.1', () => {
            conta.depositar(0.1);
            expect(conta.saldo).toBeCloseTo(0.1,2);
        });
        it('dado uma conta com saldo 0 deve depositar o valor 0.1 e depois 0.2', () => {
            conta.depositar(0.1);
            conta.depositar(0.2);
            expect(conta.saldo).toBe(0.3); //aqui irá falhar
            expect(conta.saldo).toBeCloseTo(0.3,2);
        });
    });
});
