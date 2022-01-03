
// conditional. loops (for and while)
// switch operator,ternary

//use

// ============ input multiple outcome

let students = 20
if (students > 1 && students <= 20) {
    console.log('available discount 5%')
}
else if (students > 20) {
    console.log("available dicou 8%")
}

else { console.log("Incorrect input") }

let numberOfBooks = 21
if (numberOfBooks > 2 && numberOfBooks <= 20) {
    console.log(`Avaialable discount 5%`)
}
if (numberOfBooks > 19) {
    console.log(`Availble discount is 10%`)
}
else {
    console.log(`Incorrecr i/p`)
}


// syntax



// truthy----numbers except zero,character,specials
// falsy--0,undefinded,Nan,null


if (true) {
    console.log("hello")
}
else {
    console.log("hello2")

}

if (-1) {
    console.log("true")
}
else { console.log("false") }

if (0) {
    console.log(true)
}
else { console.log("false") }

if ('A') {
    console.log("tru")
}

else { console, log("false") }

if (undefined) {
    console.log(true)
}

else {
    console.log(
        "fall aa"
    )
}


//------------Loops
// for// while

for (let i = 0; i <= 21; i++) {
    console.log(i)
}

let i = 0
for (; i <= 21;) {
    console.log(i)

    i++
}
console.log("77777777777777777777777777777777777")


let j = 1
while (j <= 20) {
    console.log(j)
    j = j + 1
}


console.log(Math.floor(9.9))
console.log(Math.random())

console.log(Math.ceil(10.1))
console.log(Math.round(9.6))
console.log(Math.round(9.5))




//------------------------------------------>
//coditional statement

for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0) {
        console.log(`Number is even`)


    }
    else { console.log(`Number is not even`) }
}


// while
let h = 1
while (h <= 20) {
    if (h % 2 == 0) { console.log(`Number is even`) }
    else {
        console.log(`Number is odd`)

    }
    h = h + 1
}

// break statement ----(to exit out of loop)

for (let g = 0; g <= 10; g++) {

    if (g == 4) {
        break;
    } console.log(g)
}



for (let k = 1; k < 12; k++) {
    console.log(k)
    if (k == 5) { break; }     ///   Doubt++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}

let t = 0
while (t <= 10) {
    console.log(t)
    if (t == 5) { break; }
    t++
}



let p = 0
while (p <= 10) {   //==========++++++++++++++++======================+++++++++++++++++++++++++
    if (p == 5) { break; }
    console.log(p)
    p++
}



// Continue  statement


// Proram One

for (let l = 0; l <= 10; l++) {
    if (l == 4) { continue; }

    console.log(l)
    l++
}////============================================================

let r = 1
while (r <= 20) {
    if (r == 10) {
        continue
    }

    console.log(r)
    r++
}


//flag----true

// let fruits=['apple','banana',',mango','grapes']
// let iseInput = "banana".toLowerCase

// let isAvail = false
// for (let ii = 0; ii < fruits.length; ii++) {
   //  if (fruits[ii] === "userinput") {
      //   isAvail = true
       // break
   // }////

//}
// if (isAvail) {
    // console.log(`Fruit is avilable`)
// }
// else {
    // console.log("fruit is not available")

// }

// console.log("Hello") /*

