const fs = require('fs')

// #region 1. Write stream
// 1-1. 텍스트 파일 스기
// const ws = fs.createWriteStream('./readme.txt')
// ws.write('스트립은 Node.js에서 \n')
// ws.write('스트리밍 데이터로 작업하기 위한\n')
// ws.write('추상 인트페이스입니다.\n')        //더 보낼게 있다
// //ws.end('마지막')        //이걸 마지막으로 보낸당.

ws.on('finish', ()=> console.log('finish 이벤트 발생'))

// 1-2. 터미널에서 입력받은 텍스트를 파일로 쓰기
// process.stdin,on('readable', ()=>{
//     console.log('읽을 데이터 있음.')
//     let.data


//     while(data=this.reaa() !== null){
        ws.write(data);

        // 'exit'가 입력되면 빠져나ㅏ기 
        if(data.toString() === 'exit\r\n'){
            console.log('입력 종')
            ws.end();
            break;
        }
    
//}})


//#region  2. read stream

 conf  rs = fs.createReadStream('./readme.txt', {highWaterMark:8})      // chunk 크기 byte
 const data []
 
 //chun (버퍼)가 들어올 때 ㅇㅁㅅㅁ 이벤트 발동
 rs.on('data', (chunk) => {

 })
//#region 

const rs = fs.createWriteStream('./readme.txt');
return.pipe(ws)

const z = require('zlib')