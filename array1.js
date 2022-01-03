//=====day 11========//


let names =["chinmay","shirish","Ram"]

console.log(names[2])
console.log(names.indexOf('chinmay'))

//Object--Prop and methods 

let aa=names.length
console.log(aa)
// Array

for (let i=0;i<names.length;i++)[
    console.log(names[i])
]

// methods  

console.log(names.reverse())
 
let r= names.push("Mahesh") // push
console.log(names)
console.log(typeof r)

// pop

let rr=[10,15,20,25,"aksh","thele"]
let jj=rr.push("aniket")

console.log(jj)
console.log(rr)

let kk=names.unshift("Mahesh")
console.log(kk)

console.log(names)
    
console.log ("Jay Ambe")
console.log("Mahesh")
console.log("Om Namo shivay")

console.log("AAI RAJA UDO UDO SADA NANDICHA UDO UDO , MALYATLYA AAICHA UDO UDO")

let hh=rr.pop()
console.log(hh)
console.log(rr)
let dd= rr.unshift("Jay")
console.log(rr)

// search//

let Tirthkshetra =[ "TULJAPUR","KOLHAPUR","MAHUR","PANDHARPUR","NASHIK"]

let city ="TULJAPUR"
let city1="NASHIK"


for (i=0;i<Tirthkshetra.length;i++){
    console.log(Tirthkshetra[i])
    if (Tirthkshetra[i]==='TULJAPUR'){
        console.log("MAJHA GAON MAJHA TIRTH")
    }

    if (Tirthkshetra[i]==='NASHIK'){
        console.log('KUMBHMELA')
    }
    
    if (Tirthkshetra[i] ==='MAHUR'){
        console.log('Mataji')
    }
}

console.log("JAY ADIMAYA ADISHAKTI MATAJI")


let rrr=[0,2,3,4]
let l=2

for (let i=0;i<rrr.length;i++){
    console.log(1)
}
 for (let i=0;i<rrr.length;i++) {
    if(rrr[i]===l){
            console.log('okk')}
        else {console.log('no')}
    
}

//

let citypython=["pune","nagpur","mumbai","Kolhapur"]
let cityPython=["pune","mumbai","nagpur","kolkata"]
let user="pune".toLowerCase

console.log(citypython.reverse())

for (let i=0;i<cityPython.length;i++){
    if(cityPython[i]===user){
        console.log('city')}
        else (console.log('city not a'))
        }
    


//------yes or not



if (cityPython.includes("pune")){
        console.group('yes')
}    else {
        console.log("ok")
    }


// action
console.log(rr)

console.log(cityPython.sort())// sort

//

let numbers=[11,20,[11,20,33]]
console.log(numbers.flat())

console.log(numbers[2][1])



let qqq=["pune","mumbai","kanpur","amritsar",'Delhi']
console.log(qqq.slice(1,2))

let ggg= qqq.slice(-4,4)
console.log(ggg)
