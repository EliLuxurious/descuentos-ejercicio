// src/descuento.js

/**
 * Calcula el descuento en base al monto, tipo de cliente y si es Black Friday.
 *
 * @param {number} monto
 * @param {'NORMAL' | 'PREMIUM'} tipoCliente
 * @param {boolean} esBlackFriday
 * @returns {number} monto de descuento
 */
function calcularDescuento(monto, tipoCliente, esBlackFriday) {
  if (esBlackFriday) {
    return monto * 0.3; // 30% para todos
  }

  if (tipoCliente === 'PREMIUM' && monto > 100) {
    return monto * 0.2; // 20% premium compra grande
  }

  if (tipoCliente === 'NORMAL' && monto > 200) {
    return monto * 0.1; // 10% normal compra muy grande
  }

  return 0;
}

module.exports = {
  calcularDescuento,
};
