<template>
  <div>hello {{ title }}</div>
</template>

<script>
export default {
  name: 'test',
  components: {},
  props: {
    title: { default: 'aa' }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    this.queryUserInfo()
  },
  watch: {},
  methods: {
    queryUserInfo() {
      this.$api.user
        .queryUserInfo()
        .then((res) => {})
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less"></style>
