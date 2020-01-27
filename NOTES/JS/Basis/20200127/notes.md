## DOM查询
```js
var body=document.body;//body
var html=document.documentElement;//html
var all=document.all;//页面所有元素
var child=document.getElementsByClassName('child');//类名
var child=document.querySelector('box1 div');//返回第一个
var child=document.querySelectorAll('box1');//返回数组
```

## 其他
* ```js
  console.log('第'+index+1+'张');//00,01,02
  console.log('第'+(index+1)+'张');//1,2,3
  ```