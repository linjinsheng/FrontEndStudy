<template>
  <div class="father">
    <Child />
  </div>
</template>

<script>

import Child from './Child';

export default {
  name: 'Father',
  inject: ['grandpa'],
  components: {
    Child
  },
  data () {
    return {
      name: '大爷',
      age: 34,
      hobby: 'coding'
    }
  },
  methods: {
    call () {
      console.log('爸爸，我在');
    }
  },
  mounted () {
    console.log(this);
  }
}
</script>