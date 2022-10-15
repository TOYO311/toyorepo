/* const {readFileSync , writeFileSync, read, write} = require('fs');

const reading = readFileSync('./file/insideFile/subFold/File.txt','utf8');
const readingTwo = readFileSync('./file/insideFile/subFold/Filetwo.txt','utf8');// the second peram is for reading the file 
console.log(reading,readingTwo);
const randomText="we gotta orgnaze our life from now on!";
const writing = writeFileSync('./file/insideFile/subFold/fileThree.js','console.log("Hello world");');//the second peram is the text we wanna put
 */
const {readFile , writeFile}=require('fs');
console.log("starting the task now ");
readFile('./file/insideFile/subFold/File.txt','utf8',(eror,rslt)=>{
    if(eror){
        console.log(eror)
        return;
    }
    const readingAsyncOne = rslt;
    readFile('./file/insideFile/subFold/FileTwo.txt','utf8',(eror,rslt)=>{
        if(eror){
            console.log(eror);
            return;
        }
        const readingAsyncTwo =  rslt;
        writeFile('./file/insideFile/subFold/AysncFile.txt','this is a Aysnc',(eror, rslt)=>{
            if (eror){
                console.log(eror)
                return 
            }
            console.log('done with the task');
        })
    })
})
console.log("starting another task right away");
console.log("finished");

