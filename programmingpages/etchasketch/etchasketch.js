// rewrite the script

// default settings
    // const keyword set to values for defaults (remember capitalized)

const PARENT_ELEMENT = document.getElementById("content");
const COLOR_PICKER = document.getElementById("color_picker");
const BACKGROUND_COLOR_PICKER = document.getElementById("background-color");
const GRIDSIZE_INPUT = document.getElementById("number_of_cells");
const GRIDSIZE_INPUT_DISPLAY = document.getElementById("number_of_cells_value");
const RESET_BUTTON = document.getElementById("reset_grid");
const CREATE_GAME = document.getElementById("create_game");
const DEFAULT_GRID_SIZE = 125;
const DEFAULT_BACKGROUND_COLOR = BACKGROUND_COLOR_PICKER.value;
const DEFAULT_DRAWING_COLOR = COLOR_PICKER.value;
const DEFAULT_WIDEST_LENGTH = "80vh";

let shortest_length_of_screen = DEFAULT_WIDEST_LENGTH;
let color = DEFAULT_DRAWING_COLOR;
let background_color = DEFAULT_BACKGROUND_COLOR;
let grid_size = DEFAULT_GRID_SIZE;
let grid;
let grid_array = [[]];
let mousedown_event = false;

function test_for_screen_size () {
    if(window.innerHeight > window.innerWidth) {
        // set the shortest length for
        shortest_length_of_screen = window.innerWidth;
    } else {
        shortest_length_of_screen = window.innerHeight;
    };
}

function get_user_gridsize(number_of_cells_input = DEFAULT_GRID_SIZE) {
    return grid_size = number_of_cells_input;
};

function create_grid(grid_size) {
    grid = document.createElement("div");
    PARENT_ELEMENT.appendChild(grid);
    grid.setAttribute("id", "grid");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${grid_size.toString()}, calc(${shortest_length_of_screen}/${grid_size.toString()}))`;
    grid.style.gridTemplateRows = `repeat(${grid_size.toString()}, calc(${shortest_length_of_screen}/${grid_size.toString()}))`;
    // if widescreen:
    grid.setAttribute("width", `${shortest_length_of_screen}`);
    grid.setAttribute("height", `${shortest_length_of_screen}`)
    // if portrait-type screen:
    // grid.setBlablabla
    for (let y=0; y<grid_size; y++) {
        console.log(`Creating row ${y}`)
        for (let x=0; x<grid_size; x++) {
            console.log(`Creating cell ${x}${y}`);
            let cell = document.createElement("div");
            grid.appendChild(cell);
            cell.setAttribute("id", `cell${x}${y}`);
            cell.style.width = `calc(${shortest_length_of_screen}/${grid_size}`;
            cell.style.height = `calc(${shortest_length_of_screen}/${grid_size})`;
            cell.style.backgroundColor = background_color;
            color_changing_listener(cell);
            grid_array.push(cell);
        };
    };
    apply_new_color(COLOR_PICKER);
};

function color_changing_listener(cell) {
    cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = color;
    });
};

function apply_new_color(COLOR_PICKER) {
    COLOR_PICKER.addEventListener("input", (e) => {
        color = COLOR_PICKER.value;
    });
    BACKGROUND_COLOR_PICKER.addEventListener("input", (e) => {
        background_color = BACKGROUND_COLOR_PICKER.value;
    })
};

function destroy_game(grid) {
    if (grid) {
        grid.remove();
    } else {
        return console.log("Doesn't exist yet");
    };
};

GRIDSIZE_INPUT.oninput = function() {
    GRIDSIZE_INPUT_DISPLAY.textContent = GRIDSIZE_INPUT.value;
};

CREATE_GAME.addEventListener("click", (e) => {
    destroy_game(grid);
    create_grid(parseInt(GRIDSIZE_INPUT.value));
});

window.onload = () => {
    destroy_game(grid);
    create_grid(grid_size);
}



