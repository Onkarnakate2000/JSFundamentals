function counter(){
    let count=0;
    setInterval(()=>{
        console.log(count++);
    },1000)
}

counter();