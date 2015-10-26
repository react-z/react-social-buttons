import React from 'react'

export default class TwitterButton extends React.Component{

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
    var twitterbutton = React.findDOMNode(this.refs.twitterbutton)
    var twitterscript = document.createElement("script")
    twitterscript.src = "//platform.twitter.com/widgets.js"
    twitterscript.id = 'twitter-wjs'
    twitterscript.onload = this.renderWidget.bind(this)
    twitterbutton.parentNode.appendChild(twitterscript)

    this.setState({initalized: true });
  }

  componentWillUnmount(){
    let elem = document.getElementById("twitter-wjs")
    if(elem !== undefined){
      //elem.parentNode.removeChild(elem);
    }
  }

  renderWidget(){
    if(this.props.type == "share"){
      twttr.widgets.createShareButton(
        this.props.url,
        React.findDOMNode(this.refs.twitterbutton), { text: this.props.text }
      );
    }
  }

  render(){
    return <div ref="twitterbutton" />
  }
}