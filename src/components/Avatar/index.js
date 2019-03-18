import React from 'react';
import classnames from 'classnames';
import { number, string } from 'prop-types';
import ReactAvatar from 'react-avatar';

import './style.css';

/**
 * @param {object} props
 * @param {string} [props.name]
 * @param {string} [props.image]
 * @param {number} [props.size]
 *
 */
const GenericComponent = (props) => {
  const { name, image, size } = props;

  return (
    <div className={classnames('avatar')}>
      <ReactAvatar
        name={name}
        src={image}
        size={size}
        round
      />
    </div>
  );
};

GenericComponent.defaultProps = {
  name: '',
  image: '',
  size: 32,
};

GenericComponent.propTypes = {
  name: string,
  image: string,
  size: number,
};

export default GenericComponent;
