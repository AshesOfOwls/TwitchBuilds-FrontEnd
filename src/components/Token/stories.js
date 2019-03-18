import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Token from '.';

storiesOf('Token', module)
  .add('default', () => (
    <Token
      image={faker.random.image()}
      title={faker.lorem.words(2)}
      subtitle={faker.lorem.words(2)}
    />
  ));
