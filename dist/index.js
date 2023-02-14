const body = document.querySelector('body');
const cardsContainer = document.querySelector('.cards-container');
const modalOverlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-container');
const addBookButton = document.querySelector('#add-book');
const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#book-author');
const pagesInput = document.querySelector('#book-pages');
const readCheackbox = document.querySelector('#checkbox-rect');
const formBook = document.querySelector('#book-form');
const myLibrary = [];
function Book({ title, author, numberOfPages, read }) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}
function addBook() {
    const bookData = new Book({
        title: titleInput.value,
        author: authorInput.value,
        numberOfPages: parseInt(pagesInput.value),
        read: readCheackbox.checked,
    });
    myLibrary.push(bookData);
}
function changeReadButton(readButton, read) {
    if (!read) {
        readButton.classList.add('not-read');
        readButton.innerText = 'Not read';
        return;
    }
    readButton.classList.remove('not-read');
    readButton.innerText = 'Read';
}
function showModal() {
    modalOverlay.classList.toggle('show-modal');
    body.classList.toggle('overflow-hidden');
}
function createCardElement({ title, author, numberOfPages, read }, index) {
    const card = document.createElement('div');
    const titleBook = document.createElement('p');
    const authorBook = document.createElement('p');
    const pagesBook = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    card.classList.add('card-container');
    buttonGroup.classList.add('button-group');
    readButton.classList.add('btn');
    removeButton.classList.add('btn');
    card.setAttribute('data-index', `${index}`);
    readButton.setAttribute('id', 'read-button');
    removeButton.setAttribute('id', 'remove-button');
    titleBook.innerText = title;
    authorBook.innerText = author;
    pagesBook.innerText = `${numberOfPages} pages`;
    removeButton.innerText = 'Remove';
    readButton.innerText = read ? 'Read' : 'Not read';
    if (!read) {
        readButton.classList.add('not-read');
    }
    readButton.addEventListener('click', () => {
        if (read) {
            read = false;
        }
        else {
            read = true;
        }
        changeReadButton(readButton, read);
    });
    removeButton.addEventListener('click', () => {
        card.remove();
        myLibrary.splice(parseInt(card.getAttribute('data-index')), 1);
    });
    buttonGroup.appendChild(readButton);
    buttonGroup.appendChild(removeButton);
    card.appendChild(titleBook);
    card.appendChild(authorBook);
    card.appendChild(pagesBook);
    card.appendChild(buttonGroup);
    cardsContainer.appendChild(card);
}
addBookButton.addEventListener('click', showModal);
modalOverlay.addEventListener('click', () => {
    showModal();
});
modalContainer.addEventListener('click', (event) => event.stopPropagation());
formBook.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook();
    myLibrary.map(() => {
        if (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }
    });
    myLibrary.map((book, index) => {
        createCardElement(book, index);
    });
    showModal();
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readCheackbox.checked = false;
    return false;
});
export {};
//# sourceMappingURL=index.js.map