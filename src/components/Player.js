import React from 'react';
import { connect } from 'react-redux';
import DisplayCard from './DisplayCard';

const mapStateToProps = (state) => {
    return {
      game: state.game
    }
}

class Player extends React.Component {
    render () {
        return (
            <div className="col-sm-6">
                <h2>{this.props.playerName} - Score: {this.props.game[this.props.playerName].score}</h2>
                {this.props.game[this.props.playerName].hand.length > 0 ?
                    <>
                        <div className="row">
                            <div className="col-sm-12">
                                <DisplayCard
                                    card={this.props.game[this.props.playerName].hand[2]}
                                    index={2}
                                    player={this.props.playerName}
                                    {...this.props}
                                />
                                <DisplayCard
                                    card={this.props.game[this.props.playerName].hand[3]}
                                    index={3}
                                    player={this.props.playerName}
                                    {...this.props}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <DisplayCard
                                    card={this.props.game[this.props.playerName].hand[0]}
                                    index={0}
                                    player={this.props.playerName}
                                    {...this.props}
                                />
                                <DisplayCard
                                    card={this.props.game[this.props.playerName].hand[1]}
                                    index={1}
                                    player={this.props.playerName}
                                    {...this.props}
                                />
                            </div>
                        </div>
                    </>
                :
                    ''
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Player);