/* 

// knapp för att kunna spela uttal på koranska 

        /* setup
------------------------ */


const button1 = document.querySelector("#start1");
const button2 = document.querySelector("#start2");
const button3 = document.querySelector("#start3");
const button4 = document.querySelector("#start4");
const button5 = document.querySelector("#start5");







/* händelselyssnare
------------------------ */
button1.addEventListener("click", function () {
    
     // starta ljud
   playSound("hello.mp3");

   
    
    
})

button2.addEventListener("click", function () {

    // starta ljud
   playSound("nicetomeetyou.mp3");



    
})

button3.addEventListener("click", function () {

    // starta ljud
   playSound("thankyou.mp3");



    
})

button4.addEventListener("click", function () {

    // starta ljud
   playSound("excuseme.mp3");



    
})

button5.addEventListener("click", function () {

    // starta ljud
   playSound("howmuchisit.mp3");


    
})


// anropa metoder och funktioner:


function playSound(start1) {

    //skapa ett audio element
    let audio = new Audio();

    //ange källa till ljudet

    audio.src = start1;

    //spela ljud

    audio.play();


    
}

function playSound(start2) {

    //skapa ett audio element
    let audio = new Audio();

    //ange källa till ljudet

    audio.src = start2;

    //spela ljud

    audio.play();

    
}

function playSound(start3) {

    //skapa ett audio element
    let audio = new Audio();

    //ange källa till ljudet

    audio.src = start3;

    //spela ljud

    audio.play();
    
}

function playSound(start4) {

    //skapa ett audio element
    let audio = new Audio();

    //ange källa till ljudet

    audio.src = start4;

    //spela ljud

    audio.play();

}

function playSound(start5) {

    //skapa ett audio element
    let audio = new Audio();

    //ange källa till ljudet

    audio.src = start5;

    //spela ljud

    audio.play();

    
}

