const signUp = document.getElementById("signup-button");
const signUp2 = document.getElementById("signup-button2");

const form = document.getElementById("form");

const popupMessage = document.getElementById("popupMessage");

const container = document.querySelector(".container-signUp");
const errorMsg = document.getElementById("error");

const close = document.getElementById("exit");

signUp.addEventListener("click", () => {
    container.style.opacity = "1";
    container.style.visibility = "visible";
    container.style.display = "inline-block";
    signUp.style.display = "none";
    
})


signUp2.addEventListener("click", () => {
    container.style.opacity = "1";
    container.style.visibility = "visible";
    container.style.display = "inline-block";
    signUp.style.display = "none";
})

close.addEventListener("click", () => {
    container.style.opacity = "0";
    container.style.visibility = "hidden";
    container.style.display = "none";
    
})

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            container.style.visibility = "visible";
            container.style.opacity = "1";
            container.style.display = "inline-block";
   
        },5000)
});

const studyMaterial = document.getElementById("study-material");
const yourProgress = document.getElementById("your-progress");

function handleSubmit(event) {
    event.preventDefault(); 
    setTimeout(() => {
        container.style.opacity = "0";
        container.style.visibility = "hidden";
        container.style.display = "none";

        popupMessage.style.display = "flex";
        popupMessage.style.visibility = "visible";
        studyMaterial.classList.remove("invisible");
        yourProgress.classList.remove("invisible");
        setTimeout(() => {
            popupMessage.style.display = "none";
            popupMessage.style.visibility = "hidden";
        }, 3000);
    }, 1000);
}

form.addEventListener("submit", handleSubmit);



