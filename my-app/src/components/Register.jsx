import React from 'react';
import './styles/reg.css';

const Register = () => {
const google = ()=>{
    window.open("http://localhost:3001/auth/google")
  }
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
            </div>
          </div>
        </div>
        <a className='google' href='http://localhost:3001/auth/google'>
          ХУЙ
        </a>
      </div>
    </div>
  );
};

export default Register;