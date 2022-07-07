//  promise async
let p = new Promise((resolve)=>{
  console.log(1);
  resolve()
})
p.then(()=>{
  console.log(2);
})

// aysnc返回来的是promise对象
async function fun(){
  return 3;
}
let a = fun();
console.log(a);
fun().then((data)=>{
  console.log(data);
})

/**
  1
  Promise { 3 }
  2
  3
 */