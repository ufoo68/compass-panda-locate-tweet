import React from 'react';
import { dripForm } from 'react-drip-form';
import Input from './Input';

const Form = ({
  handlers,
  meta: { invalid, pristine },
}) => (
  <form onSubmit={handlers.onSubmit}>
    <div>
      <label htmlFor="message">つぶやきを残す</label>
      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        placeholder="つぶやきを入力"
      />
    </div>

    <button
      type="submit"
      disabled={invalid || pristine}
      onClick={handlers.onSubmit}
    >
      Submit
    </button>
  </form>
);

export default dripForm({
  validations: {
    password: {
      required: true,
    },
  },
})(Form);