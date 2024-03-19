import React, { useState } from 'react';
import eyeImg from '../../../assets/images/eye.svg';
import styles from './styles.module.css';

// InputField component represents an input field with optional label and password visibility toggle.
const InputField = ({ 
    type, 
    placeholder, 
    value, 
    onChange, 
    onBlur, 
    valid, 
    errorMessage, 
    label, 
    name 
}) => {
    // State to track if the input field has been touched
    const [firstTouch, setFirstTouch] = useState(false); 
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false); 

    // Function to handle onBlur event
    const handleBlur = (event) => {
        setFirstTouch(true); 
        onBlur && onBlur(event); 
    };

    return (
        <div className={styles.control}>
            {label && <label>{label}</label>}
            <div className={styles.controlInner}>
                <input
                    className={styles.input}
                    type={showPassword ? 'text' : type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur} 
                    required="required"/>
                { type !== 'email' && 
                    <img 
                        className={styles.showPassword} 
                        src={eyeImg} 
                        onClick={() => setShowPassword(!showPassword)}
                        alt="" />
                } 
            </div>
            {(firstTouch && !valid) && <p className={styles.error}>{errorMessage}</p>}
        </div>
    );
};

export default InputField;

