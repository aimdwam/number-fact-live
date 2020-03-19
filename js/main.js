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

    let numberapi = cat => num => {
        let url = "http://numbersapi.com/" + num + "/" + cat + "?json"
        return fetch(url).then(
            response => response.json()
            , error => console.log(error)
        ).then(data =>
            data.found ? data.text : Promise.reject()
        )
    }

    let mathFact = numberapi("math")
    let yearFact = numberapi("year")
    let defaultFact = numberapi("")

    let fatchFact = num => {
        input.disabled = true
        input.value = "fetching facts for " + num + "..."
        checkBtn.disabled = true

        return mathFact(num)
            .catch(e => yearFact(num))
            .catch(e => defaultFact(num))
            .catch(e => num + " is unremarkable.")
            .finally(() => {
                input.disabled = false
                checkBtn.disabled = false
                input.value = ""
            })
    }

    let submitHandler = evt => {
        console.log("form submitted", input.value)
        evt.preventDefault()
        fatchFact(input.value)
            .then(text => {
                factList.append(createItem(text))
            })
    }

    form.addEventListener('submit', submitHandler)
}

