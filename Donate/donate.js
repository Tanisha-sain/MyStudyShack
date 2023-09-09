const donateButton = document.getElementById("donate-button");
const donateForm = document.getElementById("donate-form");
donateButton.addEventListener("click",() => {
    donateForm.style.visibility = "visible";
})


const close = document.getElementById("exit");
close.addEventListener("click", () => {
    donateForm.style.visibility = "hidden";
})


const submitButton = document.getElementById("submit-button");
const popupMessage = document.getElementById("popupMessage");
const parent = document.getElementById("parent");

function handleSubmit(event) {
    event.preventDefault(); 
    setTimeout(() => {
        donateForm.style.visibility = "hidden";
        parent.style.visibility = "hidden";
        popupMessage.style.display = "flex";
        popupMessage.style.visibility = "visible";
        setTimeout(() => {
            popupMessage.style.display = "none";
            popupMessage.style.visibility = "hidden";
        }, 4000);
    }, 100);
}

donateForm.addEventListener("submit", handleSubmit);
