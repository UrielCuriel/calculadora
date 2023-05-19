import { it, describe, expect } from "vitest";
import { Calculadora } from "../src/calculadora";
describe("Calculadora", () => {
  it("debe hacer la operación de suma", () => {
    const calculadora = new Calculadora();
    const resultado = calculadora.sumar(2, 3);
    expect(resultado).toBe(5);
  });
  it("debe hacer la operación de resta", () => {
    const calculadora = new Calculadora();
    const resultado = calculadora.restar(2, 3);
    expect(resultado).toBe(-1);
  });
});
