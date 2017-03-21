$(document).ready(function() {


var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                'Too ato too nOt enot one totA not anot tOO aNot', 
                'oat itain oat tain nate eate tea anne inant nean', 
                'itant eate anot eat nato inate eat anot tain eat', 
                'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var i = 0;
var sentence = sentences[i];
var j = 0;
var letter = sentence.charAt(j);
var errors = 0;
var startTime;

    $('#sentence').text(sentence);
    $('#target-letter').text(letter);

    $("#keyboard-upper-container").hide();

        $(document).keyup(function (e) {
            if (e.keyCode === 16) {
                $("#keyboard-upper-container").hide();
                $("#keyboard-lower-container").show();
            } 
            
            $(".highlight").removeClass("highlight");

            // $("#yellow-block").animate({
            //     "left": "+=18px",
            // }, 'fast' );
            // })
        });
         $(document).keydown(function (e) {
            if (e.keyCode === 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
            } 
        });

  
        $(document).on('keypress', function(event) {
            var keyPressed = event.which;
            if (!startTime) { // if startTime hasn't been defined
                startTime = e.timeStamp;
            }
            if(keyPressed) {
            console.log(event.which);
            console.log('key pressed.');
            $('#' + keyPressed).toggleClass('highlight');

            j++;
            letter = sentence[j];
            $('#target-letter').text(letter);
            

            if (letter.charCodeAt(0) === e.which) {
                $('#feedback').append($('<span class="glyphicon glyphicon-ok"></span>'))
            } else {
                 $('#feedback').append($('<span class="glyphicon glyphicon-remove"></span>'))
                 errors++;
            }
            
            j++;
            if (j === sentence.length) {
                //we have reached the end of the sentence
                // we need to move on to the next sentence
                i++;
                if (i === sentences.length) {
                    //there are no more sentences in the game
                    var endTime = e.timeStamp
                    var difference = endTime - startTime;
                    var elaspedMinutes = difference / 60000;
                    var wpm = 54 / elaspedMinutes - 2 * errors;
                    $('#feedback').text('You typed ' + wpm + 'words per minute.');
                    setTimeout(function() {
                        if (confirm('Would you like to play again?')) {
                            i = 0;
                            sentence = sentences[i];
                            j = 0;
                            letter = sentence.charAt(j);
                            errors = 0;
                            startTime = undefined;

                            $('#sentence').text(sentence);
                            $('#target-letter').text(letter);
                            $('#feedback').empty();
                            $('#yellow-block').stop.css('left', '0');
                        }
                    }, 5000);

                }else{
                    // this newly incremented i is valid
                    sentence = sentences[i];
                    j = 0;
                    letter = sentence.charAt(j)
                    $('#sentence').text(sentence);
                    $('#letter').text(letter);
                    $('#yellow-block')/stop.css('left', '0px');
                    $('feedback').empty();
                
                }
            } else {
                // I am not at the end of sentence
                letter = sentence.charAt(j);
                $('#target-letter').text(letter);
                $('#yellow-block').animate({
                    left: '+=17.5px'
                }, 200);
            }

            e.preventDefault();
            // $(document).keypress(function(e) {
            //     $('#' + e.which).addClass('highlight');
            // })

            // $(document).on('keypress', function(event) {
            // var keyPressed = event.which;
            // if(keyPressed) {
            // console.log(event.which);
            // console.log('key pressed.');
            // $('#' + keyPressed).toggleClass('#yellow-block');

            // ('#yellow-block').animate({
            // opacity: 0.25,
            // left: '+=50'
            // }, 5000, function() {
            //     j++;
            //     letter = sentence[j];
            //     $('#yellow-block').animate(letter);
            // });


            // $("#yellow-block").keypress(function(){
            // $("#yellow-block").animate({margin: "20px"});
            // });
            // i++;
            // sentence = sentence[i];
            // $('#sentence').append(letter);

      }
      
  });


   

    
});




 


