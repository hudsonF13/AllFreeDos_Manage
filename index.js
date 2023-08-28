const mainHTML = document.getElementById("main");

const divNavigationMobile = document.getElementById("divNavigationMobile");
const buttonShowNavigationMobile = document.getElementById("showNavigationMobile");
const buttonExitNavigationMobile = document.getElementById("exitNavigationMobile");

const buttoniWantHeader = document.getElementById("iWantHeader");
const buttoniWantIntro = document.getElementById("iWantIntro");
const buttoniWantFinalCall = document.getElementById("iWantFinalCall");
const buttoniWantDivFriends = document.getElementById("iWantDivFriends");

const buttonChangeForFirstPerson = document.getElementById("firstPerson");
const superXandao = document.getElementById("superXandao");
const buttonChangeForSecondPerson = document.getElementById("secondPerson");
const homiSereio = document.getElementById("homiSereio");
const buttonChangeForThirdPerson = document.getElementById("thirdPerson");
const diguinhoBaleia = document.getElementById("diguinhoBaleia");

const inputEmail = document.getElementById("email");
const buttonUpDateEmail = document.getElementById("buttonUpDateEmail");
const resultEmailVerification = document.getElementById("resultEmailVerification");

const inputEmailMobile = document.getElementById("emailMobile");
const buttonUpDateEmailMobile = document.getElementById("buttonUpDateEmailMobile");
const resultEmailVerificationMobile = document.getElementById("resultEmailVerificationMobile");

const iWantSubscribe = document.getElementById("iWantSubscribe");
const divThanksForSubscribe = document.getElementById("thanksForSubscribe");

function showDivNavigationMobile() {
    divNavigationMobile.style.display = "flex";
}

function closeDivNavigationMobile() {
    divNavigationMobile.style.display = "none";
}

function iWant() {
    window.open("https://github.com/hudsonF13");
};

buttonChangeForFirstPerson.classList.add("activeChangePersonButton");

function changePeopleOne() {
    homiSereio.style.display = "none";
    diguinhoBaleia.style.display = "none";
    superXandao.style.display = "flex";
    buttonChangeForSecondPerson.classList.remove("activeChangePersonButton");
    buttonChangeForThirdPerson.classList.remove("activeChangePersonButton");
    buttonChangeForFirstPerson.classList.add("activeChangePersonButton")    
};

function changePeopleTwo() {
    superXandao.style.display = "none";
    diguinhoBaleia.style.display = "none";
    homiSereio.style.display = "flex";
    buttonChangeForFirstPerson.classList.remove("activeChangePersonButton");  
    buttonChangeForThirdPerson.classList.remove("activeChangePersonButton");
    buttonChangeForSecondPerson.classList.add("activeChangePersonButton")
};

function changePeopleThree() {
    superXandao.style.display = "none";
    homiSereio.style.display = "none";
    diguinhoBaleia.style.display = "flex";
    buttonChangeForFirstPerson.classList.remove("activeChangePersonButton");
    buttonChangeForSecondPerson.classList.remove("activeChangePersonButton");
    buttonChangeForThirdPerson.classList.add("activeChangePersonButton")
};

function emailValidation() {
    let email = inputEmail.value;
    if (email == "") {
        resultEmailVerification.innerText = "Email inválido";
        inputEmail.classList.add("invalidEmail");
    } else {
        resultEmailVerification.innerText = "";
        inputEmail.classList.remove("invalidEmail");
        divThanksForSubscribe.style.display = "flex";
    }
};

function emailValidationMobile() {
    let email = inputEmailMobile.value;
    if (email == "") {
        resultEmailVerificationMobile.innerText = "Email inválido";
        inputEmailMobile.classList.add("invalidEmail");
    } else {
        resultEmailVerificationMobile.innerText = "";
        inputEmailMobile.classList.remove("invalidEmail");
        divThanksForSubscribe.style.display = "flex";
    }
};

buttonShowNavigationMobile.addEventListener("click", showDivNavigationMobile);
buttonExitNavigationMobile.addEventListener("click", closeDivNavigationMobile);
mainHTML.addEventListener("click", closeDivNavigationMobile);

buttonChangeForFirstPerson.addEventListener("click", changePeopleOne);
buttonChangeForSecondPerson.addEventListener("click", changePeopleTwo);
buttonChangeForThirdPerson.addEventListener("click", changePeopleThree);

buttoniWantHeader.addEventListener("click", iWant);
buttoniWantIntro.addEventListener("click", iWant);
buttoniWantFinalCall.addEventListener("click", iWant);
buttoniWantDivFriends.addEventListener("click", iWant);
iWantSubscribe.addEventListener("click", iWant);

buttonUpDateEmail.addEventListener("click", emailValidation);
buttonUpDateEmailMobile.addEventListener("click", emailValidationMobile);