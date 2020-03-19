console.log("main.js loaded")

function onLoad() {
    console.log("body onload event fired")

    let factList = document.getElementById("factList")
    let checkBtn = document.getElementById("checkBtn")
    let input = document.getElementById("textField")

    let createItem = text => {
        let item = document.createElement('li')
        item.innerText = text
        return item
    }

    let handleClick = evt => {
        console.log('clicked')
        factList.append(createItem(input.value))
    }
    
    checkBtn.addEventListener('click', handleClick)
}

