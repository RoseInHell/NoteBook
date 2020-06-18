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

