import './style.css'
function toDoItem (title,  description, date = new Date(), completed = false)  {
    return {title,  description, date, completed}
}

function displayItem(item) {
   const container = document.createElement('div')
   container.classList.add('item-container') 

   const title = document.createElement('div')
   container.classList.add('item-header') 
   title.innerText=item.title
   
   const completed = document.createElement('input')
   completed.classList.add('item-header') 
   completed.setAttribute('type', "checkbox")
   console.log(completed)
   completed.checked = item.completed

   const date = document.createElement('div')
   date.classList.add('item-body') 
   date.innerText = item.date

   const description = document.createElement('div')
   description.classList.add('item-body') 
   description.innerText = item.description

   container.appendChild(title)
   container.appendChild(completed)
   container.appendChild(description)
   container.appendChild(date)

   return container
}

function pageSetUp() {
    localStorage.clear()
    const mainBody = document.createElement('div')
    
    const textInput = document.createElement('input')
    mainBody.appendChild(textInput)
    
    const strResult = document.createElement('div')
    mainBody.appendChild(strResult)

    const btn = document.createElement('button')
    btn.addEventListener('click', () => {
        let id = localStorage.length
        let item = toDoItem(textInput.value, "TEST")
        localStorage.setItem(id, JSON.stringify(item))
        strResult.innerText = ''
        textInput.value = ''
        for (let i = 0; i < localStorage.length; i++)
        {
            let values = localStorage.getItem(i)
            let ob =JSON.parse(values)
            strResult.innerText = strResult.innerText + '\n' + ob.title
        }
    })
    btn.innerText = "Add to storage"
    mainBody.appendChild(btn)
    
    return mainBody 
}

let item = toDoItem("hi", "say hello", '101010', true)
document.body.appendChild(displayItem(item))