<template>
  <div class="child">
    
  </div>
</template>

<script>
export default {
  inject: [
    'grandpa'
  ],
  name: 'Child',
  mounted () {
    console.log(this.grandpa.name);
  }
}
</script>

<style>

</style>