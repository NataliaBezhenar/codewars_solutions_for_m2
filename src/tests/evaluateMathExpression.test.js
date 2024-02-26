import { calc } from "../2kyu/evaluateMathExpression_2kyu";

it("Evaluate mathematical expression", () => {
  expect(calc("1+1")).toBe(2);
  expect(calc("1 - 1")).toBe(0);
  expect(calc("1* 1")).toBe(1);
  expect(calc("1/1")).toBe(1);
  expect(calc("-123")).toBe(-123);
  expect(calc("123")).toBe(123);
  expect(calc("2 /2+3 * 4.75- -6")).toBe(21.25);
  expect(calc("12* 123")).toBe(1476);
  expect(calc("2 / (2 + 3) * 4.33 - -6")).toBe(7.732);
  expect(
    calc(
      "(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) "
    )
  ).toBe(1);
});
