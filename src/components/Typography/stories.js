import React from 'react';
import { storiesOf } from '@storybook/react';
import './style.scss';

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'address', 'pre', 'blockquote'];

storiesOf('Typography', module)
  .add('all', () => elements.map((el, key) => (
    // eslint-disable-next-line
    React.createElement(el, { key }, `This is a ${el} element`)
  )));
