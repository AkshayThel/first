//-----Method------//

//map    
//filter
//reduce
//for each

let city = ["Tuljapur","Pandhaprpur"]


for (let i=0;i<city.length;i++){
    if(city[i]==="Tuljapur")
console.log(city[i])

}


let ages=[2000,1996,1997,2004,1998]
let aaa =[]

for (let i=0;i<ages.length;i++){
    aaa.push(2021-ages[i])
}
console.log(aaa)
console.log(aaa)
let aaaa=[2011,2012,2013,2020]

let cc=aaaa.map(function(el){
    return el



return 2021-el})

console.log(cc)

//map

let kk=[10,20,30,40,50]
let d=[]
for(let i=0;i<kk.length;i++){
    console.log(kk[i])
  d.push(kk[i]+10)
}
console.log(d)

let r=[1,2,3,4]
let pl=r.map(function(el){
    return el+4
})

// filter

let value=[10,15,5,16,20,15,25]
let uk=[]

for (let i=0;i<value.length;i++){
    if(value[i]>15){
        uk.push(value[i])
    }
}
console.log(uk)


let yy=value.filter(function(el){
    return el >15
})

console.log(yy)


// reduce

let se=[10,15,20]
let sum=0
for (let i=0;i<se.length;i++){
    sum =se[i]+sum

}

console.log(sum)

let g=se.reduce (function(acc,el,index,arr){
    return acc + el
})

console.log(g)

// map
//filter



let names=["akshay","aniket","Sakharam"]
for (let i=0;i<names.length;i++){
    console.log(names[i])
    console.log(`welcome ${names[i]}!`)


}

let iii=names.forEach(function(el,index,val){console.log(`welcome ${el}!`)}) // 7777777

// find findindexof // some //every

let marks = [22,44,33,55.22,88,
    44,55,]

    let bbb=marks.find(function(el,indexel,arr){
        return el>30
    })

    let tttt=marks.find(function(el,index,arr){
        return el>30
    })
    console.log(tttt)
    let kd=console.log(bbb)



    let kkkk=[100,115,120,125,130,135]
    let oo=kkkk.some(function(el){
        return el>=100
    })
    console.log(oo)

    let weight=[10,20,
    35,40,50]
    let rd=weight.every(function(el){
        return el>4
    })

    console.log(rd)

    // find- element
    // findIndex----index
    // some---boolean
    // every------





















aaaa.map(function(el,index,arr){
    return 2021+el
})