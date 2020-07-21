/* Type conversion */
// Number to string
let val;
val = 5
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)// it will be undefined , since it is not a string

 val = String(5) // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = String(5+5) // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = String(true) // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = String(new Date) // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = Date // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = new Date // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = String([1,2,3,4])// convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = [1,2,3,4] // convert number to string
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 console.clear()
 val = (5).toString()
 console.log('val :' + val)
 console.log('val type:' + typeof val)
 console.log('val length:' +  val.length)

 val = 5
 console.log(val.toFixed(2)) // for two decimal places, only work for nubers

 val = '5'
 console.log(Number(val).toFixed(2))
 
 val = true
 console.log(Number(val))
 
 val = false
 console.log(Number(val))
 
 val = null
 console.log(Number(val))
 
 val = undefined // same for array, string etc.. 
 console.log(Number(val))// NaN : Not a Number

val = parseInt('100.12')
console.log( val)
console.log(typeof val)

val = parseFloat('100.45586')
console.log( val)
console.log(typeof val)
console.log(typeof val.toFixed(2))
console.log( parseFloat(val.toFixed(2)) )


 
val = 1 + '1'+ 1
console.log( val)
console.log(typeof val)

const val1 = 1
const val2 = 2
const sum = val1+val2
console.log(sum)
console.log(typeof sum)

const val3 = 1
const val4 = '2'
const sum1 = val3+val4
console.log(sum1)
console.log(typeof sum1)


