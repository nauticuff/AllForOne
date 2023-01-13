let nounOne = document.getElementById('nounOne') //'gas station';
let nounTwo = document.getElementById('nounTwo') //'park';
let nounThree = document.getElementById('nounThree') //'spaceship';
let adjOne = document.getElementById('adjOne') //'lovely';
let adjTwo = document.getElementById('adjTwo') //'skinny';
let adjThree = document.getElementById('adjThree') //'mean';
let nounFour = document.getElementById('nounFour') //'train';
let adverb = document.getElementById('adverb') //'cheerily';
let nounFive = document.getElementById('nounFive') //'pineapples';
let adjFour = document.getElementById('adjFour') //'happy';
let adjFive = document.getElementById('adjFive') //'blue';

let storyBtn = document.getElementById('storyBtn').addEventListener('click', () => {
    storyApi(nounOne.value, nounTwo.value, nounThree.value, adjOne.value, adjTwo.value, adjThree.value, nounFour.value, adverb.value, nounFive.value, adjFour.value, adjFive.value)
})



function storyApi(nounOne,nounTwo,nounThree,adjOne,adjTwo,adjThree,nounFour,adverb,nounFive,adjFour,adjFive) { 
    MadLibUrl = `https://afoday2carlos.azurewebsites.net/story/${nounOne}/${nounTwo}/${nounThree}/${adjOne}/${adjTwo}/${adjThree}/${nounFour}/${adverb}/${nounFive}/${adjFour}/${adjFive}` 
    urlCall5(MadLibUrl)
}

function urlCall5(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => ch5Inject.innerHTML = data
    )
}

// storyApi(nounOne,nounTwo,nounThree,adjOne,adjTwo,adjThree,nounFour,adverb,nounFive,adjFour,adjFive);

