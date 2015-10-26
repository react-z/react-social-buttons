import React from 'react'

export default class GoogleButton extends React.Component{

  constructor(props) {
    super(props)
    this.state = { initalized : false }
  }

  componentDidMount(){
    this.init()
  }

  componentWillReceiveProps(nextProps) {  
    this.init()
  }

  init () {
    if(this.state.initalized){
      return
    }

    let gpbutton = React.findDOMNode(this.refs.gpbutton)
    let gpscript = document.createElement('script')
    gpscript.src = '//apis.google.com/js/platform.js'
    gpscript.id = 'gapi'
    gpscript.onload = this.renderWidget.bind(this)
    gpbutton.parentNode.appendChild(gpscript)

    // {"parsetags": "explicit"}
    // you can pass attributes in as key:value pairs in a call to gapi.plusone.render.
    gapi.plusone.render("gplus-button" );

    this.setState({initalized: true });
  }

  componentWillUnmount(){
  }

  renderWidget(){
    if(this.props.type == "share"){
      
      FB.XFBML.parse(
        React.findDOMNode(this.refs.gpbutton)
      );
    }
  }

  render(){
    return (
      <div ref="gpbutton" id='gplus-button' data-href={this.props.url}></div>
    );

  }
}