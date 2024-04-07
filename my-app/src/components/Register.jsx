import React from 'react';
import axios from 'axios'; 
import { GoogleLogin} from '@react-oauth/google';
import './styles/reg.css';

const responseGoogleSuccess = async (credentialResponse) => {
  const googleToken = credentialResponse.token;
  console.log('Google Token:', googleToken);

  try {
    const response = await axios.post('/register', {
      token: googleToken,
    });
    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Error sending token to server:', error);
  }
};

const responseGoogleError = () => {
  console.log("Login Failed");
};

const signOut = () => {
    console.log('User signed out.');
};

const Register = () => {
  return (
    <div className='background'>
      <div className='Circle'>
        <div className="login">
          <h2>Login</h2>
          <div className="inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputBx">
            <input type="password" placeholder="Password" />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
          <div className="inputBx1">
            <div className='Google-in-out'>
              <GoogleLogin
                onSuccess={responseGoogleSuccess}
                onError={responseGoogleError}
              />
              <button onClick={signOut}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;