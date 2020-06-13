###  文字水平居中

```css
 <div class='box' style="text-align: center;">hello world</div>
```

### 文本垂直水平居中

```css
 <div class="box2" style="width:150px;height:100px;line-height: 100px;">文本垂直水平居中</div>
```

### 分割线 

 	横线 

```css
<div class="aLine"></div>
.aline {
    background-color:#E6E3E3;
    height:1px;
}
```

竖线

```css
<div class="vLine">
.vLine {
    border-left: solid 2px #ccc;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
    margin-top: 15px;
}
```
### 宽高不定实现盒子水平垂直居中
```css
.box {
        border: 1px solid #00ee00;
        height: 300px;
        position: relative;
    }

    .box1 {
        border: 1px solid red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
```

### margin 左右不会传递 上下会传递   ( 子元素传给父元素 )

1. margin-top 传递
   - 如果 块级 元素的 顶部线 和父元素的 顶部线 重叠，那么这个 块级 元素的 margin-top 值会传递给父元素
2. margin-bottom 传递
   - 如果 块级 元素的 底部线 和父元素的 底部线 重叠，并且父元素的高度是 auto，那么这个 块级 元素的 margin-bottom 值会传递给父元素

- 解决方法
  1. 加 padding-top padding-bottom
  2. 设置 border-top border-bottom
  3. 最佳方法: 触发BFC 让其有结界
     - BFC : block format context 
     - 如何触发BFC
       - 浮动可以触发
       - 设置一个元素的overflow为非visible
       - overflow： hidden