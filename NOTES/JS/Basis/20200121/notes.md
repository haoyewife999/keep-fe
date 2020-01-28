## 数组
* 创建的方法
```js
        var arr=new Array(10);//长度为10
```
```js
        var arr=new Array(1,2,3);//元素1，2，3
```
```js
        var arr=[];
 ```
* 数组的方法
    * push
    ```js
        console.log(arr.push('last'));//返回在末尾添加新元素后数组的长度
    ```
    * pop
    ```js
        console.log(arr.pop());//返回数组末尾即被删除的元素
    ```
    * unshift
    ```js
        console.log(arr.unshift('first'));//返回开头添加新元素后数组的长度
    ```
    * shift
    ```js
        console.log(arr.shift());//删除并返回开头元素
    ```
    * slice
    截取一段元素，不改变原数组
    ```js
        console.log(arr.slice(0,-1));
    ```
    * splice
    改变原数组，删除从指定位置开始的指定数量的元素，并将被删除的元素返回，第三个参数可以在指定索引插入新元素
    ```js
        var arr=[1,2,3,4];
        console.log(arr.splice(1,1,'abs'));//[2]
        console.log(arr);//[1, "abs", 3, 4]
    ```
    * concat
    连接并返回新数组，不会改变原数组

    * join
    将数组转换为字符串返回，可指定连接符，不会改变原数组
    ```js
        var arr=[1,2,3,4];
        console.log(arr.join('-'));//1-2-3-4
    ```
    * reverse
    反转数组，改变原数组

    * sort
        * 按照Unicode编码排序，改变数组-->**错误结果**
        ```js
            var arr=[5,2,13,4];
            console.log(arr.sort());//[13, 2, 4, 5]        
        ```
        * 自己指定排序规则
        ```js
        arr.sort(function(a,b){
            if(a>b){
                return 1;//交换位置
            }
            else if(a<b){
                return -1;//不变
            }
            else{
                return 0;//不变
            }
        });
        ```
* 数组的遍历
```js
for(i=0;i<arr.length;i++){
            console.log(arr[i]);
        }
```
* foreach
```js
arr.forEach(element => {
            console.log(element);
        });
```
* 第一个参数：当前正在遍历的元素
* 第二个参数：当前正在遍历的元素的索引
* 第三个参数：正在遍历的数组
```js
arr.forEach(function(element,index,arry){
            console.log(element);
            console.log(index);
            console.log(arry);
        });
```
## call和apply
第一个参数制定一个对象为函数执行时的this
* call
```js
  fun.call(obj,2,3);
  ```
* apply
```js
  fun.apply(obj,[2,3]);   
```
## argument
