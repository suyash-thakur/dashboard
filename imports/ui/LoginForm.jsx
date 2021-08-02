import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import {Accounts} from 'meteor/accounts-base';
export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [errMessage, setError] = useState('');

    const toggleLogin = e => {
         setIsLogin(!isLogin);
    
    }
  const submit = e => {
    e.preventDefault();

      Meteor.loginWithPassword(username, password, function(err) {
        if (err.error === 403) {
          console.log(err);
          setError('User not found');
        } else {
          setError('Error Logging In');

        }
      });
  };

    const signup = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            Accounts.createUser({
                username: username,
                password: password
            });
        } else {
          setError("Password doesn't match");
        }

    };
    return (
        <div className="login-form-container">
            <div className="main">

    	<header>
		<ul className="header-menu">
			<li>
				<div id="header-login-wrapper sign-up" onClick={e => toggleLogin(e.target.value)}>
                  <p id="header-login-button">Log In</p>
                  {isLogin && 
                  					<span id="header-login-line"></span>

                  }
				</div>		
			</li>
			<li>
				<div id="header-login-wrapper sign-in" onClick={e => toggleLogin(e.target.value)}>
                  <p id="header-login-button">Sign Up</p>
                  {!isLogin && 
                  					<span id="header-login-line"></span>

                  }
				</div>		
			</li>
		</ul>
          </header>
          <div className="error-message">
            {errMessage &&
              <div>
                {errMessage}
              </div>
            }
          </div>
            {isLogin ? (
    <form onSubmit={submit} className="login-form" id="content-wrapper">

    <input
      type="text"
                            placeholder="Username"
                            className="client-info"
      name="username"
      required
      onChange={e => setUsername(e.target.value)}
    />

    <input
      type="password"
                            placeholder="Password"
                            className="client-info"
      name="password"
      required
      onChange={e => setPassword(e.target.value)}
    />


    <button type="submit" id="signin-button">Log In</button>
          </form>
            ) : (
                <form onSubmit={signup} className="login-form" id="content-wrapper">
          
                <input
                  type="text"
                                placeholder="Username"
                                className="client-info"
                  name="username"
                  required
                  onChange={e => setUsername(e.target.value)}
                />
          
          
                <input
                  type="password"
                                placeholder="Password"
                                className="client-info"
                  name="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                                name="confirmPassword"
                                className="client-info"
                  required
                  onChange={e => setConfirmPassword(e.target.value)}
                        />
                                            <a  onClick={e => toggleLogin(e.target.value)} >Already Have An Account ?</a>

                <button type="submit" id="signin-button">Sign Up</button>
                      </form>
            )}


   
    </div>
    </div>

  );
};