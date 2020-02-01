* let var const /window
  let,const声明的变量不会绑定给window
  this绑定给调用setTimeout的window
  **？？？为什么不报错**
  ```js
  let id = 2;
    let json = {
        id: 1,
        show:function(){
            setTimeout(function(){
            console.log(this.id);
            },2000)
        }
    }
    json.show();//undefined
   ```
* 暂时性死区TDZ
* for(let i;;) **特殊**
  >在循环内let：每一次循环的i其实都是创建一个新的变量，JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算
  >每次迭代循环时都创建一个新变量，并以之前迭代中同名变量的值将其初始化
* 解构赋值、剩余参数
  ... 类数组转数组、数组互相赋值
* 函数默认参数
  ```js
  function fun({a=1,b=2} = {}) {
    console.log(a,b);
  }
  fun();
  ```
* 箭头函数 
  * this
  箭头函数中的this绑定定义时所在的作用域，箭头函数不能通过 call() 或 apply() 方法绑定this,箭头函数中所使用的this都是来自函数作用域链,箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的
    ```js
    let id = 2;
    let json = {
        id: 1,
        show:function(){
             setTimeout(() => {
                console.log(this.id);
             },2000)
        }
    }
    json.show();//1
    ```
  * 没有arguments，用...
  * 不能当构造函数
* 字符串新方法 (incude/padStart...)