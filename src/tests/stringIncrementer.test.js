import { incrementString } from "../3-5kyu/stringIncrementer_5kyu";

describe("String incrementer", () => {
  it("should run", () => {
    expect(incrementString("foobar000")).toBe("foobar001");
    expect(incrementString("foobar00999")).toBe("foobar01000");
    expect(incrementString("foobar001")).toBe("foobar002");
    expect(incrementString("foo")).toBe("foo1");
    expect(incrementString("foobar1")).toBe("foobar2");
    expect(incrementString("1")).toBe("2");
    expect(incrementString("009")).toBe("010");
    expect(incrementString("fo99obar99")).toBe("fo99obar100");
  });
});
