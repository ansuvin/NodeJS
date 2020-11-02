// url은 두 가지 형태로 제공함

const urlString = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'

const { parse } = require('path')
//#region 1. WHATWG 방식(full url만 가능)
// url 파싱
// var myURL = new URL(urlString)
// console.log(myURL)

// // searchParams 추출 가능
// console.log(myURL.searchParams)
// console.log(myURL.searchParams.get('query'))
// console.log(myURL.searchParams.has('query'))
// console.log(myURL.searchParams.getAll('query'))
// console.log(myURL.searchParams.keys())
// console.log(myURL.searchParams.values())

//#endregion

//#region 2. Node.js 레거시 API(부분 url로 가능)
var url = require('url')

// url 파싱
var myURL = url.parse(urlString)
console.log(myURL)
//#endregion

// qeurystring 모듈 사용
// const qeurystring = require('querystring')
// const query = qeurystring.parse(myURL.query)
// console.log(query)
// console.log(qeurystring.stringify(query))

// 단축 URL 처리(레거시 방식만 가능)
var parseUrl = new parse('/?num1=100&num2=200')
//var parseUrl = new URL('/?num1=100&num2=200')
console.log(parseUrl)