import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px;
`;


const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};



const renderInput = ({input, label, type, style, meta: {touched, error, warning}}) => (
  <label class="mt-checkbox mt-checkbox-outline">
    <span>{label}</span>
    <input type="text" class="form-control"/>
    {touched &&
    ((error &&
      <span>
            {error}
          </span>) ||
      (warning &&
        <span>
              {warning}
            </span>))}
  </label>
);

const renderCheckbox = ({input, label, type, style, meta: {touched, error, warning}}) => (
  <label class="mt-checkbox mt-checkbox-outline">
    <span>{label}</span>
    <input type={type} style={{style}}/>
    {touched &&
    ((error &&
      <span>
            {error}
          </span>) ||
      (warning &&
        <span>
              {warning}
            </span>))}
  </label>
);


const EntityCRUD = props => {
  const {handleSubmit, pristine, reset, submitting} = props;


  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form-horizontal" role="form">
        <div class="form-group">
          <Field
            name="name"
            type="text"
            component={renderInput}
            label="Name"
          />
          <Field
            name="arabicName"
            type="text"
            component={renderInput}
            label="Arabic Name"
            style={{textAlign: "right"}}
          />
          <Field
            name="shortCode"
            type="text"
            component={renderInput}
            label="Short Code"
          />
          <Field
            name="isActive"
            type="checkbox"
            component={renderCheckbox}
            label="Is Active"
          />
          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};


export default reduxForm({
  form: 'EntityCRUD', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(EntityCRUD);
