<template>
  <div>
    <h1>家庭资产：{{ value }}</h1>
    <!-- <Father
      :fatherM="fatherM"
      @earnMoney="earnMoney"
      @invest="invest"
    /> -->
    <!-- <Father
      :fatherM="fatherM"
      @earnMoney="earnMoney"
      @update:value="value => this.fatherM = value"
    /> -->
    <!-- <Father
      :fatherM="fatherM"
      @earnMoney="earnMoney"
      :value.sync="fatherM"
    /> -->
    <!-- <Father
      :fatherM="fatherM"
      @earnMoney="earnMoney"
      @invest="fatherM => this.fatherM = fatherM"
    /> -->

    <!-- <Father
      :fatherM="fatherM"
      @earnMoney="earnMoney"
      @input="fatherM => this.fatherM = fatherM"
    /> -->
    <!-- <Father
      :value="value"
      @earnMoney="earnMoney"
      @input="fatherM => this.fatherM = fatherM"
    /> -->
    <Father
      @earnMoney="earnMoney"
      v-model="value"
    />
    <Child
      :childM="childM"
      @getMoney="getMoney"
    />
  </div>
</template>

<script>

import Father from './Father';
import Child from './Child';

export default {
  name: 'Mother',
  components: {
    Father,
    Child
  },
  data () {
    return {
      fatherM: 3000,
      childM: 0,
      value: 3000
    }
  },
  methods: {
    earnMoney (num) {
      this.fatherM += num;
    },
    // invest (num) {
    //   this.fatherM = num;
    // },
    getMoney (num) {
      this.fatherM -= num;
      this.childM += num;
    }
  }
}
</script>

<style>

</style>