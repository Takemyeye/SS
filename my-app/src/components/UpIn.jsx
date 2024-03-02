export const UpIn = () => {
  return (
      <div id="MainWalpaper">
        <div className="Home" ></div>
        <div id="ssupin">
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" id="name" />
                <input type="email" placeholder="Email" id="email" />
                <input type="password" placeholder="Password" id="password" />
                <button id="Upbutton" type="submit">Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" id="emailIn" />
                <input type="password" placeholder="Password" id="passwordIn" />
                <a href="#">Forgot your password?</a>
                <button id="Inbutton" type="submit">Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hi,Dude!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className="ghost" id="signUp">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};