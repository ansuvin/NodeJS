//#region 5. 비구조화 할당
const obj = {
    status: {name: 'node', value: 'js'},
    objFunc: ()=>{console.log('node.js')}
}
// 예전 방식
const status = obj.status
const objFunc = obj.objFunc

// es6 방식
const {status, objFunc} = obj;

console.log(status)
objFunc()

// 리스트에서의 비구조와 할당
var list = ['nodejs', {}, 10, true]
// 예전 방식
var one = list[0]
var two = list[1]
var three = list[list.length -1]

// es6 방식
const [one, two, ,three] = list
console.log(one, two, three)

[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`a = ${a}, b = ${b}, rest = ${rest}`);
//#endregion