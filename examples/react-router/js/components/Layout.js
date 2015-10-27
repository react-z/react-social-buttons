import React from 'react/addons'

let TransitionGroup = React.addons.CSSTransitionGroup;
let { RouteHandler, Link } = require('react-router')

class Layout extends React.Component {

  constructor() {
    super()
    this.state = {};
  }

  render() {

    return (

      <div id="main">

        <div className="content">

          <TransitionGroup component="div" transitionName="page-transition">
            <RouteHandler {...this.props} />
          </TransitionGroup>
          {/* child routes show up here */}
        </div>

      </div>

    );
  }

}


module.exports = Layout