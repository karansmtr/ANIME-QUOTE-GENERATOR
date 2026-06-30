const btn = document.getElementById("btn")

const api = "https://api.animechan.io/v1/quotes/random"

const quote = document.getElementById("quote");

const authoranime = document.getElementById("authoranime")

let btnclick = true;

function getQuote() {
    fetch(api)
    .then((response) => {
        btn.disabled = true;
        btn.innerHTML = "LOADING..."
        quote.innerHTML = "UPDATING..."
        return response.json()
    })
    .then((data) => {
        console.log(JSON.stringify(data, null, 2))
        const content = data.data.content;
        const author = data.data.character.name;
        const anime = data.data.anime.name;
        quote.innerText = content || "NO QUOTE FOUND";
        authoranime.innerText = author && anime ? `-${author} | -${anime}` : "NOTHING YET";
        btn.disabled = false;
        btn.innerHTML = "GENERATE"
    })
    .catch((error) => {console.log(`E:${error}`)})
    
}

getQuote()

btn.addEventListener("click", getQuote)

