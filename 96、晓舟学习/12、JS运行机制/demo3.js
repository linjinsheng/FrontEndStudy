/**
  1、同步程序
  2、process.nextTick
  3、微任务
  4、宏任务
  5、setImmediate
 */
setImmediate(()=>{
  console.log(1);
})
console.log(2);
setTimeout(()=>{console.log(3)}, 0);
setTimeout(()=>{console.log(4)}, 10);
console.log(5);
new Promise((resolve)=>{
  console.log(6);
  resolve()
}).then(()=>{
  console.log(7);
})
process.nextTick(()=>{
  console.log(8);
});


/**
 2
 5
 6
 8
 7
 3
 1
 4
 */

