/* //Os module
const Os=require('os'); //built-in module
const user=Os.userInfo();
console.log(user)
const time =Os.uptime();
console.log(time);
console.log(`random ${Os.hostname}`); */

/* //Path module
const path=require('path');
console.log(path.sep);
const filePath=path.join('file','insideFile','file.js'); //link and give u a file path 
console.log(filePath);
console.log(path.basename(filePath)); //gives you the last file name
const absolute =path.resolve(__dirname,filePath);
console.log(absolute); */


//fs module  (SYNC)
/* const {readFileSync,writeFileSync}=require('fs');
const fist = readFileSync('./file/insideFile/test1.txt','utf-8');
const second = readFileSync('./file/insideFile/test2.txt','utf-8');
console.log(fist,second);
const rd3 =writeFileSync('./file/insideFile/test3.txt',`hello world this is ${fist}`);
 */

//fs module (ASYNC)
/* console.log("starting")
const {readFile,writeFile}=require('fs'); //insted of  readsyncfile and writesyncfile
readFile('./file/insideFile/test1.txt','utf-8',(eree,result)=>{
    if(eree){
        console.log("error")
        return ;
    }
    const first = result;
    readFile('./file/insideFile/test2.txt','utf-8',(eree,result)=>{
        if(eree){
            console.log("error!")
            return;
        }
        const second = result;
        writeFile('./file/insideFile/text4.txt',"hello world this is the forth text file~~",
        (eree,result)=>{
            if(eree){
                console.log("error!!")
                return;
            }
            console.log(result);
            console.log("done");
            
        });
    })
})
console.log("starting the next task"); */

//HTTP module (intro)
const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.write('this is my server YAHOOOOO!')
    res.end()
})
server.listen(5000)