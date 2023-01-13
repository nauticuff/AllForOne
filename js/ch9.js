let cuisineInput = document.getElementById('cuisineInput');

let pickerBtn = document.getElementById('pickerBtn').addEventListener('click', () => {
    pickerApi(cuisineInput.value)
})

function pickerApi(cuisine) { 
    restaurantUrl = `https://afoday2carlos.azurewebsites.net/category/${cuisine}`
    urlCall9(restaurantUrl)
}

function urlCall9(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch9Inject.innerHTML = data
    )
}

