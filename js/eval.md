###  eval 解析json

```javascript
var dataObj=eval("("+data+")");//转换为json对象
```

- 原因在于：eval本身的问题。 由于json是以 ”{}” 的方式来开始以及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。

- 加上圆括号的目的是迫使eval函数在处理JavaScript代码的时候强制将括号内的表达式（expression）转化为对象，而不是作为语 句（statement）来执行。举一个例子，例如对象字面量{}，如若不加外层的括号，那么eval会将大括号识别为JavaScript代码块的开始 和结束标记，那么{}将会被认为是执行了一句空语句。所以下面两个执行结果是不同的：

  ```javascript
  alert(eval("{}"); // return undefined
  alert(eval("({})");// return object[Object]
  ```

  