let game = document.getElementById("game")
let number_of_cells = document.getElementById("number_of_cells")
let create_game_button = document.getElementById("create_game")

create_grid = (number_of_cells) => {
    game.style.setProperty = "grid";
    game.style.setProperty = `grid-template-rows: repeat(${number_of_cells}, 1fr)`;
    game.style.setProperty = `grid-template-columns: repeat(${number_of_cells}, 1fr)`;
    for (let y = 0; y < number_of_cells; y++) {
        for (let x = 0; x < number_of_cells; x++) {
            game.appendChild(document.createElement("div"));
        };
    };
};

create_game_button.addEventListener("click", (e) => {
    create_grid(parseInt(number_of_cells.value));
});