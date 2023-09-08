let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.addEventListener("click", () => {
    let boxes = [...document.querySelectorAll('.container-pdf .box-container .box')];
    for (var i = currentItem; i < currentItem + 2; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 2;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
})



let loadMoreVideos = document.querySelector('#load-more-videos');
let currentVideoItem = 2;

loadMoreVideos.addEventListener("click", () => {
    let boxes2 = [...document.querySelectorAll('.container-vid .box-container .box')];
    for (var i = currentVideoItem; i < currentVideoItem + 2; i++) {
        boxes2[i].style.display = 'inline-block';
    }
    currentVideoItem += 2;

    if (currentVideoItem >= boxes2.length) {
        loadMoreVideos.style.display = 'none';
    }
})

let progressStartValue = -1,
    progressEndValue = 0,
    speed = 90;


let progressStartValue2 = -1,
    progressEndValue2 = 0,
    speed2 = 80;


// let progressEndValue,progressEndValue2;

const submit = document.getElementById("submit-button");
const pdfInput = document.getElementById("pdfs-form");
const vidInput = document.getElementById("videos-form");


form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // let progressEndValue = 0,progressEndValue2 = 0;
    // progressEndValue = 0;
    // progressEndValue2 = 0;
    // someFunction();
    const pdfValue = pdfInput.value;
    const vidValue = vidInput.value;
    if (pdfValue > 8 || vidValue > 6) {
        alert("Enter the pdfs in range 0-8 and videos in range 0-6");
    }
    if (progressEndValue === 0 && progressEndValue2 === 0 && pdfValue <= 8 && vidValue <= 6) {
        progressEndValue = parseInt((pdfValue / 8) * 100);
        progressEndValue2 = parseInt((vidValue / 6) * 100);
        someFunction();
    }
});

function someFunction() {
    // let progressStartValue = -1, progressStartValue2 = -1;
    // let speed = 90 , speed2 = 80;


    let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

    let circularProgress2 = document.querySelector(".circular-progress2"),
        progressValue2 = document.querySelector(".progress-value2");

    let progress2 = setInterval(() => {
        progressStartValue2++;

        progressValue2.textContent = `${progressStartValue2}%`
        circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

        if (progressStartValue2 == progressEndValue2) {
            clearInterval(progress2);
        }
    }, speed2);


}

