console.log(1);
async function async1(){
  await async2();
  console.log(2);
}
async function async2(){
  console.log(3);
}
async1();
setTimeout(function(){
  console.log(4);
}, 0);
new Promise(resolve => {
  console.log(5);
  resolve();
}).then(function(){
  console.log(6);
}).then(function(){
  console.log(7);
})
console.log(8);

/**
 1
 3
 5
 8
 2
 6
 7
 4
 */

 /**
  1、同步
  2、process.nextTick
  3、微任务(promise.then)
  4、宏任务(计时器、ajax、读取文件)
  5、setImmediate
  */