let oeNum = 17;

function determineApi(nameInput) { 
    OddEvenUrl = `https://afoday2carlos.azurewebsites.net/oddoreven/${oeNum}` 
    urlCall(OddEvenUrl)
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

determineApi(oeNum);