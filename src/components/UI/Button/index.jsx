import React from 'react';
import styles from './styles.module.css';

// Button component represents a reusable button element with customizable label and disabled state.
const Button = ({type, label, disabled}) => {
    return (
        <button className={styles.button} type={type} disabled={disabled}>{label}</button>
    );
};

export default Button;

