console.log("main.js loaded")

function onLoad() {
    console.log("body onload event fired")

    let checkBtn = document.getElementById("checkBtn")
    let handleClick = evt => {
        console.log('clicked')
    }
    checkBtn.addEventListener('click', handleClick)
}

