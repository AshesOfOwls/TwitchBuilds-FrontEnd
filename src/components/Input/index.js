import React, { Component } from 'react';
import classnames from 'classnames';
import Label from 'components/Label';
import { bool, func, string } from 'prop-types';

import './style.css';

/**
 * @param {object} props
 * @param {string} [props.label]
 * @param {string} [props.value]
 * @param {string} [props.placeholder]
 * @param {string} [props.type]
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

  renderWrappedInput() {
    const { label } = this.props;

    if (!label) return this.renderInput();

    return (
      <Label value={label}>
        { this.renderInput() }
      </Label>
    );
  }

  renderInput() {
    const { type, placeholder } = this.props;
    const { value } = this.state;

    return (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={classnames('input')}
        onChange={this.onChange.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className={classnames('inputWrapper')}>
        { this.renderWrappedInput() }
      </div>
    );
  }
}

Input.defaultProps = {
  disabled: false,
  value: '',
  placeholder: '',
  label: '',
  type: 'text',
  onChange: () => {},
};

Input.propTypes = {
  disabled: bool,
  value: string,
  placeholder: string,
  label: string,
  type: string,
  onChange: func,
};

export default Input;
