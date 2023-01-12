let phrase = 'The language of the Gods, possibly...';
let phraseUrl = '';

function reverseApi(phrase) { 
    phraseUrl = `https://afoday2carlos.azurewebsites.net/enterstring/${phrase}`
    urlCall(phraseUrl)
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

reverseApi(phrase);