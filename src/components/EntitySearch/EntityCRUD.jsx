import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px;
`;


const renderInput = ({input, id, className, label, type, style, meta: {touched, error, warning}}) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} id={id} className={className} style={{...style}} type={type}/>
    {touched &&
    ((error &&
      <span>
            {error}
          </span>) ||
      (warning &&
        <span>
              {warning}
            </span>))}
  </div>
);


const renderCheckbox = ({input, id, className, label, type, style, meta: {touched, error, warning}}) => (
  <div className="form-group">
    <div className="mt-checkbox-list">
      <label className="mt-checkbox mt-checkbox-outline"> Checkbox 1
        <input {...input} id={id} className={className} type={type} style={{...style}}/>
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
    </div>
  </div>
);


const EntityCRUD = props => {
  const {handleSubmit, pristine, reset, submitting} = props;


  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>

        <Field
          name="name"
          type="text"
          className="form-control"
          component={renderInput}
          label="Name"
        />
        <Field
          name="arabicName"
          type="text"
          className="form-control"
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
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </Wrapper>
  );
};


export default reduxForm({
  form: 'EntityCRUD'
})(EntityCRUD);
