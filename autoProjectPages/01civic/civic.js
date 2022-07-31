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
    current_slide = current_slide + addOrSub;
    // the below function will not allow an out-of-array selection, nor will it wrap around
    current_slide = Math.min(Math.max(current_slide,0), slides.length-1);
    slides[current_slide].scrollIntoView({behavior: 'smooth', block: "end"});
};

function loopTimer() {
    timer = setTimeout(function () {
        advanceSlide(+1);
        loopTimer();
    }, 5000);
};

loopTimer();