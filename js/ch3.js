let firstQuestionInput = 'Carlos';
let secondQuestionInput = '8am';

askApi(firstQuestionInput, secondQuestionInput);

function askApi(firstQuestionInput, secondQuestionInput) { 
    askingQuestionsUrl = 'https://afoday2carlos.azurewebsites.net/questions/' + firstQuestionInput + '/' + secondQuestionInput
    urlCall(askingQuestionsUrl)
}

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            console.log(data)
        }
    )
}

