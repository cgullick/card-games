import React from 'react';
import { connect } from 'react-redux';
import { Card } from './CardComponents';
import { flipCard, swapCard } from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
    flipCard: (payload) => flipCard(dispatch, payload),
    swapCard: (payload) => swapCard(dispatch, payload)
  });

class DisplayCard extends React.Component {
    handleCardClick() {
        if (this.props.player === 'player') {
            if (this.props.game.replacementCard && this.props.game.turn.type === 'CARD_REPLACEMENT') {
                const payload = {
                    index: this.props.index,
                    player: this.props.player
                }
                this.props.swapCard(payload);
            } else if (this.props.game.turn.index < 3) {
                const payload = {
                    index: this.props.index,
                    player: this.props.player
                }
                this.props.flipCard(payload);
            }
        }
    }
    render() {
        return (
            <>
                 {this.props.card.faceDown ?
                    <div className="face-down-card" onClick={() => this.handleCardClick()}>
                    </div>
                :
                    <div className="face-up-card">
                        <svg className="picked-card" onClick={() => this.handleCardClick()}>
                            <Card suit={this.props.card.suit} rank={this.props.card.rank}
                                cardWidth="100" cardHeight="140" cardOffset="100"
                                selectionHeight="20" xOffset="0" yOffset="0"
                            />
                        </svg>
                    </div>
                }
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(DisplayCard);