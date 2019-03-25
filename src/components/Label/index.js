import React from 'react';
import classnames from 'classnames';
import { node, string } from 'prop-types';

import './style.css';

/**
 * @param {object} props
 * @param {node} [props.children]
 * @param {string} [props.id]
 * @param {string} [props.value]
 *
 */
const Label = (props) => {
  const { children, value, id } = props;

  return (
    <label className={classnames('label')} htmlFor={id}>
      <div className={classnames('labelText')}>
        { value }
      </div>

      { children }
    </label>
  );
};

Label.defaultProps = {
  children: null,
  id: '',
  value: '',
};

Label.propTypes = {
  children: node,
  id: string,
  value: string,
};

export default Label;
