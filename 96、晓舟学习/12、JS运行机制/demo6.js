async function fun1(){
  let data = await fun2();
  console.log(data);      //  then中执行的代码
}
async function fun2(){
  console.log(200);       //  同步
  return 100;
}
fun1();