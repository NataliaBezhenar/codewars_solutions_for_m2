import { simple_assembler } from "../3-5kyu/simpleAssemblerInterpreter_5kyu";

describe("simple assembler test", () => {
  it("should return correct results", () => {
    expect(
      simple_assembler([
        "mov a 5",
        "inc a",
        "dec a",
        "dec a",
        "jnz a -1",
        "inc a",
      ])
    ).toStrictEqual({ a: 1 });

    expect(
      simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"])
    ).toStrictEqual({ a: 0, b: -20 });
  });
});
