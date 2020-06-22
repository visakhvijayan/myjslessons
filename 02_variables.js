// variables
// var let const
var name ='visakh'
console.log(name)
name ='Visakh vijayan'
console.log(name)

//init var
var greetings
console.log(greetings) // undefined
greetings = 'hello'
console.log(greetings)

var firstName ='viv'// camel case * recommended
var FirstName = 'Viv' // Pascal case ,recommeded in OOP , constructor ,ES6 class
var first_name = 'viv_' // underscore usually used in php

let petName = 'test'
const pie = 3.14 // cannot re assign this , also must be assigned some value during declaration
const person ={
    name:'visakh',
    age:29
} 
person.name = 'viv' // we can change data inside the obj even if it is const

const number =[1,2,3,4]
number.push(6) // adding element is possible
// but number =[5,9,10] will give error, we can add new element but re assign not possible
console.log()