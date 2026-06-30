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
        const content = data?.data?.content;
        const author = data?.data?.character?.name;
        const anime = data?.data?.anime?.name;
        if(!content){
            quote.innerHTML = " \"SERVER DOWN\" ";
            authoranime.innerText = "SERVER DOWN - TRY IN 5 MINUTES.";
        }
        else{
            quote.innerText = content;
            authoranime.innerText = `-${author} | -${anime}`;
        }
        btn.disabled = false;
        btn.innerHTML = "GENERATE"
    })
    .catch((error) => {
        console.error(error);    
    })
    
}

getQuote()

btn.addEventListener("click", getQuote)

