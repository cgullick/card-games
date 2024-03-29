import React from 'react';

////////////
// card back

const isntOffCorner = (h, w, cr)=> (cx, cy, r)=>
  ((cx >= cr) && (cx <= w-cr)) || ((cy >= cr) && (cy <= h-cr-2)) ? true : (
    Math.pow(
      Math.pow( ((w/2) -cr) - Math.abs( w/2 - cx ), 2) +
      Math.pow( ((h/2) -cr-1) - Math.abs( h/2 -1 - cy ), 2), 0.5
    ) + r < cr
  );

const r256 = ()=> Math.floor(Math.random()*256);
const seedColors = [
  `rgb(${r256()}, ${r256()}, ${r256()})`,
  `rgb(${r256()}, ${r256()}, ${r256()})`,
  `rgb(${r256()}, ${r256()}, ${r256()})`,
];

let deckBacks = {};

const generateCardBacks = (h, w, cr)=>{
  if( deckBacks[`${h}/${w}/${cr}`] ) return;
  const cornerCheck = isntOffCorner( h, w, cr );

  let circles = [];

  Array(50).fill(1).forEach((o, oi, arr)=> {
    const r = Math.abs( Math.random()*30 -12 );
    const op = Math.random()*0.5 + 0.375;

    let cx, cy;
    let tries = 20;

    do {
      cx = r +2 + Math.random()*(w - 2*r - 4);
      cy = r +2 + Math.random()*(h-2 - 2*r - 4);

    } while (
      (--tries) && (
        !cornerCheck(cx, cy, r+3) ||
        circles.filter(p => (
          Math.pow(p.cx-cx, 2) + Math.pow(p.cy-cy, 2)) < Math.pow(p.r + r + 4, 2)).length
      )
    );

    if(tries) circles.push({ cx, cy, r, op });
  });

  deckBacks[`${h}/${w}/${cr}`] = { circles };
};

generateCardBacks( 160, 170, 20 );


export const CardBack = ({ xOffset, yOffset, cardWidth, cardHeight }) =>
  !deckBacks[`${cardHeight}/${cardWidth}/${20}`] ? (
    generateCardBacks( cardHeight, cardWidth, 20 ) ||
    CardBack({ xOffset, yOffset, cardWidth, cardHeight })
  ) : (
    <g transform={`translate(${xOffset}, ${yOffset})`}>
      <rect width={cardWidth} height={cardHeight-2}
            x={0} y={0}
            rx={20} ry={20}
            fill={seedColors[2]}
            stroke="black"/>
      {
        deckBacks[`${cardHeight}/${cardWidth}/${20}`]
          .circles.map(({ cx, cy, r, op }, ki)=> (
            <circle key={ki} r={r}
                    cx={cx} cy={cy}
                    fill={seedColors[0]}
                    stroke={seedColors[1]}
                    opacity={op}
                    strokeWidth={2}/>
          ) )
      }
    </g>
  );



///////
// Card

// const ranks = ['joker', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
// const suits = ['club', 'diamond', 'heart', 'spade'];

const displayRanks = ['Joker', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const suitTokens = [
  (<g>
    <path d="M3.35,4.66c0-1.81-1.51-3.28-3.38-3.28s-3.38,1.47-3.38,3.28c0,1.81,1.51,3.28,3.38,3.28S3.35,6.47,3.35,4.66z"/>
    <path d="M7.71-1.55c0-1.81-1.51-3.28-3.38-3.28S0.95-3.36,0.95-1.55c0,1.81,1.51,3.28,3.38,3.28S7.71,0.26,7.71-1.55z"/>
    <path d="M-0.95-1.57c0-0.66-0.2-1.28-0.55-1.8c-0.6-0.89-1.65-1.48-2.83-1.48c-1.87,0-3.38,1.47-3.38,3.28 c0,1.81,1.51,3.28,3.38,3.28S-0.95,0.24-0.95-1.57z"/>
    <path d="M3.94-7.94c-1.67,0-2.55,1.36-3.01,2.72C0.47-3.86,0.43-2.5,0.43-2.5h-0.86c0,0-0.16-5.43-3.5-5.44H3.94z"/>
    <path d="M-2.32,2.25c1.9-1.9,1.9-4.75,1.9-4.75l0.85-0.01c0,0,0,2.91,1.85,4.76"/>
    <path d="M-1.94-3.85c1.9,1.9,4.75,1.9,4.75,1.9v0.85c0,0-2.91,0-4.76,1.85"/>
    <path d="M1.87-3.86c-1.9,1.9-4.75,1.9-4.75,1.9v0.85c0,0,2.91,0,4.76,1.85"/>
  </g>),

  (
    <path style={{fill:'#e6180a'}}
          d={'M -7.68,0'+
             'C -5,0 0,6 0,7.94'+
             'C 0,6 5,0 7.68,0'+
             'C 5,0 0,-6 0,-7.94'+
             'C 0,-6 -5,0 -7.68,0'}/>
  ),

  (<g>
    <path style={{fill: '#e6180a'}}
          d="M-7.67,3.93c0.01-4.71,5.91-8.14,7.64-11.87c1.75,3.72,7.66,7.12,7.7,11.83c0.01,2.22-1.71,4.03-3.82,4.03C1.73,7.92,0,6.13,0,3.91c0,2.23-1.71,4.03-3.82,4.03C-5.94,7.95-7.66,6.15-7.67,3.93z"/>
  </g>),

  (<g>
    <path d="M3.92-7.93c-1.67,0-2.55,1.78-3.01,3.56c-0.46,1.78-0.5,3.56-0.5,3.56L-0.44-0.8c0,0-0.16-7.13-3.5-7.13H3.92z"/>
    <path d="M6.75-0.8C6.74,2.67,1.53,5.19,0,7.93C-1.53,5.18-6.74,2.66-6.75-0.8c0-1.64,1.51-2.97,3.38-2.97C-1.51-3.77,0-2.44,0-0.8c0-1.64,1.51-2.97,3.38-2.97S6.75-2.44,6.75-0.8z"/>
  </g>),
];


const suitFills = [
  '#ddddee', 'white', '#ffe6cc', 'white',
];


export const Card = ({
  rank, suit,
  fill,
  cardWidth, cardHeight,
  xOffset, yOffset,
  onClick
}) => (
  <g transform={`translate(${xOffset}, ${yOffset})`} onClick={onClick}>
    <rect width={cardWidth} height={cardHeight-2}
          x={0} y={0}
          rx={20} ry={20}
          fill={suitFills[suit]}
          stroke="black"/>

    <text fontWeight="bold"
          transform={'translate(7, 40) '+ (
              (rank!==10) ? '' : 'scale(0.5, 1)' )}
          fontFamily="monospace"
          fill={((suit+1) % 4) < 2 ? 'black': '#e6180a'}
          style={{ cursor: 'default' }}
          fontSize={43}>
      {displayRanks[rank]}
    </text>
    <g transform={`translate(${21},${60}) rotate(180)`}>
      {suitTokens[suit]}
    </g>

  </g>
);





///////
// Hand

export const Hand = ({
  cards=[], onClick, hidden, style={},
  cardWidth=170, cardHeight=160, cardOffset=100,
  selectionHeight=20
}) => (
  <svg viewBox={'-2 -2 '+ (
      cardOffset*(cards.length||1) + 4 + (cardWidth-cardOffset)
    )+' '+(2+cardHeight+selectionHeight)}
       style={style}>
    {
      cards.map( (card, i) => (
        !card.rank ? null : (

          hidden || card.hidden ? (
            <CardBack key={i}
                      cardWidth={cardWidth}
                      cardHeight={cardHeight}
                      xOffset={i*cardOffset}
                      yOffset={selectionHeight} />
          ) : (
            <Card key={card.rank+''+card.suit+''+i}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  onClick={()=> onClick(i)}
                  rank={card.rank}
                  suit={card.suit}
                  xOffset={i * cardOffset}
                  yOffset={selectionHeight * !card.selected} />
          ) ) )
      )
    }
  </svg>
);