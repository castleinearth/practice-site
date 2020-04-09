let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/slime-man.jpg') {
        myImage.setAttribute ('src','images/sunset-view.jpg');
    }
    else {
        myImage.setAttribute ('src','images/slime-man.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Hey there, what is your name?');
    if(!myName || myName === null) {
        setUserName();
    } else {
     localStorage.setItem('name' , myName);
     myHeading.innerHTML = 'Hi ' + myName + '! I am Sung';
    }
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hi ' + storedName + '! I am Sung';
}

myButton.onclick = function() {
    setUserName();
}