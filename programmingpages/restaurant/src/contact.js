export default function contact(content_div) {
    // instead of DELETING and ADDING content, I should probably
    // just make it HIDDEN and UNHIDDEN
    content_div.textContent = " ";
    let randomStuff = document.createElement("p");
    randomStuff.textContent = ("This is the contact page!");
    content_div.appendChild(randomStuff);

    return content_div;
}