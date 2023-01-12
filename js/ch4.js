let firstNumInput = 4;
let secondNumInput = -7;

function evaluateApi(firstNumInput, secondNumInput) { 
    LessGreaterUrl = 'https://afoday2carlos.azurewebsites.net/evaluate/values/' + firstNumInput + '/' + secondNumInput
    urlCall(LessGreaterUrl)
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

evaluateApi(firstNumInput, secondNumInput);

