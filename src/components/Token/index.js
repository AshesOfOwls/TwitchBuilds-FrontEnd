import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import Avatar from 'components/Avatar';

import './style.scss';

/**
 * @param {object} props
 * @param {string} [props.image]
 * @param {string} [props.title]
 * @param {string} [props.subtitle]
 *
 */
const Token = (props) => {
  const { image, title, subtitle } = props;

  return (
    <div className={classnames('token')}>
      <div className={classnames('token-image')}>
        <Avatar image={image} />
      </div>
      <div className={classnames('token-text')}>
        <div className={classnames('token-title')}>
          { title }
        </div>
        <div className={classnames('token-subtitle')}>
          { subtitle }
        </div>
      </div>
    </div>
  );
};

Token.defaultProps = {
  image: null,
  title: null,
  subtitle: null,
};

Token.propTypes = {
  image: string,
  title: string,
  subtitle: string,
};

export default Token;
