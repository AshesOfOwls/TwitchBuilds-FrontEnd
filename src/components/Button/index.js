import React from 'react';
import classnames from 'classnames';

import './style.css';

const Button = (props) => {
  return (
    <button className={classnames('button')}>
      { props.children }
    </button>
  );
};

export default Button;
