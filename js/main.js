console.log("main.js loaded")

function onLoad() {
    console.log("body onload event fired")

    let factList = document.getElementById("factList")
    let checkBtn = document.getElementById("checkBtn")

    let handleClick = evt => {
        console.log('clicked')
        let item = document.createElement('li')
        item.innerText = 'abc'
        factList.append(item)
    }
    checkBtn.addEventListener('click', handleClick)
}

