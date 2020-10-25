chapter5 = {
    phrase: "Good weather, nice people, tasty food and mountains. Perfect choice!",
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null },
    img: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/italy-vs-spain-cover-image.jpg"
}


chapter4 = {
    phrase: "Spain is your country!",
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null },
    img: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/italy-vs-spain-cover-image.jpg"
}


chapter3 = {
    phrase: "Maybe you should go in Italy?",
    buttonChoice1: { text: "Yes", nextChapter: chapter5 },
    buttonChoice2: { text: "No", nextChapter: chapter4 },
    img: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/italy-vs-spain-cover-image.jpg"
}


chapter2 = {
    phrase: "Good weather, nice people, tasty food. What do you miss?",
    buttonChoice1: { text: "Mountains", nextChapter: chapter3 },
    buttonChoice2: { text: "Nothing", nextChapter: chapter4 },
    img: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/italy-vs-spain-cover-image.jpg"
}


chapter1 = {
    phrase: "Where do you want to live?",
    buttonChoice1: { text: "Spain", nextChapter: chapter2 },
    buttonChoice2: { text: "Italy", nextChapter: chapter5 },
    img: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/italy-vs-spain-cover-image.jpg"
}



function changeChapter(chapterToShow) {

    document.querySelector("#buttons").innerHTML = "";


    const allphrases = document.querySelector("#allphrases");


    let paragraph = document.createElement("p");
    let text = document.createTextNode(chapterToShow.phrase);
    paragraph.appendChild(text);
    allphrases.appendChild(paragraph);


    let myImage = document.createElement("img");
    myImage.src = chapterToShow.img;
    allphrases.appendChild(myImage);

    //SCROLL TO BOTTOM
    allphrases.scrollTop = allphrases.scrollHeight;



    let myButton1 = document.createElement("input");
    let myButton2 = document.createElement("input");

    if (chapterToShow.buttonChoice1.nextChapter !== null && chapterToShow.buttonChoice2.nextChapter !== null) {
        myButton1.type = "button";
        myButton1.value = chapterToShow.buttonChoice1.text;
        myButton1.addEventListener('click', function () {
            changeChapter(chapterToShow.buttonChoice1.nextChapter);
        }, false);
        document.querySelector("#buttons").appendChild(myButton1);

        myButton2.type = "button";
        myButton2.value = chapterToShow.buttonChoice2.text;
        myButton2.addEventListener('click', function () {
            changeChapter(chapterToShow.buttonChoice2.nextChapter);
        }, false);
        document.querySelector("#buttons").appendChild(myButton2);

    }



}