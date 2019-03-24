import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from 'components/Input';
import Label from '.';

storiesOf('Label', module)
  .add('default', () => (
    <Label value="I am a label" />
  ))
  .add('with child', () => (
    <Label value="Username">
      <Input />
    </Label>
  ));
