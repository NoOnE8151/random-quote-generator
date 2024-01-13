//defining elements
const quoteBox = document.querySelector('.quoteBox');
const quote = document.querySelector('#quote');
const generateBtn = document.querySelector('#generateBtn');

//fetching random quote from api
const fetchQuote = () => {
  const apiEndpoint = "https://api.quotable.io/random";

  fetch(apiEndpoint)
  .then(res => {
    if(!res.ok) {
      quote.innerHTML = `<i>Something when wrong while fetching a random quote. Status code ${res.status}</i>`
    } else {
      return res.json()
    }
  })
  .then(randomQuote => {
    quoteBox.classList.toggle("quoteBoxShake");
    quote.innerHTML = randomQuote.content;
    setTimeout( () => {
      quoteBox.classList.toggle("quoteBoxShake");
    }, 500)
  })
}

//adding click event on generate button
generateBtn.addEventListener("click", () => {
  quote.innerHTML = "<i> getting quote... </i>";
  setTimeout( () => {
    fetchQuote();
  }, 1000);
})
