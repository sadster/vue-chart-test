<template>
  <div id="app">
    <div class="wrapper">
      <BaseChart></BaseChart>
      <BaseTable></BaseTable>
    </div>
  </div>
</template>

<script>
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'

export default {
  name: 'App',
  components: {
    BaseChart,
    BaseTable,
  },
  mounted() {
    this.$store.dispatch('getData')
  },
}
</script>

<style lang="scss">
.wrapper {
  width: 100%;
}
</style>
