<template>
  <div class="">
    <h2 ref="title"> {{info.name}}</h2>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
  name: '',
  setup() {
    const info = reactive({
      name: 'why',
      age: {
        foo: 'hello'
      }
    })

    watch(() => info, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    },{ deep: true})

    setTimeout(() => {
      info.age.foo = 'world'
    }, 1000);
    return {
      info
    }
  }
}
</script>

<style >
</style>
