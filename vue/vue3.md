## v-on

- 在事件定义时，写方法省略了小括号，但是方法本身需要一个参数，这时候Vue会默认将浏览器产生的event事件对象作为参数传入到方法

- 方法定义时，我们需要event对象，同时又需要其他参数
  - 手动获取到浏览器参数的event对象：$event

```html
<button @click="btn(123, $event)">按钮</button>
```

## v-on 修饰符

```vue
1.停止冒泡
<div @click='divClick'>
    <button @click.stop='doThis'></button>
</div>


2.阻止默认行为
<form action='baidu'>
	<input type='submit' value='提交' @click.prevent='submitClick'>
</form>


3.阻止默认行为，没有表达式
<form @submit.prevent></form>

4.串联修饰符
<button @click.stop.prevent='dothis'></button>

5.键修饰符，键别名 监听 某个键盘的键帽
<input @keyup.enter='onEnter'>

6.键修饰符,键代码
<input @keyup.13='onEnter'>

7.点击回调只会触发一次
<button @click.once='dothis'></button>

```



## vue 中 input 复用问题

- Vue 在进行DOM渲染时，出于性能考虑，会尽可能的复用已经存在的元素，而不是重新创建新的元素

```html
<div id="app">
        <span v-if="type === 'username'">
            <label>用户账号：</label>
            <input type="text" placeholder="用户账号">
        </span>
        <span v-else>
            <label>邮箱地址</label>
            <input type="text" placeholder="邮箱地址">
        </span>
        <button @click='changetype'>切换类型</button>
    </div>
```

- 上面会导致原来的input元素不再使用时，直接用在else中的input使用，所以切换时，用户如果输入了文字，切换后不会清零
-  **解决方案**
  - 给input添加key，并且保证key的不同

```html
<input key='11'>
```

## v-show 和 v-if 对比

- `v-if` 当条件为 `false`时，压根不会有对应的元素在DOM中
- `v-show`当条件为 `false`时，仅仅是将元素的display属性设为 `none`而已
- 当需要在显示与隐藏之间切换很频繁，使用 `v-show`
- 只有一次切换时，用 `v-if`

## v-for 

```html
<ul>
    <li v-for="(item, index) in names">
        {{index}}.{{item}}
    </li>
</ul>
```

```html
1. 在遍历对象的过程中，如果只是获取一个值，那么获取到的是value
<ul>
    <li v-for="item in info">{{item}}</li>
</ul>
<script>
data: {
    info: {
        name: 'why',
        age: 18,
        height: 1.88,
    }
}
</script>
```

```html
2.获取key和value
<ul>
    <li v-for="(value, key) in info">{{value}}-{{key}}</li>
</ul>
```

## v-for添加key

- key 的作用主要是为了高效的更新虚拟 DOM

## Vue.set

- set(要修改的对象，索引值，修改后的值)
- Vue.set(this.letters, 0 , 'bbbbb')