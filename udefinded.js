//

class person {
    age= undefined
    skill=undefined
    roll=undefined
}


let amol=new person()
console.log(amol)

amol.skills=['python','html','javascript','c++']
amol.age=25

console.log(amol)


class persons {
    constructor(fullName,rollNo,age){
        this.fullName=fullName
        this.age=age
        this.rollNo=rollNo
    }

}

let chinmay=new persons("Chinmay Deshpande",25,26)

console.log(chinmay)

class pers{
    setAge(age){
        this.age=age
    }
    setFullname(fullName){
        this.fullName=fullName
    }
    setRoll(rollNo){
        this.rollNumbe=rollNumbe
    }
}


let apporva=new pers()
apporva.setAge(12)
apporva.setFullname("Apoorva")
console.log(apporva)



class banks {
    constructor(accName,accNum,Bal){
        this.accName=accName
        this.accNum=accNum
        this.Bal=Bal
        this.transactions=[]
    }
    deposit(amount){
        this.transactions.push(amount)
        this.Bal=this.Bal+amount
        console.log(`The current bal is ${this.Bal}`)


    }
    withdraw(amount){
        if (amount<this.Bal){
            this.transactions.push(-amount)
            this.Bal=this.Bal-amount
        }
        else{
            console.log(`Insufficiant funds`)
        }
        

    
    }
    lastfiveTransactions(){
        console.log(this.transactions.slice(-5))
    }

    totalTrsnactinsum()
    {

       let total = this.transactions.reduce(function(acc,el){
            return acc+Math.abs(el)
        },0)
        console.log(total)
        return total
    }



}




let daksh=new banks("Daksh  D",123,1000000)
daksh.deposit(1000)
daksh.withdraw(500)
console.log(daksh)
daksh.deposit(10000)
daksh.withdraw(100000)
daksh.deposit(100011)

//five object

let accounts=[
    new banks("ABC",1234,1000),
    new banks("DEF",12345,100000001),
    new banks ("aniket",123456,10000)
]

accounts.forEach(function(el){
    el.Bal=el.Bal+1001
})
accounts.forEach(function(el){
    console.log(el)
})

let totalvalue=accounts.reduce(function(acc,el){
    return acc+el.Bal
},0)
console.log(totalvalue)

accounts.forEach(function(el){
    el.companyName="minskole"

})

accounts.forEach(function(el){
    el.accNum=`min${el.accNum}`
})
accounts.forEach(function(el){
    console.log(el)
})
daksh.withdraw(400)
daksh.totalTrsnactinsum() 
daksh.lastfiveTransactions()
console.log(daksh)





