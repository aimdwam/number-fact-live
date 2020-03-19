console.log("main.js loaded")

function onLoad() {
    console.log("body onload event fired")

    let factList = document.getElementById("factList")
    let checkBtn = document.getElementById("checkBtn")
    let input = document.getElementById("textField")

    let handleClick = evt => {
        console.log('clicked')
        let item = document.createElement('li')
        item.innerText = input.value
        factList.append(item)
    }
    checkBtn.addEventListener('click', handleClick)
}

