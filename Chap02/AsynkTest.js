//1.동기
// function add(a, b) {
//   return a + b;
// }
// console.log("befire");
// var result = add(3, 4);
// console.log("after");
// console.log(result);

//2.비동기
function addAsynk(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 2000);
}

console.log("before");
addAsynk(3, 4, function (result) {
  console.log(result);
});
console.log("after");
