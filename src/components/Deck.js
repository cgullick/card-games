import React from 'react';
import { connect } from 'react-redux';
import { drawCard, chooseUpCard }from '../actions/actions';
import { Card } from './CardComponents';


const mapStateToProps = (state) => {
    return {
      game: state.game
    }
}

const mapDispatchToProps = (dispatch) => ({
    drawCard: () => drawCard(dispatch),
    chooseUpCard: (payload) => chooseUpCard(dispatch, payload)
});

class Deck extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="deck-container" onClick={() => this.props.drawCard()}>
                    <h2>Deck</h2>
                </div>
                {this.props.game.upCard ?
                    <svg className={this.props.game.replacementCard ? 'picked-card choosen' : 'picked-card'} onClick={() => this.props.chooseUpCard({ card: this.props.game.upCard, player: 'player' })}>
                        <Card suit={this.props.game.upCard.suit} rank={this.props.game.upCard.rank}
                            cardWidth="100" cardHeight="140" cardOffset="100"
                            selectionHeight="20" xOffset="0" yOffset="0"
                        />
                    </svg>
                :
                    ''
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);