const btnQuote = document.querySelector('#button-quote')
const quoteP = document.querySelector('#quote')
const authorP = document.querySelector('#author')



function generateRandomNumber(min, max) {
    let n = Math.floor(Math.random() * (max - min) + min)
    return n
}

function changeQuote() {
    let index = generateRandomNumber(0, quotesList.length)

    quoteP.innerText = `"${quotesList[index].quote}"`
    authorP.innerText = quotesList[index].author
}

btnQuote.addEventListener('click', changeQuote)

changeQuote();