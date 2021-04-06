export default class Comparator {
  /* 
    @param {function(a:*, b:*)} [compareFunction] - It may be custom compare function that, let's
    say may compare custom objects together. 
  */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /* 
    Default comparsion function. It just assumes that "a" and "b" are strings or numbers.
    @param {(string|number)} a
    @param {(string|number)} b
    @returns {number}
  */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1
  }

  /* 
    Checks if two variables are equal.
    @params{*} a
    @params{*} b
    @return {boolean}
  */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

}