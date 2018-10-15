var RandomMessage= React.createClass({



  getInitialState: function () {
    return { message : 'whatsup' };
  },



  onClick: function () {
    var messages = ['test1', 'test2', 'test3'];
    var randomMessage = messages[Math.floor(Math.random() * 3)];

    this.setState({message: randomMessage});
  },



  render: function() {
    return (
      <div>
      <MessageView message={this.state.message} />
      <p><input type="button" onClick={this.onClick} value="choose ur mood" /></p>
      </div>
    );
  }
});

var MessageView = React.createClass({
  render: function() {
    return (
      <p>{ this.props.message } </p>
    );
  }
});


ReactDOM.render(
  <RandomMessage />,
  document.getElementById('greeting-div')
);
