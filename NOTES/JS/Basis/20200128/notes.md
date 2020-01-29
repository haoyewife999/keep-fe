## 事件
* 事件冒泡Bubble  
  取消冒泡
  ```js
    e.stopPropagation();
  ```
* 事件捕获

* 事件委派

* 事件绑定 addEventListener( , , )，可以同时绑多个，
  --> removeEventListener( )
## forEach（function(Value, index, arr){})
* 功能：调用数组的每个元素，并传给回调函数
* map
  ```js
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
  ```
* reduce
```js
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    //从第二个参数2开始回调
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    //从第一个参数1开始回调
    // expected output: 15
```
* filter
  ```js
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]
  ```

## 通过js修改style样式
* 合法JS标识符中没有  **-**，用驼峰命名法解决
* 通过style设置和读取都是内联样式，无法读取样式表
* 获取元素样式getComputedStyle()

## API
名称|功能
---|---
clientHeight|可见高度，包括内容区和内边距
clientWidth|可见宽度，包括内容区和内边距
offsetHeight|包括边框
offsetWidth|包括边框
offsetParent|定位祖先元素
offsetTop|相对定位父元素的
offLeft|。。。
scrollHeight|滚动区域高度
scrollWidth|滚动区域宽度
scrollTop|垂直滚动条滚动距离
scrollLeft|水平滚动条滚动距离

**滚到底了：scrollTop + clientHeight = scrollHeight**

## 变量提升，函数提升
> 函数及变量的声明都将被提升到函数的最顶部

## let,const,var
* let,const:作用域块级，let声明变量，const声明常量
* var:全局作用域，会变量提升
## 函数声明与函数表达式
>函数声明后可以在任意位置访问，函数赋值表达式定义的函数则必须在下方才访问得到，若是作为其他函数的参数的函数表达式，则只能在那个函数内访问