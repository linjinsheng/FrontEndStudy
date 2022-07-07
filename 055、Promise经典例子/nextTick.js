setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function() {
      console.log('promise1')
    })
   }, 0)
   process.nextTick(() => {
    console.log('nextTick1')
    process.nextTick(() => {
      console.log('nextTick2')
      process.nextTick(() => {
        console.log('nextTick3')
        process.nextTick(() => {
          console.log('nextTick4')
        })
      })
    })
   })
   
   /**
    nextTick1
    nextTick2
    nextTick3
    nextTick4
    timer1
    promise1
    */