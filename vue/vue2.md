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

p20