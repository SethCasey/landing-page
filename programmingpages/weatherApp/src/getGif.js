export default async function getGif(searchTerm) {
    let apiKey = await fetch("./giphysecrets.txt")
    let textFromKey = apiKey.text()
    let key = (await textFromKey).toString();
    

    let result = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`, {mode: "cors"})
    return result.json();

    

    // none of the above works, wtf?!
    // time to sleep, tomorrow.
};