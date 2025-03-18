const fs = require("fs");
function writefile(){
    let content = "Hi I am onkar, full stack developer in groots software technology"
    fs.writeFile("./index.txt",content, (err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("written successfully!!")
        }
    })
}
writefile();