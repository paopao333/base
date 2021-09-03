<template>
  <div>
    <custom-time :start-date="startDate" :end-date="endDate" :offset="offset" :monthRange="monthRange" size="mini" />
  </div>
</template>

<script>
import CustomTime from '../components/common/customTime.vue'
export default {
  name: '',
  components: { CustomTime },
  props: {},
  data() {
    return {
      startDate: '',
      endDate: '',
      offset: '1',
      monthRange: '6'
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
