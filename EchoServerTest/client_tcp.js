var net = require('net')
const readline = require('readline')    //console 입력을 받기 위해

const rl = readline.createInterface({
    input: process.stdin,       //표준 입력 ->콘솔
    output: process.stdout      //포준 출력 ->콘솔
  });

// client socket 생성 
var clientSocket = new net.Socket()

clientSocket.connect({host: '127.0.0.1', port: 3000}, function(){
    console.log('connected to server')

    //clientSocket.write('hello world')     //이걸루 하면 매번 hello world밖에 안됨
    rl.on('line', (input)=>clientSocket.write(input))
})

// read reply form clientSocket
clientSocket.on('data', (chunk)=>{
    console.log(`receive data: ${chunk.toString()}`)
    //clientSocket.emit('end', (err)=>console.log(err.toString()))
})

clientSocket.on('error', (err)=>console.log(err.toString()))
clientSocket.on('end', ()=>console.log('disconnected from server'))