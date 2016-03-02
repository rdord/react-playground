var Button = React.createClass({
  buttonClickHandler: function() {
    this.props.mainClickHandler(this.props.mainIncrement);
  },
  render: function() {
    return <button onClick={this.buttonClickHandler}>+{this.props.mainIncrement}</button>;
  }
});

var Results = React.createClass({
  render: function() {
    return <div>{this.props.mainCounter}</div>;
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {counter: 0};
  },
  increseCounter: function(increment) {
    this.setState({counter: this.state.counter + increment});
  },
  render: function() {
    return (
      <div>
        <Button mainClickHandler={this.increseCounter} mainIncrement={1} />
        <Button mainClickHandler={this.increseCounter} mainIncrement={2} />
        <Button mainClickHandler={this.increseCounter} mainIncrement={5} />
        <Results mainCounter={this.state.counter} />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('container'));