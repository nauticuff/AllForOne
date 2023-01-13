let sayHelloUrl = '';

let ch1Inject = document.getElementById('ch1Inject')

let helloInput = document.getElementById('helloInput')

let helloBtn = document.getElementById('helloBtn').addEventListener('click', function() {
    helloApi(helloInput.value);
})

function helloApi(input) { 
    sayHelloUrl = 'https://afoday2carlos.azurewebsites.net/sayhello/greet/' + input
    urlCall(sayHelloUrl)
}

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch1Inject.innerHTML = data
       
    )
}



