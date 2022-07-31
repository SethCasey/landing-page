const slideshow = document.getElementById("slideshow");
const nodelist_of_slideshow_children = slideshow.children;
const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
let array_of_children = Array.from(nodelist_of_slideshow_children);
let current_slide = 0;
const slideshow_navigation = document.getElementById("slideshow_navigation")
let array_of_nav_indicators = [];

array_of_children.forEach(element => {
    element.classList.add("hidden");
});


const update_navigation_background = (picture_number) => {
    if (array_of_nav_indicators[picture_number].classList.contains("selected")) {
        array_of_nav_indicators[picture_number].classList.remove("selected")
    } else {
        array_of_nav_indicators[picture_number].classList.add("selected");
    };
};

const create_navigation = (array_of_children) => {
    for (let x = 0; x < array_of_children.length; x++) {
        let nav_indicator = document.createElement("div");
        nav_indicator.classList.add("dot");
        nav_indicator.setAttribute("id", `nav`+`${x}`);
        navigation_event_listener(nav_indicator, x);
        array_of_nav_indicators.push(nav_indicator);
        slideshow_navigation.appendChild(nav_indicator);
        slideshow_navigation.style.gap = `calc(20vw/${array_of_children.length})`;
    };
};

const navigation_event_listener = (nav_dot_element, index) => {
    nav_dot_element.addEventListener("click", (e) => {
        array_of_children[current_slide].classList.add("hidden");
        update_navigation_background(current_slide);
        current_slide = index;
        array_of_children[current_slide].classList.remove("hidden");
        update_navigation_background(current_slide);
    });
};

const hide_or_show = (option, array_of_children) => {
    array_of_children[current_slide].classList.add("hidden");
    update_navigation_background(current_slide);
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
    update_navigation_background(current_slide);
};

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

// start the page with the first slide shown
array_of_children[0].classList.remove("hidden");

create_navigation(array_of_children);
update_navigation_background(current_slide);