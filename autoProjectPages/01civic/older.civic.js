// the other iteration, hidden style, will not allow a clear, simple implementation
// of "sliding" the images into and out of view. To do so, I should implement a
// translation or transformation, and have all of them inside the #slideshow div,
// but overflow hidden, and positioning based on x position.
// then I can manipulate the x position to move them in and out of view
const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");

let slideshow = document.getElementById("slideshow");
let slides = Array.from(slideshow.children);
let current_slide = 0;
let timer;

const navIndicatorArray = [];
const slideshowNavigation = document.getElementById("slideshow_navigation");

function navEventListener (element, arrayOfNavIndicators, index) {
    element.addEventListener("click", (e) => {
        updateNavDisplay(arrayOfNavIndicators, current_slide);
        clearTimeout(timer);
        goToSlide(index);
        loopTimer();
        updateNavDisplay(arrayOfNavIndicators, current_slide);
    });
};

function createNavigation (array_of_slides) {
    for (let x = 0; x < array_of_slides.length; x++) {
        let navDot = document.createElement("div");
        navDot.classList.add("dot");
        navDot.setAttribute("id", `nav`+`${x}`);
        navEventListener(navDot, navIndicatorArray, x);
        navIndicatorArray.push(navDot);
        slideshowNavigation.appendChild(navDot);
        slideshowNavigation.style.gap = `calc(20vw/${slides.length})`;
    }
}

left_arrow.addEventListener("click", (e) => {
    advanceSlide(-1);
    clearTimeout(timer);
    loopTimer();
});
right_arrow.addEventListener("click", (e) => {
    advanceSlide(+1);
    clearTimeout(timer);
    loopTimer();
});

function advanceSlide (addOrSub) {
    updateNavDisplay(navIndicatorArray, current_slide);
    // current_slide = current_slide + addOrSub;
    // the below function will not allow an out-of-array selection, nor will it wrap around
    if (current_slide + addOrSub >= slides.length) {
        current_slide = 0;
    } else if (current_slide + addOrSub < 0) {
        current_slide = slides.length-1;
    } else {
        current_slide = current_slide + addOrSub;
    };
    updateNavDisplay(navIndicatorArray, current_slide);
    slides[current_slide].scrollIntoView({behavior: 'smooth', block: "center"});
};

function goToSlide (slideIndex) {
    current_slide = slideIndex;
    slides[current_slide].scrollIntoView({behavior: "smooth", block: "center"});
};

function updateNavDisplay (navIndicatorArray, slideIndex) {
    if (navIndicatorArray[slideIndex].classList.contains("selected")) {
        navIndicatorArray[slideIndex].classList.remove("selected");
    } else {
        navIndicatorArray[slideIndex].classList.add("selected")
    };
};

function loopTimer() {
    timer = setTimeout(function () {
        advanceSlide(+1);
        loopTimer();
    }, 5000);
};

createNavigation(slides);
updateNavDisplay(navIndicatorArray, current_slide);
loopTimer();