var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    var component = this;
    $.get('https://api.github.com/users/' + this.props.mainLogin, function(data) {
      component.setState(data);
    });
  },
	render: function() {
    if(this.state.init)
      return false;
		return (
      <section>
        <small><a href={this.state.html_url}>@{this.state.login}</a></small>
        <br />
        <img src={this.state.avatar_url} width="80" />
        <br />
      </section>
		);
	}
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Card mainLogin="antonsvetin" />
        <Card mainLogin="mitjacotic" />
        <Card mainLogin="janez-svetin" />
        <Card mainLogin="MatejBivr" />
        <Card mainLogin="rqloud" />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('container'));