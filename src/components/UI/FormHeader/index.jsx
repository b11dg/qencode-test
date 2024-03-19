import React from 'react';
import logo from '../../../assets/images/qencode-logo.svg';
import styles from './styles.module.css';

// FormHeader component represents a header for a form with a title and a logo.
const FormHeader = ({title}) => {
    return (
        <div className={styles.formHeader}>
            <img src={logo} alt="qencode logo" />
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};

export default FormHeader;

