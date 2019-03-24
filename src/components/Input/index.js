import React, { Component } from 'react';
import classnames from 'classnames';
import { bool, func, string } from 'prop-types';

import './style.css';

/**
 * @param {object} props
 * @param {string} [props.value]
 * @param {boolean} [props.disabled]
 * @param {function} [props.onChange]
 *
 */
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  onChange(event) {
    const { disabled, onChange } = this.props;
    const { value } = event.target;

    if (disabled) { return; }

    onChange(value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className={classnames('inputWrapper')}>
        <input
          type="text"
          value={value}
          className={classnames('input')}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  disabled: false,
  value: '',
  onChange: () => {},
};

Input.propTypes = {
  disabled: bool,
  value: string,
  onChange: func,
};

export default Input;
