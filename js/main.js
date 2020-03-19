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

    let numberapi = num => {
        let url = "http://numbersapi.com/" + num
        return fetch(url).then(
            response => response.text()
            , error => console.log(error)
        )
    }

    let handleClick = evt => {
        console.log('clicked')

        numberapi(input.value)
            .then(text => factList.append(createItem(text)))
    }

    checkBtn.addEventListener('click', handleClick)
}

