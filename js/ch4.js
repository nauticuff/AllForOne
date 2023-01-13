let firstNumInput = document.getElementById('firstNumInput');
let secondNumInput = document.getElementById('secondNumInput');

let evaluateBtn = document.getElementById('evaluateBtn').addEventListener('click', () => {
    evaluateApi(firstNumInput.value, secondNumInput.value)
})

function evaluateApi(firstNumInput, secondNumInput) { 
    LessGreaterUrl = 'https://afoday2carlos.azurewebsites.net/evaluate/values/' + firstNumInput + '/' + secondNumInput
    urlCall4(LessGreaterUrl)
}

function urlCall4(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch4Inject.innerHTML = data
    )
}


