var math = {
  add: function (a, b) {
    return a + b;
  },

  substract: function (a, b) {
    return a - b;
  },
};

// 함수가 1급 객체다. 즉 변수에 함수를 넣어 사용할 수 있다.
var a = math.add;
var b = math.substract;

module.exports = math;
console.log(module.exports);

console.log(a(5, 6));
console.log(math.add(3, 4));
console.log(b(8, 5));
