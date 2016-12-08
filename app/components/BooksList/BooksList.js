import React from 'react'

class BooksList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      author: '',
      books: [
        {title: 'Harry Potter', author: 'J.K. Rowling'},
        {title: 'Moby Dick', author: 'Herman Melville'},
        {title: 'Ulysses', author: 'Jame Joyce'},
        {title: 'Farenheit 451', author: 'Ray Bradbury'},
        {title: 'American Gods', author: 'Neil Gaiman'}
      ]
    }
  }
  handleSubmit (e) {
    e.preventDefault()  // prevent refresh
    // console.error(e.target)
    const oldBooks = this.state.books
    const newBooks = oldBooks.concat({title: this.state.title, author: this.state.author})
    this.setState({
      title: '',
      author: '',
      books: newBooks
    })

  }
  render() {
    return (
      <div className='BooksList'>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h1>Add a Book</h1>
          <input label='Title' type='text' placeholder='Enter a title'
                 value={this.state.title}
                 onChange={(e) => this.setState({title: e.target.value})} />
          <input label='Author' type='text' placeholder='Book Author'
                 value={this.state.author}
                 onChange={(e) => this.setState({author: e.target.value})} />
          <input type='submit' />
        </form>
        <ul>
          {this.state.books.map( (book, ii) =>
            <li key={ii}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}
export default BooksList
