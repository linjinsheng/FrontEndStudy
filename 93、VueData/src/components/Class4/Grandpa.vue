<template>
  <div>
    <Father
      :name="name"
      :age="age"
      :hobby="hobby"
      :homeTown="homeTown"
      @notice="notice"
    />
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
  methods: {
    notice () {
      console.log('回家吃饭了');
    }
  }
}
</script>

<style>

</style>