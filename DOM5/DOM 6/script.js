let headingOne=document.querySelector('ul')
let inputtexts=document.querySelector('input')
let butons=document.querySelector('#add')
let liList=document.querySelectorAll('li')

for (let i=0;i<liList.length;i++){
    console.log(liList[i])
}


butons.addEventListener('click',function(){
    let Eltext=inputtexts.value

    let NeText=document.createElement('li')
    NeText.textContent=Eltext

CreateButton(NeText)
headingOne.appendChild(NeText)



})

headingOne.addEventListener('click',function(event){
    if (event.target.tagName==="BUTTON"){
        if event.target,class
    }
})