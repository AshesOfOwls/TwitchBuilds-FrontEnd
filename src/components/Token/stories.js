import React from 'react';
import { storiesOf } from '@storybook/react';
import Token from '.';

storiesOf('Token', module)
  .add('default', () => (
    <Token />
  ));
