* 使用工厂方法创建对象
  **用的不多，使用的构造函数都是object，创建的对象都是object类型，无法区分多种不同类型的对象**
  ```js
        function creatPerson(name,age,gender){
            var obj=new Object;
            obj.name=name;
            obj.age=age;
            obj.gender=gender;
            obj.sayname=function(){
                console.log(this.name);
            };
            return obj;
        }

        var tom=creatPerson('tom',12,'male');
        var mary=creatPerson('mary',8,'female');
    ```
* 构造函数（类）
  * **使用new关键字调用**
  ```js
        var per=new person();
    ```
  * 执行流程
    1、立即创建一个对象
    2、将新建的对象设为函数中的this
    3、逐行执行函数中的代码
    4、将新建的对象作为返回值返回

  * 检查一个对象是否是一个类（构造函数）的实例
    ```js
        console.log(per instanceof person);
    ```
  * 使构造函数中创建的方法，在全局作用域中定义
    便可使所有创建的对象共用，节省空间
    ```js
        function person(name){
            this.name=name;
            this.sayname=fun;
        }
        function fun(){
            console.log(this.name);
        }
    ```
* this
  * 以函数的形式调用-->window
  
  * 以方法的形式调用-->谁调用就是谁 
  * 以构造函数的形式调用-->新建的对象