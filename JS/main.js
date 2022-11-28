// Constructional function.
let countNum;
document.getElementById('count').innerHTML = 0;
/* Assigned value from html element to undefined variable, 
so function started with element's value. */
countNum = document.getElementById('count').innerHTML;

let tallyCountPage = {
  plusbtn: function (_countNum) {
    this._countNum = countNum;

    return (document.getElementById('count').innerHTML = ++countNum);
  },
  minusbtn: function (_countNum) {
    this._countNum = countNum;

    return (document.getElementById('count').innerHTML = --countNum);
  },
  resetbtn: function (_countNum) {
    this._countNum = countNum;

    return (document.getElementById('count').innerHTML = countNum = 0);
  },
};
