
////////////////////////
////////API stuff///////
////////////////////////

var format = "H"

var currentTime = moment().format(format);
var after9 = moment('10', format);
console.log(currentTime); // true

var test = document.querySelector('.lists');


// var checkafter9 = currentTime.isAfter(after9)
// console.log(checkafter9)

// var textareas = $('ul')


// if(currentTime.isAfter(after9) == true){
//     textareas.children().eq(0).children().eq(1).css('background', '#d3d3d3');



// }

$('.hours').each(function (){
    if(currentTime >= 18 || currentTime < 9){ //6PM to work start is grey 
        $('.hours').find('textarea').css('background', '#d3d3d3')
    }

    if(currentTime == 9){
        $('.hours').find('textarea').css('background', '##ff6961')
    }








})


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



