import React from 'react'
import books from '../books'
import SocialButtons from './SocialButtons'
let { RouteHandler, Link } = require('react-router')

class Book extends React.Component {

  constructor() {
    super()
    let book = {id: '', title: '', extract: ''}
    this.state = { book: book}
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() { 

    return (
      <div className="book">

        <Link to='home'>
          <h3 className="title">home</h3>
        </Link>      

        <div className="container">

          <SocialButtons />
          <h3 className="title">{this.state.book.title}</h3>
          <h3 className="author">{this.state.book.author}</h3>
        </div>

      </div>
    );

  }
}

module.exports = Book