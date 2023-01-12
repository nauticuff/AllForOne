let firstInput = 2;
let secondInput = 5;

function addApi(firstInput, secondInput) { 
    Add2NumUrl = 'https://afoday2carlos.azurewebsites.net/add2numbers/add/' + firstInput + '/' + secondInput
    urlCall(Add2NumUrl)
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

addApi(firstInput, secondInput);