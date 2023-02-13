const cardsContainer = document.querySelector('.cards-container')

type bookType = {
  title: string
  author: string
  numberOfPages: number
}

const myLibrary: bookType[] = []

function Book(title: string, author: string, numberOfPages: number) {
  this.title = title
  this.author = author
  this.numberOfPages = numberOfPages
}

myLibrary.push(new Book('The Final Empire', 'Brandon Sanderson', 422))

function createCardElement() {
  const card = document.createElement('div')
  const titleBook = document.createElement('p')
  const authorBook = document.createElement('p')
  const pagesBook = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readButton = document.createElement('button')
  const removeButton = document.createElement('button')

  card.classList.add('card-container')
  buttonGroup.classList.add('button-group')
  readButton.classList.add('btn')
  removeButton.classList.add('btn')

  readButton.setAttribute('id', 'read-button')
  removeButton.setAttribute('id', 'remove-button')

  titleBook.innerText = 'The Final Empire'
  authorBook.innerText = 'Brandon Sanderson'
  pagesBook.innerText = `${422} pages`
  removeButton.innerText = 'Remove'
  readButton.innerText = 'Read'

  buttonGroup.appendChild(readButton)
  buttonGroup.appendChild(removeButton)
  card.appendChild(titleBook)
  card.appendChild(authorBook)
  card.appendChild(pagesBook)
  card.appendChild(buttonGroup)

  cardsContainer.appendChild(card)
}

createCardElement()
