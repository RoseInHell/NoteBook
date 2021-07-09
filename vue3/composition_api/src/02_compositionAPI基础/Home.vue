<template>
  <div class="">
    {{age}}
    <button @click="increment">++</button>
    <input v-model="message">
    {{message}}
  </div>
</template>

<script>
import { reactive, ref, toRefs, toRef } from 'vue';

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props, {attrs, slots, emit}) {
    const message = ref('hello world')
    // const state = reactive({
    //   counter: 100
    // })
    const info = reactive({
      name: 15,
      age: 19
    })

    const { name } = toRefs(info)
    let age = toRef(info, 'age')
    let counter = ref(100)
    const increment = () => {
      age.value++
    }

    return {
      title: 'hello title',
      increment,
      counter,
      name,
      age,
      message
    }
  },
  beforeCreate() {
    console.log('beforeCreated')
  },
  created() {
    console.log('created')
  }
}
</script>

<style >
</style>

