<template>
  <div>
    <h1>孩子继承爸爸的资产：{{ money }}</h1>
    <Son :money="money" @notice="notice" />
  </div>
</template>

<script>
import Son from './Son';
export default {
  name: 'Child',
  components: {
    Son
  },
  props: {
    money: Number
  },
  methods: {
    notice () {
      console.log('孙子：我用钱了哟·~~~');
    }
  }
}
</script>

<style>

</style>