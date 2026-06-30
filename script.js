const btn = document.getElementById("btn")

const api = "https://api.animechan.io/v1/quotes/random"

const quote = document.getElementById("quote");

const authoranime = document.getElementById("authoranime")

function getQuote() {
    fetch(api)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(JSON.stringify(data, null, 2))
        const content = data.data.content;
        const author = data.data.character.name;
        const anime = data.data.anime.name;
        quote.innerText = content || "NO QUOTE FOUND";
        authoranime.innerText = author && anime ? `-${author} | -${anime}` : "NOTHING YET";
    })
    .catch((error) => {console.log(`E:${error}`)})
    
}

btn.addEventListener("click", getQuote)

