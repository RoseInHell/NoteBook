## 关于vue的页面跳转后，如何每次进入页面时都能获取后台数据

```javascript
watch:{ 
        // 如果路由有变化就会执行该方法
        "$route": {
            handler(route){
                console.log(1111)
                const that = this;
                console.log(route.name)
                if(route.name === 'Equity') {
                    that.apiMethods();
                    console.log('-----')
                }
            },
            deep: true
        }
    }
```

