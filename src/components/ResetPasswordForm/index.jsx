import React, { useState } from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { handlePasswordBlur, handleInputChange } from '../LoginForm/hooks';
import { handleSubmit, handleConfirmPasswordBlur } from './hooks';

const ResetPasswordForm = () => {
    // State to manage form data and validation
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        passwordValid: false,
        confirmPasswordValid: false,
        error: null
    });

    const { 
        password, 
        passwordValid, 
        confirmPassword, 
        confirmPasswordValid, 
        error 
    } = formData;

  return (
    <form onSubmit={(event) => handleSubmit(event, password, confirmPassword, setFormData)}>
        <InputField
            type="password"
            placeholder="Password"
            name="password"
            label="password"
            value={password}
            onChange={(event) => handleInputChange(event, 'password', setFormData)}
            onBlur={() => handlePasswordBlur(password, setFormData)}
            valid={passwordValid}
            errorMessage={'Password is required and should be at least 8 characters long'}/>
        <InputField
            type="password"
            placeholder="Password"
            name="confirm-password"
            label="confirm password"
            value={confirmPassword}
            onChange={(event) => handleInputChange(event, 'confirmPassword', setFormData)}
            onBlur={() => handleConfirmPasswordBlur(confirmPassword, setFormData)}
            valid={confirmPasswordValid && (password === confirmPassword)}
            errorMessage={'Confirm Password should be equal to Password'}/>
        <Button type="submit" disabled={!(passwordValid && confirmPasswordValid)} label="Reset Password"/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ResetPasswordForm;
