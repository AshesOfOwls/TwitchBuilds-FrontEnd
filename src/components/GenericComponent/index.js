import React from 'react';
import classnames from 'classnames';

import './style.css';

const GenericComponent = (props) => {
  return (
    <div className={classnames('style')}>
      Generic Component
    </div>
  );
};

export default GenericComponent;
