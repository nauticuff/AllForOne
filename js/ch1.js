let nameInput = 'Carlos';
let savedInput = '';

function helloApi(nameInput) { 
    sayHelloUrl = 'https://afoday2carlos.azurewebsites.net/sayhello/greet/' + nameInput
    urlCall(sayHelloUrl)
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

helloApi(nameInput);