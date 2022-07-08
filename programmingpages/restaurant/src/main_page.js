import saltypig from "./saltypig.jpg";

export default function main_page(content_div) {
    content_div.textContent = " ";

    let content_container = document.createElement("div");
    content_container.id = "current_div";

    let headline = document.createElement("h2");
    headline.innerHTML = ("The Salty Pig!");
    content_container.appendChild(headline);

    const piggy = new Image();
    piggy.src = saltypig;
    piggy.style.width = "20vw";
    content_container.appendChild(piggy);

    let description_paragraph = document.createElement("p");
    description_paragraph.innerHTML = "The Best Carolina Barbecue West of the Outer Banks!"
    content_container.appendChild(description_paragraph);

    content_div.appendChild(content_container);

    return content_div;
};