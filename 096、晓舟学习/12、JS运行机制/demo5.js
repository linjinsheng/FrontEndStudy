let p1 = new Promise((resolve) => {
  resolve(1);
})
let p2 = new Promise((resolve) => {
  resolve(2);
})

async function fun(){
  let a = await p1;
  let b = await p2;
  console.log(a);
  console.log(b);
}
fun();

/**
 1
 2
 */