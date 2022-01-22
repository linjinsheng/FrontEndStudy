<template>
  <div>
    <h1>姓名：{{ this.$attrs.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Child',
  mounted () {
    this.$listeners.notice();
  }
}
</script>

<style>

</style>