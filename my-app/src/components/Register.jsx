import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './styles/reg.css';

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
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                var credentialResponseDecode = jwtDecode(credentialResponse.credential);
                console.log(credentialResponseDecode);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;