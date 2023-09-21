function score(number1, number2) {
    let x = number1 + number2;
    console.log(x)
}
score(23, 54)


// check data type 
let StringValue = "hello world"
let NumberValue = 213
let BooleanValue = true
let BigIntValue = 123235435353n
let NullValue = null
let objectValue = { name: 'uday', age: 20 }
let SymolValue = Symbol("value")
let undefindeValue =
console.log("String :" + typeof StringValue)
console.log("Number :" + typeof NumberValue)
console.log("Boolean :" + typeof BooleanValue)
console.log("Bigint :" + typeof BigIntValue)
console.log("Null :" + typeof NullValue)
console.log("object :" + typeof objectValue)
console.log("Symbol :" + typeof SymolValue)
console.log("undefinde :" + typeof undefindeValue)


//stack and heap
// stack (primitive) value
// heap (non - primitive ) value

//stack ..return copy value not return original reference 
let YoutubeName = "codertube"
let FetchName = YoutubeName
// //change value
FetchName = "changename"

console.log(YoutubeName)
console.log(FetchName)

// //heap ... return original reference not return copy value 
let OneUser = {
    email: "xyz@gmail.com",
    age: 23
}
let TwoUser = OneUser
// //change value
OneUser.age = 54

console.log(OneUser)
console.log(TwoUser)


//.............string ...............

let name = "john"
let age = 54
// //short for of concatenate ..use backtisk(``)for beter programing parformance 
console.log(`hello guys my name is ${name} and my age is ${age}`)

const gameName = new String('computer') 
//check charecter langth
console.log(gameName.length)
// //check position charecter 
console.log(gameName.charAt(2))
//chack charecter position(key)
console.log(gameName.indexOf('r'))


//url replace 
let url = "https://www.google.com/search?q=js&oq=&aqs=chrome.2.69i59i450l8.473507j0j7&sourceid=chrome&ie=UTF-8"
console.log(url.replace('&', '20'))

//check url charecters 
let Vurl = "https://www.google.com/search?q=js&oq=&aqs=chrome.2.69i59i450l8.473507j0j7&sourceid=chrome&ie=UTF-8"
console.log(Vurl.includes('onion'))


//...............maths.................



//to fixed a value of number ex. 1000.0
let price = 1000
console.log(price.toFixed(1))


let price = 10000
console.log(price.toLocaleString('en-IN'))

//check max value and min value
let value = [12, 23, 4, 53, 34, 34, 3545, 665, 12, 43656, 865, 534]
console.log(Math.min(...value))
console.log(Math.max(...value))


//random number 
console.log(Math.random())
console.log(Math.floor(Math.random() * 10))
let min = 100
let max = 1000
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//join mathods
let myarr = ['nasme', 'erdf', 'edrfd', 'dfd']
console.log(myarr.join())
console.log(myarr.join(''))
console.log(myarr.join('-'))
console.log(myarr.join('='))
console.log(myarr.join('!'))

//object 
const MyObj = { 1: "hello", 2: "world" }
const MyObj2 = { 3: "hello", 4: "world" }

const MyObj3 = object.assign({}, MyObj, MyObj2)

console.log(MyObj3)
