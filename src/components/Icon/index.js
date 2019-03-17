import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './icons';
import './style.scss';

/**
 * @param {object} props
 * @param {string} [props.name]
 * @param {string} [props.size]
 *
 */
const Icon = (props) => {
  const { name, size } = props;

  return (
    <div className={classnames('icon', [size])}>
      <FontAwesomeIcon icon={name} />
    </div>
  );
};

Icon.defaultProps = {
  name: 'coffee',
  size: 'medium',
};

Icon.propTypes = {
  name: string,
  size: string,
};

export default Icon;
