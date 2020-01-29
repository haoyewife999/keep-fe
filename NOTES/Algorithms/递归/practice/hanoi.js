function hanoi(n,src,mid,des){
    if(n==1){
        console.log(`${src}->${des}`);
        return;
    }

    hanoi(n-1,src,des,mid);
    console.log(`${src}->${des}`);
    hanoi(n-1,mid,des,src);
    return;
}

hanoi(5,'A','B','C');