$(setup);
var letters,
    lettersGuessed = [],
    word;

function setup() {
    letters = $('.letters');
    setupEvents();
}

function setupEvents() {
    $('.letters').on('click', chooseLetter);
    $('.btn').on('click', chooseWord)
}

function chooseWord() {
    word = $('input').val();
    $('#chosen-word').html(word);
    $('.user-input').hide("slow");
    // Setup spaces
    var wordArray = word.split("");
    console.log(wordArray)
    $.each(wordArray, function(element) {
        $('.chosen-word').append("<li></li>");
        document.getElementById("number-of-letters").innerHTML =
            "There are " + word.length + " letters in this word";
            document.getElementById("rules").innerHTML = 
            "Guess the letters in the word and if you are wrong well..."
    })
}

function chooseLetter() {
    var letter = $(this).text().toLowerCase();
    lettersGuessed.push(letter)
    checkLetter(letter)
    console.log(lettersGuessed);
  }
    


function checkLetter(letter) {
    var index = word.indexOf(letter);
    if (index !== -1) {
        // correct guess
        alert("correct")
            // Fill in the letter
        $($('.chosen-word li')[index]).html(letter)
    } else {
        $('#row-image1').css("visibility", "hidden");
        //$('#row-image2').show("slow").hide("slow");
    }
}
