
let ashish={

    fullname:"amol rao",
    age:23,
    rollNumber:23,
    skills:['python','javascript']

}


let Gauri={
    fullname :"gauri kanhe",
    age:30,
    rollNumber:15,
    skills:['c','python']
}

let chinmay={
    fullName: 'chinmay deshp',
    age:30,
    rollNumber:16,
    skills:['python']
}


class Person{
    fullName =undefined
    rollNumber= undefined
    age= undefined
    skilss= undefined

}

let amol= new Person()
amol.age=25
console.log(amol)

let chinmay1=new Person()
chinmay1.fullName="Deshpan"
console.log(chinmay1)

chinmay1.age=30
console.log(chinmay1)


console.log(amol)











class Per2{
    fullName= undefined
    age=undefined

    display(){
        console.log("Hello"+this.fullName)
    }
}
// setting properties outside the class

let Shraddha=new Per2()
Shraddha.fullName="Shraddha"
Shraddha.age=40
Shraddha.marks=100

//-------------------------


console.log(Shraddha.fullName)



Shraddha.display()




let chinmay22=new Per2()

chinmay22.fullName="Naik"
chinmay22.age=25
chinmay22.height=10
chinmay22.display()
//------------------------------->


class Pers3{
    constructor (a,b,c){
        this.fullname=a
        this.age=b
        this.marks=c
    }
    display(){
        console.log(this.fullname)
    }
}
    let amol5=new Pers3("chi",12,17)
    let suraj=new Pers3('Suraj',12,15)
    console.log(suraj)
    console.log(amol5)

    amol5.display

    ///-----------------set method

    class Persosn{


        setAge(age){
            this.age=age
        }
        setRoll(rn){
            this.roll=rn
        }
        setName(string){
            this.fullName=string
        }

    }


    let s=new Persosn()

    s.setAge(30)
    s.setRoll(305)
    s.setName("Ram")

    console.log(s)

    console.log(s.fullName)
    console.log("JAY SHREERAM")


console.log('=================================')



