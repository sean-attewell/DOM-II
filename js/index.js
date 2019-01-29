// Your code goes here

// Logo heading goes green on mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => logoHeading.style.color = 'green');

// Body background goes aqua on any keypress
document.body.addEventListener('keydown', () => document.body.style.backgroundColor = 'aqua');

// Logo heading increases to 50px if you scroll on mouseover
logoHeading.addEventListener('wheel', wheelFunction);

function wheelFunction() {
    logoHeading.style.fontSize = "50px";
}

// drag ***********************************
const destinationPic = document.querySelector('.destinationPic');

destinationPic.addEventListener('drag', dragFunction);

function dragFunction() {
    destinationPic.width = destinationPic.width + 2;
}


// On load of second bus image in the footer, add text to footer p

document.querySelector(".secondBus").addEventListener("load", onBusLoad);

function onBusLoad() {
    document.querySelector(".secondBusP").innerHTML = "Second bus image loaded!";
}

// blur + focus. Adds 'blurred' class to top paragraph when blur.
// removes it when focus.
topParagraph = document.querySelector("#topParagraph")

function blurFunc() {
    topParagraph.classList.add('blurred');
  }
  
  function focusFunc() {
    topParagraph.classList.remove('blurred');
  }
  
window.addEventListener('blur', blurFunc);
window.addEventListener('focus', focusFunc);


// Window resizing counter

let initCount = 0

function resizeFunc() {
    let resizeCount = initCount += 1;
    document.querySelector(".resizeCount").innerHTML = `Number of resizes: ${resizeCount}`;
}

window.addEventListener("resize", resizeFunc);


// Scroll counter

let initScroll = 0;

function scrollFunc() {
    let scrollCount = initScroll += 1;
    document.querySelector(".scrollCount").innerHTML = `Number of scrolls: ${scrollCount}`;
}

window.addEventListener("scroll", scrollFunc);


// Select text in the input box and it turns Let's Go! title red

document.querySelector("#myText").addEventListener("select", selectFunc);

function selectFunc() {
document.querySelector(".letsGo").style.color = 'red';
}

// On dblclick of the first bus picture, add the class 'disspear'
// to the image which is formatted to 'display: none'

firstBus = document.querySelector(".firstBus")

function firstBusFunc() {
    firstBus.classList.add('dissapear');
  }
  
firstBus.addEventListener('dblclick', firstBusFunc);


// copy event - If you copy text in the input field, you get an
// alert to say that you copied text.

document.querySelector("#myText").addEventListener("copy", copyFunc);

function copyFunc() {
  alert("You copied text!");
}


//

const links = document.querySelectorAll('a[href="#"]');

links[0].addEventListener('click', eventObject => {
  eventObject.preventDefault();
});

links[1].addEventListener('click', eventObject => {
    eventObject.preventDefault();
  });

links[2].addEventListener('click', eventObject => {
  eventObject.preventDefault();
});  

links[3].addEventListener('click', eventObject => {
    eventObject.preventDefault();
  });

  