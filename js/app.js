'use strict';

var counttheCorrectAnswers = 0;

function userName1(){
    var userName = prompt('Hi there! What is your name?');
    console.log('This is the user name, ' + userName);
    alert('Nice to meet you, welcome to my site ' + userName);
    return userName;
}


function question1(){
    var userName = prompt('Is my name Jordan?')
    if(userName.toLowerCase() === 'yes' || userName.toLowerCase() === 'y'){
        alert('Gold star for you, you are right!');
        counttheCorrectAnswers++;
        // console.log('Gold star for you, you are right');
    }else {
        alert('No gold star, you are so close!');
        // console.log('No gold star, you are so close!');
    }
}

function question2(){
    var userAnimal = prompt('Do I love animals?')
    if(userAnimal.toLowerCase() === 'yes' || userAnimal.toLowerCase() === 'y'){
        alert('My goodness, you know me so well');
        counttheCorrectAnswers++;
        // console.log('My goodness, you know me so well');
    }else {
        alert('You just do not get me');
        // console.log('You just do not get me');
    }
}

function question3(){
    var userLifeGuard = prompt('Do I appear to you as a previous lifeguard?')
    if(userLifeGuard.toLowerCase() === 'yes' || userLifeGuard.toLowerCase() === 'y'){
        alert('Heck yeah, I can save you!');
        counttheCorrectAnswers++;
        // console.log('Heck yeah, I can save you!');
    }else {
        alert('Yikes that is wrong, let us hope you do not need saving');
        // console.log('Yikes that is wrong, let us hope you do not need saving');
    }
}

function question4(){
    var userLOTR = prompt('Do you think I love LOTR?')
    if (userLOTR.toLowerCase() === 'yes' || userLOTR.toLowerCase() === 'y'){
        alert('Correct! You shall pass!');
        counttheCorrectAnswers++;
        //    console.log('Correct! You shall pass!');
    }  else {
        alert('Incorrect...YOU SHALL NOT PASS!');
        //    console.log('Incorrect...YOU SHALL NOT PASS!'); 
    }
}

function question5(){
    var userConfidence = prompt('Do you think I enjoy public speaking?')
    if (userConfidence.toLowerCase() === 'yes' || userConfidence.toLowerCase() === 'y'){
        alert('I do not but I am going to get there, thanks for the confidence though!');
        counttheCorrectAnswers++;
        // console.log('I do not but I am going to get there, thanks for the confidence though!');
    }else {
        alert('You have marked no, boooo. Just kidding, I do not. I am hoping to get there one day');
        // console.log('You have marked no, boooo. Just kidding, I do not. I am hoping to get there one day');
    }
}

function question6(){
    var correctNumber = 8;
    var number = prompt('Enter a number between 1 and 10: ');
    for (var i = 0; i < 4; i++){
        if ((i === 3) && (correctNumber !== parseInt(number))) {
            alert('Sooooo close, the correct number is 8');
        } else if  (number < correctNumber) {
            var number = prompt('guess something higher!');
        } else if (number > correctNumber) {
            var number = prompt('guess something lower!');
        } else if (parseInt(number) === correctNumber) {
            alert('You entered the right number!'); 
            counttheCorrectAnswers++;
            break;
        }
    }
}

function question7(personName){
    var favoriteIceCream = new Array('rocky road', 'strawberry', 'vanilla', 'half baked', 'chocolate chip cookie dough');
    var guesses = 0;
    var maxNumberOfGuesses = 6;
    var theCorrectAnswer = false;
    while (!theCorrectAnswer && guesses < maxNumberOfGuesses) {
       var userAnswer = prompt('List one of my favorite ice creams');
       for (var i = 0; i < favoriteIceCream.length; i++) {
            if (userAnswer.toLowerCase() === favoriteIceCream[i]){
                alert('You are absolutley right!!');
                theCorrectAnswer = true;
                counttheCorrectAnswers++;
                break;
            } else if (i === favoriteIceCream.length - 1) {
                alert('Unfortunatley, that is not one of them');
            }
        }    
        guesses++
    }
    if (!theCorrectAnswer) {
        alert('That is wrong, sorry you have ran out of guesses. The possible answers were ' + favoriteIceCream[0] + 
        ', ' + favoriteIceCream[1] + ', ' + favoriteIceCream[2] + ', ' + favoriteIceCream[3] + ', ' + favoriteIceCream[4] + '.');
    }
    var icecream = '';
    for (var i=0; i<favoriteIceCream.length; i++){
        icecream+=favoriteIceCream[i] + ', ';
    }
    alert(personName +' You got ' + counttheCorrectAnswers + ' answer(s) correct out of 7');
}

var names = userName1();
question1();
question2();
question3();
question4();
question5();
question6();
question7(names);