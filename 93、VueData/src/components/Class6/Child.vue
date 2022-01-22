<template>
  <div class="child">
    
  </div>
</template>

<script>
export default {
  name: 'Child',
  mounted () {
    this.$eventBus.$on('childTouch', (param) => {
      console.log(param);
    });
    this.$nextTick(() => {
      this.$eventBus.$emit('fatherTouch', '儿子来找你了');
    });
  } 
}
</script>

<style>

</style>