import { solution } from "../3-5kyu/rangeExtraction_4kyu";

describe("rangeExtraction", () => {
  it("should run", () => {
    expect(
      solution([
        -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
      ])
    ).toStrictEqual("-6,-3-1,3-5,7-11,14,15,17-20");
    expect(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20])).toStrictEqual(
      "-3--1,2,10,15,16,18-20"
    );
    expect(
      solution([
        -83, -81, -79, -78, -75, -73, -71, -68, -66, -63, -62, -59, -58, -57,
        -55, -54, -52, -49, -47, -45, -43, -41, -38, -37, -34,
      ])
    ).toStrictEqual(
      "-83,-81,-79,-78,-75,-73,-71,-68,-66,-63,-62,-59--57,-55,-54,-52,-49,-47,-45,-43,-41,-38,-37,-34"
    );
  });
});