function toggler(argument) {
    let a = 0
    let arr = arguments
    return function(){
      if(a<arr.length){
          const val = arr[a++]
          console.log(val)
      }
    }
}

const toggle = toggler(1,2,3)
toggle()
toggle()
toggle()