let fs = require("fs");
function readFile(){
    fs.readFile("./final.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
    })
}

readFile();