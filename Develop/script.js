
////////////////////////
////////API stuff///////
////////////////////////

var currentTime = moment().format("h:mm a")
console.log(currentTime)



///////////////////////////
//////global vars/////////
/////////////////////////
var date = $('#time-block')
date.text("Today's date is: " + moment().format("dddd MMM Do YY, h:mm a"));

var saveBtn9 = $('#save9')
var nineAM = $('#nineText')

var saveBtn10 = $('#save10')
var tenAM = $('#tenText')

var saveBtn11 = $('#save11')
var elevenAM = $('#elevenText')

var saveBtn12 = $('#save12')
var twelvePM = $('#twelveText')

var saveBtn1 = $('#save1')
var onePM = $('#oneText')

var saveBtn2 = $('#save2')
var twoPM = $('#twoText')

var saveBtn3 = $('#save3')
var threePM = $('#threeText')

var saveBtn4 = $('#save4')
var fourPM = $('#fourText')

var saveBtn5 = $('#save5')
var fivePM = $('#fiveText')

var testicles = document.querySelector("root")


/////////////////////
/////functions//////
///////////////////

function init(){
var noteStorage = localStorage.getItem("nineAM")

    if(noteStorage !== null)
        var savedText = localStorage.getItem("nineAM")
        nineAM.val(savedText)

        var savedText = localStorage.getItem("tenAM")
        tenAM.val(savedText)

        var savedText = localStorage.getItem("elevenAM")
        elevenAM.val(savedText)

        var savedText = localStorage.getItem("twelvePM")
        twelvePM.val(savedText)

        var savedText = localStorage.getItem("onePM")
        onePM.val(savedText)

        var savedText = localStorage.getItem("twoPM")
        twoPM.val(savedText)

        var savedText = localStorage.getItem("threePM")
        threePM.val(savedText)

        var savedText = localStorage.getItem("fourPM")
        fourPM.val(savedText)

        var savedText = localStorage.getItem("fivePM")
        fivePM.val(savedText)

}

init()

function saveNine(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("nineAM", text_to_store);
}


function saveTen(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("tenAM", text_to_store);
}

function saveEleven(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("elevenAM", text_to_store);
}

function saveTwelve(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("twelvePM", text_to_store);
}

function saveOne(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("onePM", text_to_store);
}

function saveTwo(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("twoPM", text_to_store);
}

function saveThree(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("threePM", text_to_store);
}

function saveFour(event){
    btnClicked = $(event.target);
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("fourPM", text_to_store);
}

function saveFive(event){
    btnClicked = $(event.target);
    console.log(btnClicked)
    console.log("saved");
    var text_to_store = btnClicked.siblings('textarea').val();
    localStorage.setItem("fivePM", text_to_store);
}



saveBtn9.on('click', saveNine)

saveBtn10.on('click', saveTen)

saveBtn11.on('click', saveEleven)

saveBtn12.on('click', saveTwelve)

saveBtn1.on('click', saveOne)

saveBtn2.on('click', saveTwo)

saveBtn3.on('click', saveThree)

saveBtn4.on('click', saveFour)

saveBtn5.on('click', saveFive)



