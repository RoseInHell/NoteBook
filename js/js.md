## 字面量和变量

- **字面量**：都是一些不可改变的值 例如 1，2
  - 可直接使用

- **变量**：变量可以用来保存字面量，变量的值可以任意改变的

##  其他的数据类型转换为String

- 调用被转换数据类型的 **`toString()` ** 方法

  - 例如 `a.toString()`	
    - **该方法不会影响原变量，它会将转换的结果返回**


## for循环

```javascript
for (let i in this.books) {
    const book = this.books[i];
    totalPrice += this.boooks[i];
}
```

```javascript
for (let item of this.books) {
    totalPrice += item.price * item.count
}
```

