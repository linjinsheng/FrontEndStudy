<template>
  <div>
    <h1>爸爸继承爷爷的资产：{{ money }}</h1>
    <Child :money="money" @notice="notice" />
  </div>
</template>

<script>

import Child from './Child';

export default {
  name: 'Father',
  components: {
    Child
  },
  props: {
    money: Number
  },
  methods: {
    notice () {
      console.log('孩子：我也用钱了哟~~~');
    }
  }
}
</script>

<style>

</style>