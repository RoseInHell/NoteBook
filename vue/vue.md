### 关于在vue页面中修改不了body颜色的处理

```css
#app{
  background: #f4f4f4;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  position: absolute;
}
```

## v-once

- 该指令表示元素和组件只渲染一次，不会随着数据的改变而改变

```html
<h2 v-once> {{msg}} </h2>
```

## v-html

- 该指令后面往往会跟上一个`string`类型
- 会将`string`的`html`解析出来并渲染

```html
<h2 v-html='url'></h2>
url: '<a href="http://www.baidu.com">百度一下</a>'
```

## v-pre

- 用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法

```html
<p v-pre>
    {{msg}}
</p>
// 输出显示  {{msg}}
```

## v-clock

```html
<div v-clock>
    {{msg}}
</div>
```

- 浏览器可能会直接显示出未编译的Mustache标签，使用v-clock遮住
- 浏览器编译后会自动删除 `v-clock` 

## v-bind

- 动态绑定class 

```html
<style>
    .active{
        color:red;
}
</style>
<h2 v-bind:class="{active:isActive, line:isLine}">
    hello
</h2>
<script>
    const app = new Vue({
        el:'#app',
        data: {
            isActive: true,
            isLine: true,
        }
    })
</script>
```

## v-bind 数组语法

```html
<h2 :class="['active', 'line']">
    {{msg}}
</h2>
<script>
const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    }
})
</script>
```

## v-bind 绑定 style

- 对象语法

```html
<h2 :style="{fontSize: '50px'}">
    {{msg}}
</h2>
```

- 数组语法

```html
<h2 :style="[baseStyle, a]">
    {{msg}}
</h2>
<script>
	const app = new Vue({
        el: "#app",
        data: {
            msg: "hello",
            baseStyle: {backgroundColor: 'red'},
            a: {fonSize: '18px'},
        }
    })
</script>
```

## computed 计算属性

- 计算属性会进行缓存，如果多次使用，计算属性只会调用一次

```html
<h2>总价格：{{totalPrice}}</h2>
<script>
const app = new Vue({
    el: '#app',
    data: {
		books: [
            {id:100, name: '1', price: 119},
            {id:101, name: '2', price: 190},
            {id:102, name: '3', price: 219},
            {id:103, name: '4', price: 519},
        ]
    },
    computed: {
        totalPrice() {
            let result = 0;
            for (let i=0; i<this.books.length;i++) {
                result += this.books[i].price
            }
            return result
        }
    }
})
</script>
```

 ### computed 的 setter  和  getter

```javascript
computed: {  // 计算属性一般只要实现 get 方法就行,这样是作为只读属性
    fullName: {
        set: function(newValue) {
            console.log(newValue)
            const names = newValue.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        },
        get: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
}
```

## methods 和 computed 对比

- computed 会进行缓存，如多次使用，computed只会调用一次