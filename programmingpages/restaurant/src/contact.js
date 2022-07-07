export default function contact(content_div) {
    // instead of DELETING and ADDING content, I should probably
    // just make it HIDDEN and UNHIDDEN
    content_div.textContent = " ";
    let randomStuff = document.createElement("p");
    randomStuff.textContent = ("HOT DIGGITY DOG!");
    content_div.appendChild(randomStuff);

    return content_div;
}