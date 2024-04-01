// const os = require('os')
// const user = os.userInfo().shell;
// console.log(user);
// console.log(os.uptime());
//  const path = require('path')
// // console.log(path.sep);
// const s = path.resolve('a','txt','fun.txt')
// console.log(`s is ${s}`);
// const filepath=path.join('a','txt','fun.txt')
// console.log(filepath);

const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end('welcome this is home')
    }
    else if(req.url==='/about'){
    res.end('hello this is about')
    }
    else{
res.end(` <h1> OOPS!!</h1>
     <p>You are lost!</p>
     <a href="/">back to home</a>
     `
)
    }
})
server.listen(3000);

const _ = require('lodash')
const items =[1,[2,[2],[4]]]
console.log(_.flattenDeep(items));
