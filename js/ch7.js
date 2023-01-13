let phrase = document.getElementById('phrase');
let phraseUrl = '';

let reverseBtn = document.getElementById('reverseBtn').addEventListener('click', () => {
    reverseApi(phrase.value)
})

function reverseApi(phrase) { 
    phraseUrl = `https://afoday2carlos.azurewebsites.net/enterstring/${phrase}`
    urlCall7(phraseUrl)
}

function urlCall7(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch7Inject.innerHTML = data
    )
}

