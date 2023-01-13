let firstQInput = document.getElementById('firstQInput');
let secondQInput = document.getElementById('secondQInput')

let akBtn = document.getElementById('akBtn').addEventListener('click', () => {
    askApi(firstQInput.value, secondQInput.value)
})

function askApi(firstQuestionInput, secondQuestionInput) { 
    askingQuestionsUrl = 'https://afoday2carlos.azurewebsites.net/questions/' + firstQuestionInput + '/' + secondQuestionInput
    urlCall3(askingQuestionsUrl)
}

function urlCall3(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch3Inject.innerHTML = data
    )
}

