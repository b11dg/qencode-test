import React from 'react';
import FormHeader from '../components/UI/FormHeader';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

// ForgotPassword component represents the page for resetting forgotten password.
const ForgotPassword = () => {

  return (
    <div className="container">
        <FormHeader title="Forgot Password?" />
        <ForgotPasswordForm/>
    </div>
  );
};

export default ForgotPassword;
