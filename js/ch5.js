let nounOne = 'gas station';
let nounTwo = 'park';
let nounThree = 'spaceship';
let adjOne = 'lovely';
let adjTwo = 'skinny';
let adjThree = 'mean';
let nounFour = 'train';
let adverb = 'cheerily';
let nounFive = 'pineapples';
let adjFour = 'happy';
let adjFive = 'blue';

function storyApi() { 
    MadLibUrl = `https://afoday2carlos.azurewebsites.net/story/${nounOne}/${nounTwo}/${nounThree}/${adjOne}/${adjTwo}/${adjThree}/${nounFour}/${adverb}/${nounFive}/${adjFour}/${adjFive}` 
    urlCall(MadLibUrl)
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

storyApi(nounOne,nounTwo,nounThree,adjOne,adjTwo,adjThree,nounFour,adverb,nounFive,adjFour,adjFive);

