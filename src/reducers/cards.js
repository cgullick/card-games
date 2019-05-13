import { DRAW_CARD } from '../constants/actionTypes';
const defaultState = [
    { card: '1', suit: 0, rank: '1', value: '1' },
    { card: '2', suit: 0, rank: '2', value: '2' },
    { card: '3', suit: 0, rank: '3', value: '3' },
    { card: '4', suit: 0, rank: '4', value: '4' },
    { card: '5', suit: 0, rank: '5', value: '5' },
    { card: '6', suit: 0, rank: '6', value: '6' },
    { card: '7', suit: 0, rank: '7', value: '7' },
    { card: '8', suit: 0, rank: '8', value: '8' },
    { card: '9', suit: 0, rank: '9', value: '9' },
    { card: '10', suit: 0, rank: '10', value: '10' },
    { card: 'jack', suit: 0, rank: '11', value: '11' },
    { card: 'queen', suit: 0, rank: '12', value: '12' },
    { card: 'king', suit: 0, rank: '13', value: '13' },
    { card: '1', suit: 1, rank: '2', value: '2' },
    { card: '2', suit: 1, rank: '3', value: '3' },
    { card: '3', suit: 1, rank: '1', value: '1' },
    { card: '4', suit: 1, rank: '4', value: '4' },
    { card: '5', suit: 1, rank: '5', value: '5' },
    { card: '6', suit: 1, rank: '6', value: '6' },
    { card: '7', suit: 1, rank: '7', value: '7' },
    { card: '8', suit: 1, rank: '8', value: '8' },
    { card: '9', suit: 1, rank: '9', value: '9' },
    { card: '10', suit: 1, rank: '10', value: '10' },
    { card: 'jack', suit: 1, rank: '11', value: '11' },
    { card: 'queen', suit: 1, rank: '12', value: '12' },
    { card: 'king', suit: 1, rank: '13', value: '13' },
    { card: '1', suit: 2, rank: '2', value: '2' },
    { card: '2', suit: 2, rank: '3', value: '3' },
    { card: '3', suit: 2, rank: '1', value: '1' },
    { card: '4', suit: 2, rank: '4', value: '4' },
    { card: '5', suit: 2, rank: '5', value: '5' },
    { card: '6', suit: 2, rank: '6', value: '6' },
    { card: '7', suit: 2, rank: '7', value: '7' },
    { card: '8', suit: 2, rank: '8', value: '8' },
    { card: '9', suit: 2, rank: '9', value: '9' },
    { card: '10', suit: 2, rank: '10', value: '10' },
    { card: 'jack', suit: 2, rank: '11', value: '11' },
    { card: 'queen', suit: 2, rank: '12', value: '12' },
    { card: 'king', suit: 2, rank: '13', value: '13' },
    { card: '1', suit: 2, rank: '2', value: '2' },
    { card: '2', suit: 2, rank: '3', value: '3' },
    { card: '3', suit: 2, rank: '1', value: '1' },
    { card: '4', suit: 2, rank: '4', value: '4' },
    { card: '5', suit: 2, rank: '5', value: '5' },
    { card: '6', suit: 2, rank: '6', value: '6' },
    { card: '7', suit: 2, rank: '7', value: '7' },
    { card: '8', suit: 2, rank: '8', value: '8' },
    { card: '9', suit: 2, rank: '9', value: '9' },
    { card: '10', suit: 2, rank: '10', value: '10' },
    { card: 'jack', suit: 2, rank: '11', value: '11' },
    { card: 'queen', suit: 2, rank: '12', value: '12' },
    { card: 'king', suit: 2, rank: '13', value: '13' },
    { card: 'joker', suit: 5, rank: '0', value: '-5' },
    { card: 'joker', suit: 5, rank: '0', value: '-5' }
]

const cards = (state = defaultState, action) => {
    switch (action.type) {
        case DRAW_CARD:
            let newArray = state.slice()
            newArray.splice(action.payload.cardIndex, 1);
            return [...newArray];
        default:
            return state;
    }
}

export default cards;