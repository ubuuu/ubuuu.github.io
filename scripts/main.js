function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/battlefield.jpg') {
        myImage.setAttribute ('src','images/battlefield2.jpg');
    } else {
        myImage.setAttribute ('src','images/battlefield.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Planes are cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Planes are cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

