import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '.';

storiesOf('Input', module)
  .add('default', () => (
    <Input placeholder="Default" onChange={action('onChange')} />
  ))
  .add('with label', () => (
    <Input label="Username" placeholder="Enter Username" onChange={action('onChange')} />
  ))
  .add('disabled', () => (
    <Input disabled placeholder="Disabled" onChange={action('onChange')} />
  ));
