let num = 1;
const timer = setInterval(function(){
    console.log(num++);
    if(num === 10){
        clearInterval(timer);
    }
},1000)