import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import Avatar from 'components/Avatar';

import './style.css';

/**
 * @param {object} props
 * @param {number} [props.prop]
 *
 */
const Token = (props) => {
  const { prop } = props;

  return (
    <div className={classnames('style')}>
      I am a token
      <Avatar />
      { prop }
    </div>
  );
};

Token.defaultProps = {
  prop: 'property',
};

Token.propTypes = {
  prop: string,
};

export default Token;
