let val 
val =Math.PI
console.log(val)

val =Math.E
console.log(val)

val = Math.round(2.49999999)
console.log(val)

val = Math.round(2.50001)
console.log(val)

val =Math.ceil(2.49)
console.log(val)

val = Math.floor(2.50001)
console.log(val)

val =Math.sqrt(64)
console.log(val)

val = Math.abs(-45)
console.log(val)

val = Math.pow(8,2)
console.log(val)

max = Math.max(8,2,45,42,42,555)
min = Math.min(8,2,45,42,42,555)
console.log(max)
console.log(min)

val  = Math.random()*30 + 1 // Getting number between 1- 30 , make it 1 we add 1
console.log(val.toFixed(0))

// Generating the random integer
let mul =((Math.random()*10) < 5)?-1:1
val  = val * mul
console.log(val.toFixed(0))