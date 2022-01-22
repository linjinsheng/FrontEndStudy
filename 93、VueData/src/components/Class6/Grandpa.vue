<template>
  <div class="grandpa">
    <!-- ref dom节点 dom对象
         ref 组件 组件实例
     -->
    <Father ref="father" />
  </div>
</template>

<script>

import Father from './Father';

export default {
  name: 'Grandpa',
  components: {
    Father
  },
  data () {
    return {
      name: '小野',
      age: 18,
      hobby: 'Travel',
      homeTown: '北京'
    }
  },
  mounted () {
    
  }
}
</script>

<style>

</style>