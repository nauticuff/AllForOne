let oeNum = document.getElementById('oeNum')

let determineBtn = document.getElementById('determineBtn').addEventListener('click', () => {
    determineApi(oeNum.value)
})

function determineApi(input) { 
    OddEvenUrl = `https://afoday2carlos.azurewebsites.net/oddoreven/${input}` 
    urlCall6(OddEvenUrl)
}

function urlCall6(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch6Inject.innerHTML = data
    )
}

