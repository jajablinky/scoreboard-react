const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => {
  console.log(props.removePlayer)
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }
      >✖</button>
      { props.name }
    </span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  state = {
    score: 0,
  };

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.state.score + 1,
    }));
  };

  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.state.score - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Guil",
                id: 0
              },
              {
                name: "Treasure",
                id: 1
              },
              {
                name: "Ashley",
                id: 2
              },
              {
                name: "James",
                id: 3
              }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return{
                players:    prevState.players.filter( p => p.id !== id )
            };
        });
    }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="My Scoreboard"
          totalPlayers={this.state.players.length}
        />

        {/*PLAYERS LIST*/}
        {this.state.players.map(player => (
          <Player name={player.name} id={player.id} key={player.id.toString()} removePlayer={this.handleRemovePlayer}/>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);