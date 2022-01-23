/**
 1、同步
 2、nextTick
 3、异步
 4、setImmdediate(当前事件循环结束执行);
 */
setImmediate(()=>{
  console.log(0);
})
process.nextTick(()=>{
  console.log(6)
});
console.log(1)
setTimeout(()=>{console.log(2)}, 0);
setTimeout(()=>{console.log(3)}, 0);
setTimeout(()=>{console.log(4)}, 10);
console.log(5);