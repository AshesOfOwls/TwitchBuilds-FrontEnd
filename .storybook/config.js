import { configure } from '@storybook/react';

const req = require.context('../src/components/', true, /stories\.js$/)

import '../src/components/Typography/style.scss';
import '../src/variables.css';

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
