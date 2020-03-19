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
        let promise = fetch(url)
        let resultPromise = promise.then(response => {
            let textPromise = response.text()
            console.log("textPromise: ", textPromise)
            return textPromise
        }, error => {
            console.log(error)
        })

        resultPromise.then (text => {
            console.log("text: ", text)
        })
        console.log('function finished')
    }

    let handleClick = evt => {
        console.log('clicked')
        factList.append(createItem(input.value))

        numberapi(input.value)
    }

    checkBtn.addEventListener('click', handleClick)
}

