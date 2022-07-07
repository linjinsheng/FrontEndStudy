<template>
  <div class="father">
    <Child />
    <Child2 />
  </div>
</template>

<script>

import Child from './Child';
import Child2 from './Child2';

export default {
  name: 'Father',
  components: {
    Child,
    Child2
  },
  data () {
    return {
      name: '大爷',
      age: 34,
      hobby: 'coding'
    }
  },
  mounted () {
    this.$eventBus.$on('fatherTouch', (param) => {
      console.log(param);
    })
  }
}
</script>