## 垃圾回收（GC）
JS有自动的垃圾回收机制
我们需要做的是将不再使用的对象设置为null即可
```js
        var obj=new Object();
        obj=null;
```
## 数组
* 获取数组长度(修改)
  ```js
        console.log(Array.length);
    ```
* 向最后添加元素
  ```js
        arr[arr.length]=1;
    ```
  
