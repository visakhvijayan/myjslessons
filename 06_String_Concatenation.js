const firstName = 'Visakh'
const lastName = 'Vijayan'
const str = 'My name is visakh'

//Concatenation
const fullName = firstName + ' '+lastName
console.log(fullName)

//Append
let name = 'visakh'
name+=' '
name+='vijayan'
console.log(name)


//val = 'That's awsome, Ican't wait' : IIt will throw error
console.log(name)

val = "That's awsome, Ican't wait" // With double quotes we can easily include single quotes
console.log(val)


//escaping
val = 'That\'s awsome, Ican\'t wait' // Adding '\' escape character before the single quote will help us to include it in a sentence 
console.log(val)

val =name.length; // since it is a property not a method it don' need parenthesis

// to upper and lower
val = name.toUpperCase()
console.log(val)
val = name.toLowerCase()
console.log(val)

val = name[0] //getting the first characte
console.log(val)

index = name.indexOf('i')
console.log(index)
lastIndex = name.lastIndexOf('v')
console.log(lastIndex)

val = name.charAt(2)
console.log(val)

//get last char
console.log(name)
console.log(name.length)
console.log(name.length -1)
lastChar = name.charAt(name.length -1 )
console.log(lastChar)

//substring
var myname = 'Visakh Vijayakumar'
val = myname.substring(0,5) // get char from 0 to 4 and only can use postive numbers
console.log(val)

val = myname.slice(0,-1) // cam include negative numbers to include from last
console.log(val)

//Split

val = str.split(' ')
console.log(val)

const test= 'abc-cde,fgh-lmn,opq-rst'
val = test.split(',')
console.log(val)
val = test.split('-')
console.log(val)


// replace
val = test.replace(',','+')
console.log(val)

//include : check string contain it

const houseName = 'Trivandrun Home'
val = houseName.includes('Home');
console.log(val)
val = houseName.includes('Homie');
console.log(val)
