const inputTextEl = document.getElementById('input-text')
const inputFrom = document.getElementById('input-from')
const inputTo = document.getElementById('input-to')
const publishBtn = document.getElementById('publish-btn')

const endorsementEl = document.getElementById('endorsements')

publishBtn.addEventListener('click', function() {
    displayMessage()
    clearInputFields()
})

function displayMessage() {
    endorsementEl.style.display = 'block'
        
        let baseString = `
        <div id="message">
            <h3> ${inputFrom.value} </h3>
            <p> ${inputTextEl.value} </p>
            <div id="flex">
                <h4> ${inputTo.value} </h4>
                <button class="like-btn"> ❤ </button>
            </div>
        </div>
    `
    if (inputTextEl.value !== "" && inputTo.value !== "" && inputFrom.value !== "") {
        endorsementEl.innerHTML += baseString
    }

    const likeBtn = document.querySelectorAll('.like-btn')

    for (let i of likeBtn) {
        i.addEventListener('click', function() {
            if (i.innerHTML === "❤") {
                i.style.color = "red"
                i.innerHTML = "❤ " + 1
            } else {
                i.style.color = "black"
                i.innerHTML = "❤"
            }
        })
    }
}

function clearInputFields() {
    inputTextEl.value = ""
    inputFrom.value = ""
    inputTo.value = ""
}
