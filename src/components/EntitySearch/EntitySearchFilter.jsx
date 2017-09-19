import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Checkbox, Input} from 'antd';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px;
`;


// const renderField = ({ input, label, type, meta: { touched, error } }) =>(
// const renderInputField = ({input, label, type, meta: {touched, error}}) => (
//   <div>
//     <label>
//       {label}
//     </label>
//     <div className="input-row">
//       <input {...input} placeholder={label} type={type}/>
//       {touched && error &&
//       <span className="error">{error}</span>}
//     </div>
//   </div>
// );

const renderInput = ({input, label, type, style, meta: {touched, error}}) => (
  <div>
    {console.log(input)}
    <div>{label}</div>
    <Input style={style}  value={input.value}/>
  </div>
);

const renderCheckbox = ({input, label, type, style, meta: {touched, error}}) => (
  <div>
    <div>{label}</div>
    <Checkbox style={style}/>
  </div>
);


const EntitySearchFilter = props => {

  const {handleSubmit, pristine, reset, submitting} = props;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
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
          type="text"
          component={renderCheckbox}
          label="Is Active"
        />


        <Button type="primary" icon="search">Search</Button>
        <Button>Default</Button>
      </form>
    </Wrapper>
  );
};

export default reduxForm({
  form: 'EntitySearchFilter' // a unique identifier for this form
})(EntitySearchFilter);
