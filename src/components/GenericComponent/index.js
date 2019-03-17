import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

import './style.css';

/**
 * @param {object} props
 * @param {number} [props.prop]
 *
 */
const GenericComponent = (props) => {
  const { prop } = props;

  return (
    <div className={classnames('style')}>
      Generic Component
      { prop }
    </div>
  );
};

GenericComponent.defaultProps = {
  prop: 'property',
};

GenericComponent.propTypes = {
  prop: string,
};

export default GenericComponent;
