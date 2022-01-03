// Date 4/12/2021---//


let person=["akshay","aniket","Adinath"]




let dataSheet={

    fisrt : "Akshay",
    Middle: "Adinath",
    Surname : "Thele",

    Age : "27",
    Weight:"72"

}


// create, Retrieve ,Upadae, Delete


let siblings=["Akshay","Aniket"]

siblings[0]="Ram"
console.log(siblings)

//Retrive dot and bracket

console.log(dataSheet.fisrt)
console.log(dataSheet.Middle)
console.log(dataSheet.Surname)
///////



console.log(dataSheet['Middle'])

// create or add new value 
console.log(dataSheet)

dataSheet.age='28'
dataSheet.surName='TULJAPURE'
dataSheet.adress= 'TULJAI NAGAR TULJAPUR KHURD'

console.log(dataSheet)

//delete



delete dataSheet.Weight
console.log(dataSheet)


delete dataSheet ['age'
]


//loop


let r=[10,20,40]

for(let i=0 ; i<r.length;i++){console.log(r[i])

}


let persons={
    firstName: "chinmayanand",
    lastname: "deshpane",
    marks : 20,
    rollnumber: 25,
    age : 32
}

// personOne ["firstName"] // chinmay

// dot notation does work in loop

for (let x in persons){
    console.log(x,persons[x])
}


// concat

let aaa=[1,2,3,4]
let bbb=[10,20,25]

let uuu=aaa.concat(bbb)
console.log(uuu)

let kk=bbb.concat(aaa)
console.log(kk)
    


// Join - 

let aa=['Akshay','Aniket','Omkar','sahil']
let jj=aa.join('-')
console.log(jj)
let cc= jj.split("-")
console.log(cc)

// splice

let a=["amit","Prasad","aniket","Devendra"]

let b=a.splice(1,3,"Pedha","Ladu")
console.log(b)


let pp=["red","black","green"]
let iii = pp.splice (1,2,"purple","orange")

console.log(iii)

console.log(a)
console.log(pp)


let ggg=["a","ab","abr"]

let kkk=ggg.splice(1,2,"abcd","efg")

console.log(ggg)


// fill method

stone=["red","yello","green"]
let ff=stone.fill("blue",1)

console.log(stone)
console.log()



let names=["Datta","Suhas","Vishnu","Akshay"]
let hh=names.forEach(function(el,index,val){
    console.log(`welcome ${names[i]}!`)
})