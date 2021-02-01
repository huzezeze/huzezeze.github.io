// js的注释方法与c java相同
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/gir.jpg')
    }else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('输入');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }

}
myButton.onclick = function(){
    setUserName();
}

