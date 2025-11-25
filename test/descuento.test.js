// test/descuento.test.js

const { calcularDescuento } = require('../src/descuento');

const casos = [
  // Columna 1 / Caso 1
  {
    nombre: 'C1: Normal, monto 50, sin BF → 0%',
    monto: 50,
    tipoCliente: 'NORMAL',
    esBlackFriday: false,
    esperado: 0,
  },
  // Columna 2 / Caso 2
  {
    nombre: 'C2: Premium, monto 150, sin BF → 20%',
    monto: 150,
    tipoCliente: 'PREMIUM',
    esBlackFriday: false,
    esperado: 30, // 20% de 150
  },
  // Columna 3 / Caso 3
  {
    nombre: 'C3: Normal, monto 250, sin BF → 10%',
    monto: 250,
    tipoCliente: 'NORMAL',
    esBlackFriday: false,
    esperado: 25, // 10% de 250
  },
  // Columna 4 / Caso 4
  {
    nombre: 'C4: Premium, monto 80, con BF → 30%',
    monto: 80,
    tipoCliente: 'PREMIUM',
    esBlackFriday: true,
    esperado: 24, // 30% de 80
  },
  // Columna 5 / Caso 5
  {
    nombre: 'C5: Normal, monto 500, con BF → 30%',
    monto: 500,
    tipoCliente: 'NORMAL',
    esBlackFriday: true,
    esperado: 150, // 30% de 500
  },
  // Columna 6 / Caso extra
  {
    nombre: 'C6: Normal, monto 120, sin BF → 0%',
    monto: 120,
    tipoCliente: 'NORMAL',
    esBlackFriday: false,
    esperado: 0,
  },
];

describe('calcularDescuento - tabla de decisión', () => {
  test.each(casos)('$nombre', (caso) => {
    const resultado = calcularDescuento(
      caso.monto,
      caso.tipoCliente,
      caso.esBlackFriday
    );

    expect(resultado).toBe(caso.esperado);
  });
});
