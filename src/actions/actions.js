import { DRAW_CARD, DEAL, FLIP_CARD, CHOOSE_UP_CARD, SWAP_CARD } from '../constants/actionTypes'

export const drawCard = (dispatch, payload) => {
    const action = {
        type: DRAW_CARD
    }
    return dispatch(action);
}

export const deal = (dispatch, payload) => {
    const action = {
        type: DEAL,
        payload
    }
    return dispatch(action);
}

export const flipCard = (dispatch, payload) => {
    const action = {
        type: FLIP_CARD,
        payload
    }
    return dispatch(action);
}

export const chooseUpCard = (dispatch, payload) => {
    const action = {
        type: CHOOSE_UP_CARD,
        payload
    }
    return dispatch(action);
}

export const swapCard = (dispatch, payload) => {
    const action = {
        type: SWAP_CARD,
        payload
    }
    return dispatch(action);
}