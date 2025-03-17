function findIndex(str,target){
        console.log("origional String : ",str);
        console.log("index of target value :", str.indexOf(target))
}

// findIndex("Hello World","W")

function findLastIndex(str,target){
    console.log("origional String : ",str);
    console.log("index of target value :", str.lastIndexOf(target))
}

// findLastIndex("Hello World World World","o")

function getSlice(str, start,end){
    console.log("ORiginal string : ",str);
    console.log("After Slices of string : ",str.slice(start,end));
}

// getSlice("Hello World World World",0,4) // Exclude last or endth element

function getSubString(str,start,end){
    let newString = ""
    for(let i=0; i<str.length; i++){
        if(i>=start && i<end){
            newString = newString + str[i]
        }
    }
    console.log("newString : ",newString);
}

getSubString("Hello World World World",0,4) // Exclude last or endth element
