import { generateHashtag } from "../3-5kyu/hashTagGenerator_5kyu";

describe("generateHashtag", () => {
  it("runs without errors", () => {
    expect(generateHashtag(" Hello there thanks for trying my Kata")).toBe(
      "#HelloThereThanksForTryingMyKata"
    );
    expect(generateHashtag("    Hello     World   ")).toBe("#HelloWorld");
    expect(generateHashtag("       ")).toBe(false);
  });
});
