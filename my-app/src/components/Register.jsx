import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
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
        <div className="links">
          <Link to='/Home'>Home</Link>
        </div>
      </div>
  );
};

export default Register;