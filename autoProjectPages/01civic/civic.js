const slideshow = document.getElementById("slideshow");
const nodelist_of_slideshow_children = slideshow.children;
const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
let array_of_children = Array.from(nodelist_of_slideshow_children);
let current_slide = 0;

array_of_children.forEach(element => {
    element.classList.add("hidden");
});

array_of_children[0].classList.remove("hidden");

// i didn't finish this function, but! How will I create the nav elements
// dynamically acc. to the number of slides (easy), and make them selectable (hm),
// then add or remove the show_indicator class as the respective element is shown?
// assign an ID acording to the array_of_children[] index number + word nav?
// setAttr("id", `nav`+`${array_of_children[x].id}) ??????
const create_navigation = (array_of_children) => {
    array_of_children.forEach(element => {
        let nav_indicator = document.createElement("div");
        nav_indicator.classList.add("")
    })
}

const hide_or_show = (option, array_of_children) => {
    array_of_children[current_slide].classList.add("hidden");
    if (option === "increment") {
        if (current_slide === array_of_children.length-1) {
            current_slide = 0;
        } else {
            current_slide++;
        };
    } else if (option === "decrement") {
        if (current_slide === 0) {
            current_slide = array_of_children.length-1;
        } else {
            current_slide--;
        };
    }
    array_of_children[current_slide].classList.remove("hidden");
}

left_arrow.addEventListener("click", (e) => {
    // add in pause function, and intermediate class to create a sliding effect
    // with CSS and transform: transition() and a classList.add() and classList.remove()
    // see https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

    // also, think about refactoring with increment/decrement options in function
    // to handle current slide increment/decrement. Keyword option should be easy enough
    hide_or_show("decrement", array_of_children);
});

right_arrow.addEventListener("click", (e) => {
    hide_or_show("increment", array_of_children);
});