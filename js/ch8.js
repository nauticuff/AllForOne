let firstNameInput = document.getElementById('firstNameInput')

let directoryBtn = document.getElementById('directoryBtn').addEventListener('click', () => {
    directoryApi(firstNameInput.value)
})

function directoryApi(info) { 
    studentDirectoryUrl = `https://afoday2carlos.azurewebsites.net/studentdirectory/getstudentbyinfo/${info}`
    urlCall8(studentDirectoryUrl)
}

function urlCall8(url){
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            firstNameInject.innerHTML = data.firstName
            lastNameInject.innerHTML = data.lastName
            slackNameInject.innerHTML = data.slackName
            emailInject.innerHTML = data.email

            console.log(data)     
        }
    )
}

