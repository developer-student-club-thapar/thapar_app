import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './Desk.css';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { display } from '@material-ui/system';

const cards = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

const useStyles = makeStyles((theme) => ({
  card: {
    WebkitUserDrag: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.1) 2px 5px 27px !important',
    [theme.breakpoints.down('sm')]: {
      height: '255px',
      width: '255px',
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
      height: '550px',
      width: '550px',
    },
    [theme.breakpoints.up('xl')]: {
      height: '800px',
      width: '800px',
    },
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

export default function Deck() {
  const classes = useStyles();
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
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
      let trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      set((i) => {
        if (index !== i) return;

        console.log(0, 0);
        const isGone = gone.has(index);
        let x = isGone
          ? (200 + window.innerWidth - 2 * 0) * dir
          : down
          ? xDelta + 0
          : 0;
        let rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        let scale = down ? 1.1 : 1;

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
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    },
  );

  return props.map(({ x, y, rot, scale }, i) => (
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
        <Card className="card">
          <CardMedia
            className={classes.card}
            id="card-image"
            component="img"
            alt="Card"
            image={require('../../assets/' + cards[5 - i])}
            title="Card Image"
          />
        </Card>
      </animated.div>
    </animated.div>
  ));
}
