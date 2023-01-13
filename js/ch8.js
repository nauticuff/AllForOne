let firstNameInput = document.getElementById('firstNameInput')

let directoryBtn = document.getElementById('directoryBtn').addEventListener('click', () => {
    directoryApi(firstNameInput.value)
})

function directoryApi(firstNameInput) { 
    studentDirectoryUrl = `https://afoday2carlos.azurewebsites.net/studentdirectory/getstudentbyfirstname/${firstNameInput}`
    urlCall8(studentDirectoryUrl)
}

function urlCall8(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch8Inject.innerHTML = data
    )
}

