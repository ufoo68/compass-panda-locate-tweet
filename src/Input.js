import React from 'react';
import { dripFormField } from 'react-drip-form';

const Input = ({
  input,
  meta: { error, dirty, touched },
  ...props,
}) => (
  <div>
    <textarea rows="5" cols="60"
      {...props}
      {...input}
    />
    {error && dirty && touched && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export default dripFormField()(Input);