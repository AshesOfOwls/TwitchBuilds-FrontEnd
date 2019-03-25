import React from 'react';
import { storiesOf } from '@storybook/react';
import GenericComponent from '.';

storiesOf('GenericComponent', module)
  .add('default', () => (
    <GenericComponent />
  ));
