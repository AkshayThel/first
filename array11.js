console.log(4=="4")
console.log(5===5)
console.log(9==9)
console.log(11!==17)
console.log(14!=="14")
console.log(2===2)
console.log("Jay Bhavani Jay Shivaji !")

console.log('====================')


console.log(2===2 || 4==="4")


// for while


for (let i=0;i<=10;i++){
    console.log(i)
}

let k=0

while (k<=20){
    console.log(k)
    k++

    if (k==5){
        console.log("Hello")
    }
}


let h="Bartiya"

let m="Bhagirath"
console.log(m[0])

let j="Chhatrapti Shivaji maharaj"
console.log(j.indexOf('m'))
console.log

console.log('Hello')


for (i=1;i<=20;i++){
    console.log(i)
    if(i==8)
{
    break;
}}

for (i=0;i<=20;i++){

    if (i==9){
        continue;
        
    }
  
}

if ('9'==='9')
{
    console.log('Hello world')
}
else if (4==4){
    console.log('Hello')
}
else {console.log("Namakar")}

if(9===9){
    console.log("Yes")
}
if (8==8){
    console.log('yeah')
}
else {console.log("")}

console.log('Namaskar')

// 
let workers=['Ashish','Naik',12,13,14,16]


let worker ={
    
    Favourateplace: "GHATSHIL",
    lastName: 'Ghatshile' ,

    place: "Tuljapur",
    FirstNamw:'Atish',
    dist: 'Osmanabad'
  

        }

console.log(worker.Favourateplace)

//update
worker.dist="Dharashiv"

let person ={
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNumber:23
}

//retrieve
console.log(person.firstName)
console.log(person['firstName'])

//update



person.firstname="amol"


// add
person.language ="Marathi"
person.languages=""




console.group("Dharashiv")
console.log(worker)

for (let key in worker){
    console.log(key,worker[key])
}

//array


let number=[40,50,60,70,80,99]
console.log(number[4])
console.log(number[5])


console.log(number.length)
console.log(number[number.length-2
])

let A=['apple','banana','mango','grapes']
let userInp='AppLe'
userInp='AppLe'.toLowerCase()

for(i=0;i<A.length;i++){
    if (userInp==A[i]){
        console.log('Fruit is availabl')
    }

    else('Fruit is not available')
}

if (A.includes (userInp)){
    console.log("AB")
}
else {(console.log("n"))
}

let userInput='banana'
let Available=false

for(i=0;i<A.length;i++){
if (A.includes(userInput)){
    Available=true
}
}

if (Available){console.log("fruit available for Rs.500")}
else console.log("Fruit will beavailable soon")


let UI="grapes"
let isAvailables=false
A.forEach(function(el){
    if (el==userInput){
isAvailables=true
    }
})

if (isAvailables){console.log("Yes")}
else{console.log("not Avaialble")}

//
let usernames=["chinmay deshpande","sanchita dholepatil",'Gauri Patil','Aniket Raut']

let hh=usernames.map(function(el){
    return el.split(' ')[0][0]+el.split(' ')[1][0]})
    console.log(hh)

let pppp=usernames.map(function(el,arr){
    return el.split(' ')[0][0]+el.split(' ')[1][0]


})
console.log(pppp)


    