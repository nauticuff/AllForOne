let cuisine = 'asian';

function pickerApi(nameInput) { 
    restaurantUrl = `https://afoday2carlos.azurewebsites.net/category/${cuisine}`
    urlCall(restaurantUrl)
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

pickerApi(cuisine);