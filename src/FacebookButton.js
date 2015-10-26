import React from 'react'

export default class FacebookButton extends React.Component{

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

    let fbbutton = React.findDOMNode(this.refs.fbbutton)
    let fbscript = document.createElement('script')
    fbscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=230650050380161'
    fbscript.id = 'facebook-jssdk'
    fbscript.onload = this.renderWidget.bind(this)
    fbbutton.parentNode.appendChild(fbscript)

    this.setState({initalized: true });
  }

  componentWillUnmount(){
    let elem = document.getElementById('facebook-jssdk')
    if(elem !== undefined){
      //elem.parentNode.removeChild(elem);
    }
  }

  renderWidget(){
    if(this.props.type == "share"){
      
      FB.XFBML.parse(
        React.findDOMNode(this.refs.fbbutton)
      );
    }
  }

  render(){
    return (
      <div ref="fbbutton" className="fb-like" data-href={this.props.url} data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
    );

  }
}