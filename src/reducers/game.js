import { DRAW_CARD, DEAL, FLIP_CARD, CHOOSE_UP_CARD, SWAP_CARD } from '../constants/actionTypes';
import { newShuffledDeck } from '../cards';

export const statuses = {
    NOT_STARTED: 'Not Started',
    PLAYING: 'Playing',
    WIN: 'Win',
    LOSE: 'Lose'
}

const defaultState = {
    deck: newShuffledDeck(),
    upCard: undefined,
    replacementCard: undefined,
    turn: {
        index: 0,
        player: undefined,
        type: 'REGULAR'
    },
    player: {
        hand: [],
        score: 0
    },
    computer: {
        hand: [],
        score: 0
    },
    playerTotalScore: 0,
    computerTotalScore: 0,
    status: statuses.NOT_STARTED
}

const game = (state = defaultState, action) => {
    switch (action.type) {
        case DEAL:
            let [playerCard1, computerCard1, playerCard2, computerCard2, playerCard3, computerCard3, playerCard4, computerCard4, upCard] = state.deck;
            playerCard1 = { ...playerCard1, faceDown: true };
            playerCard2 = { ...playerCard2, faceDown: true };
            playerCard3 = { ...playerCard3, faceDown: true };
            playerCard4 = { ...playerCard4, faceDown: true };
            computerCard1 = { ...computerCard1, faceDown: true };
            computerCard2 = { ...computerCard2, faceDown: true };
            computerCard3 = { ...computerCard3, faceDown: true };
            computerCard4 = { ...computerCard4, faceDown: true };
            upCard = {...upCard, faceDown: false}

            return {
                ...state,
                deck: state.deck.slice(9),
                upCard: upCard,
                player : {
                    ...state.player,
                    hand: [playerCard1, playerCard2, playerCard3, playerCard4],
                    score: calculatePlayerScore([playerCard1, playerCard2, playerCard3, playerCard4])
                },
                computer: {
                    ...state.computer,
                    hand: [computerCard1, computerCard2, computerCard3, computerCard4],
                    score: calculatePlayerScore([computerCard1, computerCard2, computerCard3, computerCard4])
                },
                turn: {
                    ...state.turn,
                    player: 'player',
                    type: 'REGULAR'
                },
                status: statuses.PLAYING
            }
        case FLIP_CARD:
            const handArr = state[action.payload.player].hand.map((card, index) => {
                if (index === action.payload.index) {
                    return { ...card, faceDown: !card.faceDown };
                }
                return card;
            });
            return {
                ...state,
                turn: {
                    ...state.turn,
                    index: state.turn.index++
                },
                [action.payload.player]: {
                    ...state[action.payload.player],
                    hand: handArr,
                    score: calculatePlayerScore(handArr)
                }
            }
        case DRAW_CARD:
            let [drawnCard] = state.deck;
            drawnCard = { ...drawnCard, faceDown: false };
            return {
                ...state,
                deck: state.deck.slice(1),
                upCard: drawnCard
            }
        case CHOOSE_UP_CARD:
            return {
                ...state,
                replacementCard: action.payload.card,
                turn: {
                    ...state.turn,
                    player: action.payload.player,
                    type: 'CARD_REPLACEMENT'
                }
            }
        case SWAP_CARD:
            const tempUpCard = state[action.payload.player].hand[action.payload.index];
            const handArr1 = state[action.payload.player].hand.map((card, index) => {
                if (index === action.payload.index) {
                    return { ...state.replacementCard, faceDown: false };
                }
                return card;
            });
            return {
                ...state,
                [action.payload.player]: {
                    ...state[action.payload.player],
                    hand: handArr1,
                    score: calculatePlayerScore(handArr1)
                },
                upCard: { ...tempUpCard },
                replacementCard: undefined,
                turn: {
                    ...state.turn,
                    index: state.turn.index++,
                    player: 'computer',
                    type: 'REGULAR'
                }
            }
        default:
            return state;
    }
}

const calculatePlayerScore = (hand) => {
    let tempHand = removePairs(hand);
    return tempHand.reduce((total, card) => {
        if(card.faceDown) {
            return total;
        } else {
            return total + (card.value);
        }
    }, 0);
}

const removePairs = (arr) => {
    let tempHand1 = arr.map((card) => {
        if(card.card !== 'king' || card.card !== 'joker') {
            return card.card;
        }
    });
    var object = {};
    var result = [];
    var returnedResult = [];
    tempHand1.forEach(function (item) {
            if(!object[item]) {
                object[item] = 0;
            }
            object[item] += 1;
        })

        for (var prop in object) {
            if(object[prop] >= 2) {
                result.push(prop);
            }
        }
    result.map((item) => {
        tempHand1.map((card, index) => {
            if (card !== item) {
                returnedResult.push(arr[index])
            }
        });
    });
    return returnedResult;
}

export default game;