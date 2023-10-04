class WelcomeHome extends React.Component<{name: string},{}> {
  componentDidMount() {
    console.log("Just loaded");
  }
  componentWillUnmount() {
    console.log("Goodbye!");
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
