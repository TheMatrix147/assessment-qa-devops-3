const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('it should return an empty array when given an empty array', () => {
    const input = [];
    const output = shuffle(input);
    expect(output).toEqual([]);
  });

  test('it should return an array with the same length as the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffle(input);
    expect(output.length).toEqual(input.length);
  });

  test('it should return an array with the same elements as the input array', () => {
    const input = [2, 1, 5, 4, 3];
    const output = shuffle(input);
    expect(output.sort()).toEqual(input.sort());
  });

  test('it should return a different order than the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffle(input);
    expect(output).not.toEqual(input);
  });
});