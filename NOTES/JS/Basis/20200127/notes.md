## DOM查询
```js
var body=document.body;//body
var html=document.documentElement;//html
var all=document.all;//页面所有元素
var child=document.getElementsByClassName('child');//类名
var child=document.querySelector('box1 div');//返回第一个
var child=document.querySelectorAll('box1');//返回数组
```
## DOM增删改
名称|功能
---|---
creatElement('li')|创建元素节点
creatTextNode('北京')|创建文本节点
li.appendChild(bj)|向父节点中添加字节点
父节点.insertBefore(新节点,旧节点)|在指定子节点前插入新节点


## 其他
* ```js
  console.log('第'+index+1+'张');//00,01,02
  console.log('第'+(index+1)+'张');//1,2,3
  ```