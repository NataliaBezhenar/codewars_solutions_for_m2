import { humanReadable } from "../3-5kyu/humanReadableTime_5kyu";

describe("humanReadable", () => {
  it("returns time in readable format", () => {
    expect(humanReadable(0)).toBe("00:00:00");
    expect(humanReadable(39)).toBe("00:00:39");
    expect(humanReadable(130)).toBe("00:02:10");
    expect(humanReadable(45779)).toBe("12:42:59");
    expect(humanReadable(500000)).toBe("99:59:59");
    expect(humanReadable(3660)).toBe("01:01:00");
    expect(humanReadable(458)).toBe("00:07:38");
  });
});
