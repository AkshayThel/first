// 6/12/2021

let ashish = ["amol", 'rao', 23, 24]


// object literal

let amol =          
{
    firstname: "Aniket",
    lastname: " rao",
    age: 26,
    rollNo: 34
}

// Retrieve 


console.log(amol.firstname)

// Update
amol.lastname = "Thele"
console.log(amol)

amol.age = 28
amol.rollNo = 30
console.log(amol)

//delete

delete amol.age
console.log(amol)

//add

amol.standard = 10
amol.m = "a"
console.log(amol)


// Data Structure


let stud = [{
    fullname: "akshay",
    lastname: "thele",
    age: 27,
    height: "125",
    Skills: ["word", "java", "c++", "salesforce"]
},
{
    fullname: "simran",
    lastname: "thele",
    age: 27,
    height: "165",
    Skills: ["word", "java", "c++"]
},


{
    fullname: "sumit",
    lastname: "thele",
    age: 27,
    height: "170",
    Skills: ["word", "java", "salesforce"]

},

{
    fullname: "amol",
    lastname: "thele",
    age: 27,
    height: "165",
    Skills: ["word", "java", "c++", "salesforce"]
}
]


//



stud.forEach(function (el, index) {
    console.log(` datas ${index + 1}`)

})




stud.forEach(function (el, index, arr) {
    console.log(`data ${el}`)
    console.log(stud.length)

})


// program -----number of skills

// amol=03

stud.forEach(function (el, index) {
    console.log(` ${el.fullname}: ${el.Skills.length}`)


    // .lenth // query

})



stud.forEach(function (el, index, arr) {
    el.country = "India"
})

console.log(stud)

stud.forEach(function (el) {
    el.height = el.height + 3
    el.age = el.age + 4

}

)

console.log(stud)

stud.forEach(function (el, index) {
    console.log(el)
})

//------------------>>>>>



// user belongs to pune city

stud.forEach(function (el) {
    el.city = "pune"
})


console.log('-----------')

let arr = stud.filter(function (el, arr) {
    return el.city === "pune"
})

console.log(arr)

arr.filter(function (el) {
    console.log(el["height"])
    console.log(el.height)
})
// user with skoll c++

let uu = stud.filter(function (el, index) {
    return el.Skills.includes('c++')
}
)

console.log(uu)

uu.forEach(function (el, arr) {
    console.log(el.fullname)
    console.log(el.age + 2)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////



console.log(arr[0])

