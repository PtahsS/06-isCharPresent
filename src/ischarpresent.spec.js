/* global require, test, expect */
const { isCharPresent } = require("./index");

describe('isCharPresent checking...', () => {

  test("Contain symbol 'l' ", () => {
        expect(isCharPresent('Hello UK', 'l')).toBe(true);
  });

  test("Doesn`t contain u", () => {
        expect(isCharPresent('Very hot day today!', 'u')).toBe(false);
  });

})

