class Welcome extends React.Component {
    render() {
      return (<Main />);
    }
  }
  
var Main = createReactClass({
    render() {
        return (
            <div>
                <BootstrapContainer />
            </div>
        )
    }
});
