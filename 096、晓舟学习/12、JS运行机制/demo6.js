async function fun1(){
  let data = await fun2();
  console.log(data);
}

async function fun2(){
  console.log(200);
  return 100;
}
fun1();

/**
 200
 100
 */