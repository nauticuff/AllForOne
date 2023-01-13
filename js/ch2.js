let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementById('secondInput');

let ch2Inject = document.getElementById('ch2Inject')

let addBtn = document.getElementById('addBtn').addEventListener('click', function() {
    addApi(firstInput.value, secondInput.value);
})

function addApi(firstInput, secondInput) { 
    Add2NumUrl = 'https://afoday2carlos.azurewebsites.net/add2numbers/add/' + firstInput + '/' + secondInput
    urlCall2(Add2NumUrl)
}

function urlCall2(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch2Inject.innerHTML = data
    )
}

