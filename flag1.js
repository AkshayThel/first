let fruits=['apple','banana',',mango','grapes']
let iseInput="banana".toLowerCase()

let isAvail=false 
for (let i=0;i<fruits.length;i++){
    if (fruits[i]==iseInput){
       isAvail=true
       
    }
}

if (isAvail){
    console.log("Fruit isAvailable")

}

 else{
     console.log('hi')
 }














 
let bikes=['two wheeler','four wheeler',"transport",'three wheeler']

let input='four wheeler'
let isAvailable=false

for (let i=0;i<bikes.length;i++){
    if(bikes[i]==input){
        isAvailable=true

    }
}

if (isAvailable){
    console.log("Avaialable")
}
else{
    console.log('not')
}

