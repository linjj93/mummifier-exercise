const mummifiy = require("./stringMummifier");

describe("String Mummifier", () => {
  it("should modify singel vowel", () => {
    expect(mummifiy("a")).toEqual("mummy");
  });

  it("should modify singe vowel capital letter", () => {
    expect(mummifiy("A")).toEqual("mummy");
  });

  it("should not modify string with less than 30% vowels", () => {
    expect(mummifiy("b")).toEqual("b");
  });

  it("should modify string with exactly 30% vowels", () => {
    expect(mummifiy("hhhhhhhooo")).toEqual("hhhhhhhmummy");
  });

  it("should modify string with more than 30% vowels", () => {
    expect(mummifiy("moon")).toEqual("mmummyn");
  });

  it("should return empty string if input empty string", () => {
    expect(mummifiy("")).toEqual("");
  });

  test("should throw exception if input is not string", () => {
    mummifiy(2);
    const t = () => {
      mummifiy(2);
    };
    expect(t).toThrow(TypeError);
  });

  it("should modify string twice with non consecutive vowels", () => {
    expect(mummifiy("hello")).toEqual("hmummyllmummy");
  });

  it("should modify string once with consecutive vowels", () => {
    expect(mummifiy("moon")).toEqual("mmummyn");
  });
});
