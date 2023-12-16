/* Rutherford Labbe: 11-18-2023 */

// Global variables - Text links
var linkOne = document.getElementById("link_one");
var linkTwo = document.getElementById("link_two");
var linkThree = document.getElementById("link_three");
var linkFour = document.getElementById("link_four");
var linkFive = document.getElementById("link_five");
var linkSix = document.getElementById("link_six");

// Global variables - Card boxes
var cardOne = document.getElementById("card_one");
var cardTwo = document.getElementById("card_two");
var cardThree = document.getElementById("card_three");
var cardFour = document.getElementById("card_four");
var cardFive = document.getElementById("card_five");
var cardSix = document.getElementById("card_six");

// Global variables - Summer background
var summerOne = document.getElementById("summer_one");
var summerTwo = document.getElementById("summer_two");
var summerThree = document.getElementById("summer_three");
var summerFour = document.getElementById("summer_four");
var summerFive = document.getElementById("summer_five");
var summerSix = document.getElementById("summer_six");


// Click on links to change the card
linkOne.addEventListener('click', function(){

    // Card selector events - selects a card base on the link clicked
    cardOne.style.opacity = '1';
    cardTwo.style.opacity = '0';
    cardThree.style.opacity = '0';
    cardFour.style.opacity = '0';
    cardFive.style.opacity = '0';
    cardSix.style.opacity = '0';

    // Summer selector events - selects a background base on the link clicked
    summerOne.style.display = 'block';
    summerTwo.style.display = 'none';
    summerThree.style.display = 'none';
    summerFour.style.display = 'none';
    summerFive.style.display = 'none';
    summerSix.style.display = 'none';

});

// Click on links to change the card
linkTwo.addEventListener('click', function(){

    // Card selector events - selects a card base on the link clicked
    cardOne.style.opacity = '0';
    cardTwo.style.opacity = '1';
    cardThree.style.opacity = '0';
    cardFour.style.opacity = '0';
    cardFive.style.opacity = '0';
    cardSix.style.opacity = '0';

    // Summer selector events - selects a background base on the link clicked
    summerOne.style.display = 'none';
    summerTwo.style.display = 'block';
    summerThree.style.display = 'none';
    summerFour.style.display = 'none';
    summerFive.style.display = 'none';
    summerSix.style.display = 'none';

});

// Click on links to change the card
linkThree.addEventListener('click', function(){

    // Card selector events - selects a card base on the link clicked
    cardOne.style.opacity = '0';
    cardTwo.style.opacity = '0';
    cardThree.style.opacity = '1';
    cardFour.style.opacity = '0';
    cardFive.style.opacity = '0';
    cardSix.style.opacity = '0';

    // Summer selector events - selects a background base on the link clicked
    summerOne.style.display = 'none';
    summerTwo.style.display = 'none';
    summerThree.style.display = 'block';
    summerFour.style.display = 'none';
    summerFive.style.display = 'none';
    summerSix.style.display = 'none';

});

// Click on links to change the card
linkFour.addEventListener('click', function(){

    // Card selector events - selects a card base on the link clicked
    cardOne.style.opacity = '0';
    cardTwo.style.opacity = '0';
    cardThree.style.opacity = '0';
    cardFour.style.opacity = '1';
    cardFive.style.opacity = '0';
    cardSix.style.opacity = '0';

    // Summer selector events - selects a background base on the link clicked
    summerOne.style.display = 'none';
    summerTwo.style.display = 'none';
    summerThree.style.display = 'none';
    summerFour.style.display = 'block';
    summerFive.style.display = 'none';
    summerSix.style.display = 'none';
});

// Click on links to change the card
linkFive.addEventListener('click', function(){

    // Card selector events - selects a card base on the link clicked
    cardOne.style.opacity = '0';
    cardTwo.style.opacity = '0';
    cardThree.style.opacity = '0';
    cardFour.style.opacity = '0';
    cardFive.style.opacity = '1';
    cardSix.style.opacity = '0';

    // Summer selector events - selects a background base on the link clicked
    summerOne.style.display = 'none';
    summerTwo.style.display = 'none';
    summerThree.style.display = 'none';
    summerFour.style.display = 'none';
    summerFive.style.display = 'block';
    summerSix.style.display = 'none';

});

// Click on links to change the card
linkSix.addEventListener('click', function(){

    // Card selector events - selects a card base on the link clicked
    cardOne.style.opacity = '0';
    cardTwo.style.opacity = '0';
    cardThree.style.opacity = '0';
    cardFour.style.opacity = '0';
    cardFive.style.opacity = '0';
    cardSix.style.opacity = '1';

    // Summer selector events - selects a background base on the link clicked
    summerOne.style.display = 'none';
    summerTwo.style.display = 'none';
    summerThree.style.display = 'none';
    summerFour.style.display = 'none';
    summerFive.style.display = 'none';
    summerSix.style.display = 'block';

});


/* Global variables for buttons */
let currentIndex = 0;
const cards = document.querySelectorAll('.box');
const totalCards = cards.length;

/* Show cards in sequential order function */
function showCard(index) {
    cards.forEach((card, i) => {
        const zIndex = totalCards - Math.abs(index - i);
        card.style.zIndex = zIndex;

        // Show only the current card
        card.style.opacity = i === index ? 1 : 0;

        // Conditional statements based on the current index
        if (i === index) {

            // Actions for the current index
            if (index === 0) {
                // Summer selector events - selects a background base on click
                summerOne.style.display = 'block';
                summerTwo.style.display = 'none';
                summerThree.style.display = 'none';
                summerFour.style.display = 'none';
                summerFive.style.display = 'none';
                summerSix.style.display = 'none';
            }

            else if (index === 1) {
                // Summer selector events - selects a background base on click
                summerOne.style.display = 'none';
                summerTwo.style.display = 'block';
                summerThree.style.display = 'none';
                summerFour.style.display = 'none';
                summerFive.style.display = 'none';
                summerSix.style.display = 'none';
            }

            else if (index === 2) {
                // Summer selector events - selects a background base on click
                summerOne.style.display = 'none';
                summerTwo.style.display = 'none';
                summerThree.style.display = 'block';
                summerFour.style.display = 'none';
                summerFive.style.display = 'none';
                summerSix.style.display = 'none';
            }

            else if (index === 3) {
                // Summer selector events - selects a background base on click
                summerOne.style.display = 'none';
                summerTwo.style.display = 'none';
                summerThree.style.display = 'none';
                summerFour.style.display = 'block';
                summerFive.style.display = 'none';
                summerSix.style.display = 'none';
            }

            else if (index === 4) {
                // Summer selector events - selects a background base on click
                summerOne.style.display = 'none';
                summerTwo.style.display = 'none';
                summerThree.style.display = 'none';
                summerFour.style.display = 'none';
                summerFive.style.display = 'block';
                summerSix.style.display = 'none';
            }

            else if (index === 5) {
                // Summer selector events - selects a background base on click
                summerOne.style.display = 'none';
                summerTwo.style.display = 'none';
                summerThree.style.display = 'none';
                summerFour.style.display = 'none';
                summerFive.style.display = 'none';
                summerSix.style.display = 'block';
            }

        }

    });
}

// Previous button function
function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex);
}

// Next button function
function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
}

// Initial display
showCard(currentIndex);


