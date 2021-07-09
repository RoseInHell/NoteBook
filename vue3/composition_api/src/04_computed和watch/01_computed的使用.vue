<template>
  <div class="">
    {{fullName}}
    <button @click="changeName">change</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: '',
  setup() {
    const firstName = ref('kobe');
    const lastName = ref('Bryant');

    const fullName = computed({
      get: () => firstName.value + lastName.value,
      set(newValue) {
        const newName = newValue.split(' ');
        firstName.value = newName[0];
        lastName.value = newName[1];
      }
    })

    const changeName = () => {
      fullName.value = 'coder why'
    }
  
    return {
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
}
</script>

<style >
</style>
