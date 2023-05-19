/**
 * clase calculadora
 * @class
 * @public
 * @version 1.0.0
 */
export class Calculadora {
  constructor() {}

  /**
   * suma de dos números
   * @param {number} a - primer numero
   * @param {number} b - segundo numero
   * @returns {number} - resultado de la suma
   * @public
   * @version 1.0.0
   * @example
   * let calculadora = new Calculadora();
   * let resultado = calculadora.suma(2, 3);
   * console.log(resultado); // 5
   */
  sumar(a: number, b: number): number {
    return a + b;
  }

  /**
   * resta de dos números
   * @param {number} a - primer numero
   * @param {number} b - segundo numero
   * @returns {number} - resultado de la resta
   * @public
   * @version 1.0.0
   * @example
   * let calculadora = new Calculadora();
   * let resultado = calculadora.resta(2, 3);
   * console.log(resultado); // -1
   */
  restar(a: number, b: number): number {
    return a - b;
  }
}
