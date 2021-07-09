<template>
  <div class="main">
    <div>{{counter}}</div>
    <div>{{doubleCounter}}</div>
    <button @click="increment">++</button>
    <button @click="decrement">--</button>

    <div>
      <span>{{scrollX}}</span>
      <span>{{scrollY}}</span>
    </div>
  </div>
</template>

<script>
import { useCounter, useTitle, useScrollPosition, useLocalStorage } from './hooks/index.js'
export default {
  name: '',
  setup() {
    const {counter, doubleCounter, increment, decrement} = useCounter();
    
    const titleRef = useTitle('coderwhy');

    const { scrollX, scrollY } = useScrollPosition();

    setTimeout(() => {
      titleRef.value = 'kobe';
    }, 3000);

    const data = useLocalStorage('info',0);

    return {
      counter,
      doubleCounter,
      increment,
      decrement,

      scrollX,
      scrollY
    }
  }
}
</script>

<style >
.main {
  width: 2000px;
  height: 1000px;
}
</style>
