'use strict';

var RandomMessage = React.createClass({
  displayName: 'RandomMessage',


  getInitialState: function getInitialState() {
    return { message: 'whatsup' };
  },

  onClick: function onClick() {
    var messages = ['test1', 'test2', 'test3'];
    var randomMessage = messages[Math.floor(Math.random() * 3)];

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
        React.createElement('input', { type: 'button', onClick: this.onClick, value: 'choose ur mood' })
      )
    );
  }
});

var MessageView = React.createClass({
  displayName: 'MessageView',

  render: function render() {
    return React.createElement(
      'p',
      null,
      this.props.message,
      ' '
    );
  }
});

ReactDOM.render(React.createElement(RandomMessage, null), document.getElementById('greeting-div'));