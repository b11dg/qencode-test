export const handleSubmit = (event, email, setFormData) => {
    event.preventDefault();

    fetch('https://auth-qa.qencode.com/v1/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            redirect_url: "https://auth-qa.qencode.com/password-set"
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
            error: data.detail
        }));
    })
    .catch(error => {
        setFormData(prevState => ({
            ...prevState,
            error: 'An error occurred while resetting the password.'
        }));
    });
};
  