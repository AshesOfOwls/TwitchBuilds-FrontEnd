import React, { Component } from 'react';
import classnames from 'classnames';
import { bool, func, node, string } from 'prop-types';

import './style.scss';


/**
 * @typedef {object} Props
 * @prop {boolean} [disabled]
 * @prop {function} [onClick]
 * @prop {string} [size]
 *
 * @extends {Component<Props>}
 */
class Button extends Component {
  onClick = () => {
    const { disabled, onClick } = this.props;

    if (disabled) return;

    onClick();
  }

  render() {
    const { children, size, disabled } = this.props;

    return (
      <button
        className={classnames('button', size, { disabled })}
        type="button"
        onClick={this.onClick}
      >
        { children }
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  children: null,
  onClick: () => {},
  size: 'medium',
};

Button.propTypes = {
  disabled: bool,
  children: node,
  onClick: func,
  size: string,
};

export default Button;
