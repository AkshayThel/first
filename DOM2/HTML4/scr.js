



let headingOne=document.querySelector('h1')
console.log(headingOne)
let heading2=document.querySelector('#headOne')
console.log(heading2)

let heading3=document.querySelector('h2')
console.log(heading3)


let heading4=document.querySelector('.ny')

console.log(heading4)


let liLis=document.quesryselctor("button")
console.log(liLis)


let  liList=document.querySelectorAll('li')

console.log(liList)

let heading=document.querySelector('h1[class="ny"]')

headingOne.addEventListener('click',function(){
    console.log(headingOne.textContent)
    headingOne.textContent="red"
 
})


liLis.addEventListener('click',function(){
    for (let i=0;i<liList.length;i++)
    {liList[i].style.color="red"}
})