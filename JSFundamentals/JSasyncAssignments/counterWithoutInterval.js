function counter(n){
    console.log(n);
    setTimeout(()=>{
        return counter(n+1);
    },1000)
}

function main(){
    counter(1);
}

main();