export default async function getGif(searchTerm, giphyKey) {
    let apiKey;
    let textFromKey;
    let key;
    if (giphyKey) {
        key = giphyKey;
    } else {
        apiKey = await fetch("./giphysecrets.txt");
        textFromKey = apiKey.text();
        key = textFromKey.toString();
    };
    

    let result = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`, {mode: "cors"})
    return result.json();

    

    // none of the above works, wtf?!
    // time to sleep, tomorrow.
};