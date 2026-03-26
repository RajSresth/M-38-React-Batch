React

Counter Component

    Hooks = [
        {
            type: 'state',
            value: 0,
            queue: []
        },
        {
            type: 'effect',
            effectCallback : ()=>{

    const intervalId = setInterval(() => {
          console.log("Count:",count);
      }, 1000);


      return ()=>{
          clearInterval(intervalId)
      }

                                },
            cleanupCallback: null,
            deps: [count = 0],
            prevDeps: null
        }
    ]


    Effect Queue = [
        0: ()=>{

    const intervalId = setInterval(() => {
          console.log("Count:",count);
      }, 1000);


      return ()=>{
          clearInterval(intervalId)
      }

        },
    ]


    ---- state variable ----
      count = 0
