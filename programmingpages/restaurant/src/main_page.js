import saltypig from "./saltypig.jpg";

export default function main_page(content_div) {
    content_div.textContent = " ";

    let content_container = document.createElement("div");
    content_container.id = "current_div";

    let headline = document.createElement("h2");
    headline.textContent = ("The Salty Pig!");
    content_container.appendChild(headline);

    const piggy = new Image();
    piggy.src = saltypig;
    piggy.style.width = "20vw";
    content_container.appendChild(piggy);

    let first_paragraph = document.createElement("p");
    first_paragraph.textContent = `The Best Carolina Barbecue West of the Outer 
        Banks!`
    content_container.appendChild(first_paragraph);

    let explanation_of_page = document.createElement("p");
    explanation_of_page.textContent = (
        `This page - and the three red buttons - are created using only Javascript,
        except for a small amount of HTML to create the page skeleton. Then, using
        modules and webpack, clicking the red buttons dynamically generates the chosen
        pages using JS and 'imports'.`
    )
    content_container.appendChild(explanation_of_page);

    content_div.appendChild(content_container);

    return content_div;
};