console.log("main.js loaded")

function onLoad() {
    console.log("body onload event fired")

    let factList = document.getElementById("factList")
    let checkBtn = document.getElementById("checkBtn")
    let input = document.getElementById("textField")
    let form = document.getElementById('form')

    let createItem = text => {
        let item = document.createElement('li')
        item.innerText = text
        return item
    }

    let numberapi = num => {
        let url = "http://numbersapi.com/" + num + "/math?json"
        return fetch(url).then(
            response => response.json()
            , error => console.log(error)
        ).then(data => {
            if (!data.found) {
                return Promise.reject()
            } else {
                return data.text
            }
        }).catch(error => {
            let url = "http://numbersapi.com/" + num + "/year?json"
            return fetch(url)
                .then(response => response.json())
                .then(data => data.text)
        })
    }

    let submitHandler = evt => {
        console.log("form submitted", input.value)
        evt.preventDefault()
        numberapi(input.value)
            .then(text => {
                factList.append(createItem(text))
            })
    }

    form.addEventListener('submit', submitHandler)
}

