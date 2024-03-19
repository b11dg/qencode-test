import React from 'react';
import FormHeader from '../components/UI/FormHeader';
import LoginForm from '../components/LoginForm';
import githubLogo from '../assets/images/github-logo.svg';
import googleLogo from '../assets/images/google-logo.svg';

// Login component represents the page for user login.
const Login = () => {

  return (
    <div className="container">
        <FormHeader title="Log in to your account" />
        <div className="controls">
            <button>
                <img src={googleLogo} alt="" />Google
            </button>
            <button>
                <img src={githubLogo} alt="" />Github
            </button>
        </div>
        <div className='divider'>or</div>
        <LoginForm/>
        <p className='signup-link'>Is your company new to Qencode? <a href="/">Sign up</a></p>
    </div>
  );
};

export default Login;
