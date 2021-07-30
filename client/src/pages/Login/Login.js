import "./login.scss";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  };

  console.log(user);

  return (
    <div className="login">
      <form className="login-box" onSubmit={handleClick}>
        <h2 className="login-title">CYPHERBREAK</h2>
        <input placeholder="Email" type="email" required className="login-input" ref={email} />
        <input placeholder="Password" type="password" required minLength="8" className="login-input" ref={password} />
        <button className="login-button">{ isFetching 
          ? <CircularProgress className="circle-progress" size="30px" /> 
          : "Log In" }
        </button>
        <button className="login-register-button">Create a new account</button>
        <span className="forgot-pass">Forgot password?</span>
      </form>
    </div>
  );
}
 