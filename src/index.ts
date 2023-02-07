function Book(
  title: string,
  author: string,
  numberPages: number,
  read: boolean
) {
  this.title = title
  this.author = author
  this.numberPages = numberPages
  this.read = read
  this.info = () =>
    `${this.title}, ${this.author}, ${this.numberPages} pages, ${
      this.read ? 'Readed' : 'No readed yet'
    }`
}

const redRising: {
  title: string
  author: string
  numberPages: number
  read: boolean
  info: () => void
} = new Book('Red Rising', 'Pierce Brown', 382, false)

console.log(redRising.info())
