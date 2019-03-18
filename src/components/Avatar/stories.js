import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Avatar from '.';

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar name={faker.name.findName()} image={faker.image.avatar()} />
  ))
  .add('without image', () => (
    <Avatar name={faker.name.findName()} />
  ))
  .add('without name or image', () => (
    <Avatar />
  ));
