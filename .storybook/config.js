import { configure } from '@storybook/react';

const req = require.context('../src/components/', true, /stories\.js$/)

import '../src/variables.css';

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
