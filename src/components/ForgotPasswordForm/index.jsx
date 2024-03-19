import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { handleEmailBlur, handleInputChange } from '../LoginForm/hooks';
import { handleSubmit } from './hooks';

const ForgotPasswordForm = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        email: '',
        emailValid: false,
        error: null
    });

    const { email, emailValid, error } = formData;

    return (
        <form onSubmit={(event) => handleSubmit(event, email, setFormData)}>
            <InputField
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(event) => handleInputChange(event, 'email', setFormData)}
                onBlur={() => handleEmailBlur(email, setFormData)}
                valid={emailValid}
                errorMessage={'Email is required and should be valid'}
            />
            <Button type="submit" disabled={!emailValid} label="Send"/>
            <Link className="cancel-btn" to="/reset-password">Cancel</Link>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default ForgotPasswordForm;
