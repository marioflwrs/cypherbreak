import "./register.scss";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if(confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login")
      } catch(err) {
        console.log(err);
      }
    }
  };


  return (
    <div className="register">
      <form className="register-box" onSubmit={handleClick}>
        <h2 className="register-title">CYPHERBREAK</h2>
        <input 
          placeholder="Username" 
          required 
          ref={username} 
          className="register-input"
        />

        <input 
          placeholder="Email" 
          required 
          ref={email} 
          className="register-input" 
          type="email"
        />

        <input 
          placeholder="Password" 
          required 
          ref={password} 
          className="register-input" 
          type="password"
          minLength="8" 
        />
          
        <input 
          placeholder="Confirm password" 
          required 
          ref={confirmPassword} 
          className="register-input" 
          type="password" 
          minLength="8"
        />

        <button className="register-button" type="submit">Sign Up</button>
        <Link to="/login"><button className="login-register-button">Login</button></Link>
        <span className="forgot-password">Forgot password?</span>
      </form>
    </div>
  )
}
 