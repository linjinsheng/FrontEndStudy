//  可以证明js是单线程,一个任务完成之后才能执行另一个任务
for(let i= 0; i < 5; i++){
  console.log(i);
}
setTimeout(()=>{console.log(2)}, 0);
setTimeout(()=>{console.log(3)}, 0);
setTimeout(()=>{console.log(4)}, 0);
console.log(5)

/**
 0
 1
 2
 3
 4
 5
 2
 3
 4
 */