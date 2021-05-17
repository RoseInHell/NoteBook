<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    };
  },
  components: {
  },
  created() {},
};
</script>

<style>
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
