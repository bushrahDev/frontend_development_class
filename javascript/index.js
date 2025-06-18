

console.log('hello world');

// there are three keywords to define a variable

/*
1: const 
2: let
3: var
*/


// string
const name = 'sulaiman';

// number
const level = 300;


// boolean
// ===** true or false **===

const isExpensive = true;
const isGood = false;


// const
// const name=''
'opeyemi'
"ola"

// ===** string **===

const school ='al-ameen'

console.log(school)

// ===** number **===
const age = 21
console.log(age)
// ===** boolen**===
const isComplete = true;
const isQuality = false;

const year = null;

const classRoom = undefined;
const friend = 'zainab'
console.log(friend)

const fridge = {
    name:'soft plus',
    color:'white',
    height:56,
    switch:true,
    year:null,
    brand:undefined
}
// console.log(fridge)
console.log(fridge.name)
// console.log(fridge.year)
console.log(fridge['year'])

console.log(fridge['brand'])

// const middleName = 'ayinla'
// console.log(middleName)

// const day = 1
// console.log(day)

// const isBad = false
console.log(isBad)















































//     const container = document.querySelector('#box')


// const fetchData = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data)
//     container.innerHTML = data.map(user=>{
//         return `<div>
//         <h1>name:${user.name}</h1>
//         <p>email:${user.email}</p>
//         </div>
//         `
//     }).join(' ')
// }

// fetchData()