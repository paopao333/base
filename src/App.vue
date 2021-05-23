<template>
  <div id="app">
    <i class="iconfont icon-zhuye" />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "APP",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {}
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
