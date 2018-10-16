'use strict';

var RandomMessage = React.createClass({
  displayName: 'RandomMessage',


  getInitialState: function getInitialState() {
    return { message: '' };
  },

  onClick: function onClick() {

    var messages = ['Dark', 'Defensive', 'Delusional', 'Demented', 'Depressed', 'Determined', 'Devious', 'Dirty', 'Disappointed', 'Discontent', 'Ditzy', 'Dorky', 'Drained', 'Drunk'];

    var randomMessage = messages[Math.floor(Math.random() * 14)];

    this.setState({ message: randomMessage });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(MessageView, { message: this.state.message }),
      React.createElement(
        'p',
        null,
        React.createElement('input', { className: 'btn btn-default btn-lg btn-block', type: 'button', onClick: this.onClick, value: 'choose ur mood' })
      )
    );
  }
});

var MessageView = React.createClass({
  displayName: 'MessageView',

  render: function render() {
    return React.createElement(
      'h6',
      null,
      this.props.message,
      ' '
    );
  }
});

ReactDOM.render(React.createElement(RandomMessage, null), document.getElementById('greeting-div'));