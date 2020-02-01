let id = 2;
let json = {
     id: 1,
     show:function(){
         setTimeout(() => {
           console.log(this.id);
        },2000)
    }
}
json.show();


