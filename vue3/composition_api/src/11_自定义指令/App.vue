<template>
  <div class="">
    <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue';
export default {
  name: '',
  setup() {
    const timestamp = 1624452193;
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name)

    return {
      timestamp
    }
  },
  mounted() {
  }
}
</script>

<style>
</style>
