import { getOptionsCount } from "../3-5kyu/numberOfOptionsToBuildUpAWord_5kyu";

it("numberOfOptionsToBuildUpAWord_5kyu", () => {
  expect(getOptionsCount("example", ["exa", "exam", "ple"])).toBe(1);
  expect(getOptionsCount("example", ["exa", "exam", "ple", "mple"])).toBe(2);
});
