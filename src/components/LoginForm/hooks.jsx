// Function to validate email format
const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};
  
// Function to validate password length
const validatePassword = (password) => {
    return password.length >= 8;
};

// Function to handle email blur event and update email validity in form data
const handleEmailBlur = (email, setFormData) => {
    setFormData(prevState => ({
        ...prevState,
        emailValid: validateEmail(email)
    }));
};

// Function to handle password blur event and update password validity in form data
const handlePasswordBlur = (password, setFormData) => {
    setFormData(prevState => ({
        ...prevState,
        passwordValid: validatePassword(password)
    }));
};
  
// Function to handle form submission
const handleFormSubmit = (event, formData, setFormData) => {
    event.preventDefault();
    
    const { emailValid, passwordValid, email, password } = formData;
  
    
    if (emailValid && passwordValid) {
        fetch('https://auth-qa.qencode.com/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Unexpected response');
            }
        })
        .then(data => {
            // Store access and refresh tokens in sessionStorage
            sessionStorage.setItem('accessToken', data.access_token); 
            sessionStorage.setItem('refreshToken', data.refresh_token); 
            
            setFormData(prevState => ({
                ...prevState,
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                tokenExpire: data.token_expire,
                refreshTokenExpire: data.refresh_token_expire,
                error: null
            }));
        })
        .catch(error => {
            setFormData(prevState => ({
                ...prevState,
                error: 'An error occurred while logging in.'
            }));
        });
    }
};
  
const handleInputChange = (e, fieldName, setFormData) => {
    const { value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [fieldName]: value,
        [`${fieldName}Valid`]: fieldName === 'email' ? validateEmail(value) : validatePassword(value)
    }));
};

export {
    validateEmail,
    validatePassword,
    handleEmailBlur,
    handlePasswordBlur,
    handleFormSubmit,
    handleInputChange
};
  