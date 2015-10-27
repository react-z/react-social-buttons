import React from 'react'
import books from '../books'
let { RouteHandler, Link } = require('react-router')

class Home extends React.Component {

  constructor() {
    super()
    this.state = { books: books  }
  }

  render() {

    let bookList = this.state.books.map( (b, i) => {

      return (
        <div className="section book">
          <div className="container">
            <Link to='book' params={ { title: b.title } }>
              <h4 className="title">{b.title}</h4>
            </Link>
          </div>
        </div>
      );

    });

    return (

      <div id="home">  
        { bookList }
      </div>

    )

  }

}

module.exports = Home