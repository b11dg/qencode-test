import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { 
    handleFormSubmit, 
    handleInputChange, 
    handleEmailBlur, 
    handlePasswordBlur 
} from './hooks';

const LoginForm = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        emailValid: false,
        passwordValid: false,
        error: null
    });

    const { email, password, emailValid, passwordValid, error } = formData;

    return (
        <form onSubmit={(event) => handleFormSubmit(event, formData, setFormData)}>
            <InputField
                type="email"
                placeholder="Work email"
                name="email"
                value={email}
                onChange={(event) => handleInputChange(event, 'email', setFormData)}
                onBlur={() => handleEmailBlur(email, setFormData)}
                valid={emailValid}
                errorMessage={'Email is required and should be valid'}/>
            { emailValid && (
                <>
                    <InputField
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(event) => handleInputChange(event, 'password', setFormData)}
                        onBlur={() => handlePasswordBlur(password, setFormData)}
                        valid={passwordValid}
                        errorMessage={'Password is required and should be at least 8 characters long'}/>
                    <Link className='forgot-password-link' to="/forgot-password">Forgot your password?</Link>
                </>
            )}
            <Button type="submit" disabled={!(passwordValid && emailValid)} label="Log in to Qencode"/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default LoginForm;
