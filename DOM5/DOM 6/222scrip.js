let headingOne=document.querySelector('ul')
let Inputtexts=document.querySelector('input')
let butons=document.querySelector('#add')
let liList=document.querySelectorAll('li')

for (let i=0;i<liList.length;i++){
    console.log(liList[i])
}


butons.addEventListener('click',function(){
    let Eltext=Inputtexts.value

    let NeText=document.createElement('li')
    NeText.textContent=Eltext

CreateButton(NeText)
headingOne.appendChild(NeText)



})