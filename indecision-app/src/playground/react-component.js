class Header extends React.Component {
  render() {
      return (
          <div>
              <h1>Indecision App</h1>
              <h2>Put your life in the hands of a computer</h2>
          </div>
      );
  }
}

class Action extends React.Component {
  render() {
      return (
          <div>
              <button>What should i do?</button>
          </div>
      );
  }
}

class Options extends React.Component {
  render() {
      return (
          <div>
              Options
          </div>
      );
  }
}

class AddOption extends React.Component {
  render() {
      return (
          <div>
              AddOption
          </div>
      );
  }
}



const jsx = (
  <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));