const expect = require("chai").expect;
const selection_sort = require("../src/selection-sort").selection_sort;

describe("Testing Selection Sort", function () {
  it("Sort normal array", function (done) {
    const out = selection_sort([5, 3, 10, 12, 17]);
    //https://www.chaijs.com/api/bdd/
    // Google
    expect(out).to.eql([3, 5, 10, 12, 17]);
    done();
  });
  it("Sort base case", function (done) {
    const out = selection_sort([]);
    //https://www.chaijs.com/api/bdd/
    // Google
    expect(out).to.eql([]);
    done();
  });
});
