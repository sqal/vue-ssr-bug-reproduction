<template>
  <div id="app">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    message(vm) {
      // works:
      // return this.$store.state.message;
      // does not work:
      return vm.$store.state.message;
    },
  },
};
</script>

