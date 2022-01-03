let person ={
    fullName:'Mayur',
    age:23
}

let persons ={
    fullName:'Akshay',
    age:23

}

let Person = {
    fullName:"Suraj",
    age:25
}

//update

person.age=24

console.log(person)
//detete
//retrive
console.log(Person.fullName)
console.log(Person)
//create


persons.marks=81
console.log(persons)

person.marks=75
Person.marks=82; console.log(person)
console.log(Person)
person.language="marathi"



let mapA=new Map()
let names=new Array()
let Quality=new String("High")

let number=[22,33,44,55,66,77]
let Person1={
    fullName:"chinmay deshmukh",
    age:32,
    skills:[11,33,44,55,66,77]
}



//set

//action=to set the key value foe a map
// retuns map only



mapA.set(true,"isAdult")
mapA.set(11,"amit")
mapA.set(number,"marks")
mapA.set(Person1,"info")

let y=mapA.set("chinmay","info");
console.log(y)

console.log('________________')

console.log(mapA)

//get---

//actions the value for passed key

mapA.get(true)
mapA.get(11)
mapA.get(number)
let r=mapA.get('chinmay')
mapA.get("person1")
console.log(r)


//get and Set
console.log('____________')

console.log(mapA.values())


console.log(mapA.keys())

console.log(mapA.entries())

//mapA.delete(number)
mapA.clear()
console.log(mapA)

//mapA.delete(Person1);console.log(mapA)




// get,set,keys,values,entries,delete,clear


mapA.set(true,"isAdult")
mapA.set(11,"amit")
mapA.set(number,"marks")
mapA.set(Person1,"info")

console.log(mapA)

console.log(mapA.size)

let arr=['Ashish','Chinmay']


let role=new Map([
    ["ashish","Engineers"],
    ["Chinamy","CS"],
    ["Akshay",'Teacher'],
    ["Ram","dr"],
    ["aniket","ca"]
])
console.log(role)


//arr


for (let k of role){
    console.log(k)
}


for  (let key of role.keys() ){
    console.log(key)
}

consol