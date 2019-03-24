import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '.';

storiesOf('Input', module)
  .add('default', () => (
    <Input onChange={action('onChange')} />
  ))
  .add('with label', () => (
    <Input label="Username" onChange={action('onChange')} />
  ))
  .add('disabled', () => (
    <Input disabled onChange={action('onChange')} />
  ));
