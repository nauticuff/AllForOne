let firstNameInput = 'Carlos';

function directoryApi(firstNameInput) { 
    studentDirectoryUrl = `https://afoday2carlos.azurewebsites.net/studentdirectory/getstudentbyfirstname/${firstNameInput}`
    urlCall(studentDirectoryUrl)
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

directoryApi(firstNameInput);