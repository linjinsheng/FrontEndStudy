<template>
  <div id="app">
    <button @click='btn' ref='btns'>  {{msg}}  </button>
    <hr />
    <div ref="msgDiv">{{msg0}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <button @click="changeMsg">
      Change the Message
    </button>
  </div>
</template>

<script>

/**
 NextTick用于做什么?
 下次DOM更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM。

 注意点:
 1、Vue dom是异步更新
 2、主线程同步代码执行后依次清空队列;
 3、watcher依次清空;
 4、相当于setTimeout(fn, 0);
 */
export default {
  name: 'App',
  data () {
  	return {
      msg:"旧的数据",
      msg0: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
  	}
  },
  methods:{
    btn(){
  	 	this.msg = '111新的数据222';
  	 	this.$nextTick(()=>{
  	 		console.log(this.$refs.btns.innerHTML);
  	 	})
    },
    changeMsg() {
      this.msg0 = "Hello world."
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  }
}
</script>

<style>

</style>
