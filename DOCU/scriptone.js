
let list=document.querySelector('ul')
let ButtonOne=document.querySelector('#add')
let inputText=document.querySelector('input')



ButtonOne.addEventListener('click',function(){


    let texts=inputText.value
    let li=document.createElement('li')
    li.textContent=texts
    CreateButton(li)
    list.appendChild(li)
})

/* list.addEventListener('click',function(event){
    if(event.target.tagName==="BUTTON"){
        if (event.target.className==="remove"){

            let li=event.target.parentNod
            let ul=li.parentNode
            ul.removeChild(li)
  }
    }
    if (event.target.tagName==="BUTTON"){
        if(event.target.className==="up"){
            let li =event.target.parentNode
            let ul=li.parentNode
            let prev=li.previousElementsibling
            if (prev){
                ul.insertBefore(li,prev)
            }

        }
        if (event.target.tagName==="BUTTON"){
            if(event.target.className==="down"){
                let li=event.target.parentNode
                let ul=li.parentNode
                let nextli=li.nextElementsibling
                if(nextli){
                    ul.insertBefore(nexrli,li)
                }

            }
        }
    }
}) */