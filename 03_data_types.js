/* 
JS is dynamically typed language 
--------------------------------

# Types are associated with values not variables
# The same variable cam hold multiple types
# we do not need to specify types
# Statically typed lang : Java , C# , C++
# Supersets of JS and addons to allow static typing (TypeScript, Flow)

Primitive DT & Reference DT
----------------------------

@Primitive Data Type
# Stored directly in the location the variable accesses
# Stored on the stack
ex : String , Number, Boolean , Null , Undefined , Symbols (ES6)

@Reference Data Type
# Accessed by reference
# Object that are stored on the heap
# A pointer to location in the memory
ex : Arrays , Object literals, Functions , Dates etc..
*/
// @Primitive

//String
const name = 'Visakh'
console.log(typeof(name))

//number
const age = 43
console.log(typeof(age))

//Boolean
const hasKids = true
console.log(typeof(hasKids))

//Null
const nullValue = null
console.log(typeof(nullValue)) // eventhoug it give as obj it is considered as one of the bug
// In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. (reference)


// undefined
let testing;
console.log(typeof(testing))

//Symbol
const sym = Symbol();
console.log(sym)
console.log(typeof(sym))

//@ Reference
const hobbies =['chess','gaming'] 
const address ={
    houseNo:20,
    state :'NA',
    village :'N/A'
}
const today = Date()
const today2 = new Date()
console.log(typeof(hobbies))
console.log(typeof(address))
console.log(today)
console.log(typeof(today))
console.log(today2)
console.log(typeof(today2))