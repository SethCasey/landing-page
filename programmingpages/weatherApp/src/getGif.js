export default async function getGif(searchTerm) {
    async function getApiText() {
        let apiKey = await fetch("./giphysecrets.txt")
        return (await apiKey.text()).toString();
    };
    let key = await getApiText();
    
    async function getGif() {
        let gif = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`)
        return gif.data.images.original.url;
    };

    return await (getGif());

    // none of the above works, wtf?!
    // time to sleep, tomorrow.
};