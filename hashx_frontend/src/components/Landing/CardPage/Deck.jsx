import React, { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const cards = [
  { image: '1.png', color: '#eee' },
  { image: '2.png', color: '#f4f1de' },
  { image: '3.png', color: '#fff1e6' },
  { image: '4.png', color: '#ECE3C9' },
  { image: '5.png', color: '##ffd0d5' },
  { image: '6.png', color: '##a4c9d8' },
];

const useStyles = makeStyles((theme) => ({
  card: {
    WebkitUserDrag: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.1) 2px 5px 27px !important',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '360px',
      width: '360px',
    },
    [theme.breakpoints.up('md')]: {
      height: '400px',
      width: '400px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '600px',
      width: '600px',
    },
    [theme.breakpoints.up('xl')]: {
      height: '800px',
      width: '800px',
    },
  },
  cursor: {
    cursor: 'grabbing',
  },
}));

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -5 + Math.random() * 9.5,
  delay: i * 100,
});
const from = (i) => ({ x: 1000, rot: 0, scale: 1.5, y: 0 });
const trans = (r, s) =>
  ` rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function Deck(props) {
  const { setcolor } = props;
  const classes = useStyles();
  const [cursor, setCursor] = useState(true);
  // const cardClass = classes.card;
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [prop, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      set((i) => {
        if (index !== i) return;

        const isGone = gone.has(index);
        const x = isGone
          ? (200 + window.innerWidth - 2 * 0) * dir
          : down
          ? xDelta + 0
          : 0;
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        if (isGone) {
          setcolor(cards[5 - i].color);
          console.log(cards[5 - i].color);
        }
        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: down ? 800 : isGone ? 200 : 500,
          },
        };
      });
      if (!down && gone.size === cards.length) {
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
      }
    },
  );

  return prop.map(({ x, y, rot, scale }, i) => (
    <animated.div
      // className="deck"
      key={uuidv4()}
      style={{
        position: 'absolute',
        cursor: 'grab',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`,
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{ transform: interpolate([rot, scale], trans) }}
      >
        <Card className="card" elevation={1}>
          <CardMedia
            className={classes.card}
            style={{ cursor: cursor ? 'grabbing' : 'grab' }}
            id="card-image"
            component="img"
            alt="Card"
            image={require('../../../assets/Landing-page-Cards/' +
              cards[5 - i].image)}
            title="Card Image"
            onMouseDown={(e) => {
              e.preventDefault();
              setCursor(true);
            }}
            onMouseUp={() => setCursor(false)}
          />
        </Card>
      </animated.div>
    </animated.div>
  ));
}
