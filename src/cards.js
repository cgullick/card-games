import shuffle from 'shuffle-array';

// const suits = [0, 1, 2, 3, 4];
// const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'joker']
// const colors = { 0: 'black', 1: 'red', 2: 'red', 4: 'black' };

const deckOfCards = [
    { card: '1', suit: 0, rank: '1', value: 1 },
    { card: '2', suit: 0, rank: '2', value: 2 },
    { card: '3', suit: 0, rank: '3', value: 3 },
    { card: '4', suit: 0, rank: '4', value: 4 },
    { card: '5', suit: 0, rank: '5', value: 5 },
    { card: '6', suit: 0, rank: '6', value: 6 },
    { card: '7', suit: 0, rank: '7', value: 7 },
    { card: '8', suit: 0, rank: '8', value: 8 },
    { card: '9', suit: 0, rank: '9', value: 9 },
    { card: '10', suit: 0, rank: '10', value: 10 },
    { card: 'jack', suit: 0, rank: '11', value: 10 },
    { card: 'queen', suit: 0, rank: '12', value: 10 },
    { card: 'king', suit: 0, rank: '13', value: 0 },
    { card: '1', suit: 1, rank: '1', value: 1 },
    { card: '2', suit: 1, rank: '2', value: 2 },
    { card: '3', suit: 1, rank: '3', value: 3 },
    { card: '4', suit: 1, rank: '4', value: 4 },
    { card: '5', suit: 1, rank: '5', value: 5 },
    { card: '6', suit: 1, rank: '6', value: 6 },
    { card: '7', suit: 1, rank: '7', value: 7 },
    { card: '8', suit: 1, rank: '8', value: 8 },
    { card: '9', suit: 1, rank: '9', value: 9 },
    { card: '10', suit: 1, rank: '10', value: 10 },
    { card: 'jack', suit: 1, rank: '11', value: 10 },
    { card: 'queen', suit: 1, rank: '12', value: 10 },
    { card: 'king', suit: 1, rank: '13', value: 0 },
    { card: '1', suit: 2, rank: '1', value: 1 },
    { card: '2', suit: 2, rank: '2', value: 2 },
    { card: '3', suit: 2, rank: '3', value: 3 },
    { card: '4', suit: 2, rank: '4', value: 4 },
    { card: '5', suit: 2, rank: '5', value: 5 },
    { card: '6', suit: 2, rank: '6', value: 6 },
    { card: '7', suit: 2, rank: '7', value: 7 },
    { card: '8', suit: 2, rank: '8', value: 8 },
    { card: '9', suit: 2, rank: '9', value: 9 },
    { card: '10', suit: 2, rank: '10', value: 10 },
    { card: 'jack', suit: 2, rank: '11', value: 10 },
    { card: 'queen', suit: 2, rank: '12', value: 10 },
    { card: 'king', suit: 2, rank: '13', value: 0 },
    { card: '1', suit: 2, rank: '1', value: 1 },
    { card: '2', suit: 2, rank: '2', value: 2 },
    { card: '3', suit: 2, rank: '3', value: 3 },
    { card: '4', suit: 2, rank: '4', value: 4 },
    { card: '5', suit: 2, rank: '5', value: 5 },
    { card: '6', suit: 2, rank: '6', value: 6 },
    { card: '7', suit: 2, rank: '7', value: 7 },
    { card: '8', suit: 2, rank: '8', value: 8 },
    { card: '9', suit: 2, rank: '9', value: 9 },
    { card: '10', suit: 2, rank: '10', value: 10 },
    { card: 'jack', suit: 2, rank: '11', value: 10 },
    { card: 'queen', suit: 2, rank: '12', value: 10 },
    { card: 'king', suit: 2, rank: '13', value: 0 },
    { card: 'joker', suit: 5, rank: '0', value: -5 },
    { card: 'joker', suit: 5, rank: '0', value: -5 }
]

export const card = (value, suit) => ({
  card: card,
  suit,
  rank: value,
  value
});

export const newShuffledDeck = () => {
    return shuffle(deckOfCards);
}

export const calculatePlayerScore = (cards) => {
  // Sum all cards naively
  let score = cards.reduce((score, card) => score + card.score, 0);

  // Now reduce each A from 11 to 1 if necessary
  cards.filter(c => c.value === 'A').forEach(c => {
    if (score > 21) {
      score -= 10;
    }
  });

  return score;
};