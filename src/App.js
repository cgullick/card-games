import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Hand, Card, CardBack } from 'react-deck-o-cards';
import Deck from './components/Deck';
import './App.css';
import Player from './components/Player';
import { deal } from './actions/actions';

const mapDispatchToProps = (dispatch) => ({
  deal: (payload) => deal(dispatch, payload)
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealButtonDisabled: false
    }
  }
  handleDealButtonClick() {
    this.props.deal();
    this.setState({dealButtonDisabled: true});
  }
  render() {
    return (
      <div className="App">
        <button  className="btn btn-primary"
          onClick={() => this.handleDealButtonClick()}
          disabled={this.state.dealButtonDisabled}>
          Deal
        </button>
        <Deck cards={this.props.cards} />
        <div className="container-fluid">
          <div className="row">
            <Player playerName="computer" />
            <Player playerName="player" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
