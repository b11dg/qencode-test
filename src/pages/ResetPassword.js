import React from 'react';
import FormHeader from '../components/UI/FormHeader';
import ResetPasswordForm from '../components/ResetPasswordForm';

// ResetPassword component represents the page for resetting password.
const ResetPassword = () => {

  return (
    <div className="container">
        <FormHeader title="Create new Password?" />
        <ResetPasswordForm/>
    </div>
  );
};

export default ResetPassword;
