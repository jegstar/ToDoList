function toDoItem (title,  description, date = new Date(), completed = false)  {
    return {title,  description, date, completed}
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

document.body.appendChild(pageSetUp())