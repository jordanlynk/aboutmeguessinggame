'use strict';

var userName = prompt('Is my name Jordan?')

// if(userName.toLowercase() === 'yes' || userName.toLowerCase() === 'y'){
//   console.log('Gold star for you, you are right');
// } else {
//   console.log('No gold star, you are so close!');
// }  

if(userName.toLowerCase() === 'yes' || userName.toLowerCase() === 'y'){
    alert('Gold star for you, you are right!');
}  else {
    alert('No gold star, you are so close!');
}

var userAnimal = prompt('Do I love animals?')

// if(userAnimal.toLowerCase() === 'yes' || userName.toLowerCase() === 'y'){
//     console.log('My goodness, you know me so well');
// }   else {
//     console.log('You just do not get me');
// }

if(userAnimal.toLowerCase() === 'yes' || userAnimal.toLowerCase() === 'y'){
    alert('My goodness, you know me so well');
}   else {
    alert('You just do not get me');
}

var userLifeGuard = prompt('Do I appear to you as a previous lifeguard?')

// if(userLifeGuard.toLowerCase() === 'yes' || userLifeGuard.toLowerCase() === 'y'){
//     console.log('Heck yeah, I can save you!');
// }   else {
//     console.log('Yikes that is wrong, let us hope you do not need saving');
// }

if(userLifeGuard.toLowerCase() === 'yes' || userLifeGuard.toLowerCase() === 'y'){
    alert('Heck yeah, I can save you!');
}   else {
    alert('Yikes that is wrong, let us hope you do not need saving');
}

var userLOTR = prompt('Do you think I love LOTR?')

// if(userLOTR.toLowerCase() === 'yes' || userLOTR.toLowerCase() === 'y'){
//    console.log('Correct! You shall pass!');
// }  else {
//    console.log('Incorrect...YOU SHALL NOT PASS!'); 
// }

if (userLOTR.toLowerCase() === 'yes' || userLOTR.toLowerCase() === 'y'){
   alert('Correct! You shall pass!');
}  else {
   alert('Incorrect...YOU SHALL NOT PASS!');
}

var userConfidence = prompt('Do you think I enjoy public speaking?')

// if (userConfidence.toLowerCase() === 'yes' || userConfidence.toLowerCase() === 'y'){
//     console.log('I do not but I am going to get there, thanks for the confidence though!');
// }   else {
//     console.log('You have marked no, boooo. Just kidding, I do not. I am hoping to get there one day');
// }

if (userConfidence.toLowerCase() === 'yes' || userConfidence.toLowerCase() === 'y'){
    alert('I do not but I am going to get there, thanks for the confidence though!');
}   else {
    alert('You have marked no, boooo. Just kidding, I do not. I am hoping to get there one day');
}

var userName = prompt('Hi there! What is your name?');
console.log('This is the user name, ' + userName);
alert('Nice to meet you, welcome to my site ' + userName);