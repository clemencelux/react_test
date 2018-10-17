var RandomMessage= React.createClass({



  getInitialState: function () {
    return { message : '' };
  },



  onClick: function () {

    var messages = ['Dark', 'Defensive', 'Delusional','Demented', 'Depressed', 'Determined','Devious', 'Dirty', 'Disappointed','Discontent', 'Ditzy', 'Dorky','Drained', 'Drunk'];

    var randomMessage = messages[Math.floor(Math.random() * 14)];

    this.setState({message: randomMessage});
  },



  render: function() {
    return (
      <div>
      <MessageView message={this.state.message} />
      <p><input  type="button" onClick={this.onClick} value="choose ur mood" /></p>
      </div>
    );
  }
});

var MessageView = React.createClass({
  render: function() {
    return (
      <h6>{ this.props.message } </h6>
    );
  }
});


ReactDOM.render(
  <RandomMessage />,
  document.getElementById('mood')
);
