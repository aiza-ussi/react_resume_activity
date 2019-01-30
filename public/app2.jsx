var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'User',
      message: 'Thank you for visiting this website.'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;

    this.setState({
      name: name
    });
  },

  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}. This is 8081.</h1>
        <p>Wow, this really works! {message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Joshua';
var message = 'This is the other message.'

ReactDOM.render(
  <Greeter name = {firstName} message = {message}/>,
  document.getElementById('app')
);
