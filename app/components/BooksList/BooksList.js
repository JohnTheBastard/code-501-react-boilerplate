import React from 'react'

const books = [
  {title: 'Harry Potter', author: 'J.K. Rowling'},
  {title: 'Moby Dick', author: 'Herman Melville'},
  {title: 'Ulysses', author: 'Jame Joyce'},
  {title: 'Farenheit 451', author: 'Ray Bradbury'},
  {title: 'American Gods', author: 'Neil Gaiman'}
]

class BooksList extends React.Component {
  render() {
    return (
      <div className='BooksList'>
        <ul>
          {books.map( (book, ii) =>
            <li key={ii}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}
export default BooksList
