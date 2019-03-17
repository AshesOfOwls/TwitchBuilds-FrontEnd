import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('Icon', module)
  .add('default ', () => (
    <Icon />
  ))
  .add('small ', () => (
    <Icon size="small" />
  ))
  .add('medium ', () => (
    <Icon size="medium" />
  ))
  .add('large ', () => (
    <Icon size="large" />
  ));
