const mummifiy = require("./stringMummifier")

describe("String Mummifier", () => {
  it('should not mummify empty string', () => {
    expect(mummifiy("")).toEqual("")
  });

  it('should not mummify words with no vowels', () => {
    expect(mummifiy("str")).toEqual("str")
  });

  it('should mummify a vowel', () => {
    expect(mummifiy("a")).toEqual("mummy")
  });

  it('should mummify consonents and a vowel', () => {
    expect(mummifiy("bla")).toEqual("blmummy")
  });

  it('should not mummify less than 30 percent vowels', () => {
    expect(mummifiy("blah")).toEqual("blah")
  });

  it('should mummify continuous vowels once', () => {
    expect(mummifiy("hear")).toEqual("hmummyr")
  });

  it('should mummify multiple sets of vowels', () => {
    expect(mummifiy("blaahah")).toEqual("blmummyhmummyh")
  });

  it('should mummify capital vowels', () => {
    expect(mummifiy("blAhe")).toEqual("blmummyhmummy")
  });
});