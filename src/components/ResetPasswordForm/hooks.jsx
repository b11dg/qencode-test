import { validatePassword } from '../LoginForm/hooks';

// Function to handle blur event for confirming password field
const handleConfirmPasswordBlur = (confirmPassword, setFormData) => {
    setFormData(prevState => ({
        ...prevState,
        confirmPasswordValid: validatePassword(confirmPassword)
    }));
};

// Function to handle form submission
const handleSubmit = (event, password, confirmPassword, setFormData) => {
    event.preventDefault();

    fetch('https://auth-qa.qencode.com/v1/auth/password-set', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: sessionStorage.getItem('accessToken'),
            secret: sessionStorage.getItem('refreshToken'),
            password: password,
            password_confirm: confirmPassword
        })
    })
    .then(response => {
        if (response.error !== 0) {
            return response.json();
        } else {
            throw new Error('Unexpected response');
        }
    })
    .then(data => {
        setFormData(prevState => ({
            ...prevState,
            error: data.detail[0].error
        }));
    })
    .catch(error => {
        setFormData(prevState => ({
            ...prevState,
            error: 'An error occurred while resetting the password.'
        }));
    });
};
  
export {
    handleConfirmPasswordBlur,
    handleSubmit
}