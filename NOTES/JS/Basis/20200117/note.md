## 对象分类
* 内建对象
    ES中可直接使用，Math、Number等

* 宿主对象
  浏览器提供，BOM（组）、DOM（组）
* 自定义对象

## 对象操作
* 创建

* 添加
* 读取
* 修改
* 删除
* 检查
  ```js
        console.log('test' in obj);
    ```
## 基本数据类型和引用数据类型
```js
        var a=10;
        var b=a;
        a++;
        console.log(a); s//11
        console.log(b); //10
```