import "./login.scss";


export default function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h2 className="login-title">CYPHERBREAK</h2>
        <input placeholder="Email" className="login-input" />
        <input placeholder="Password" className="login-input" />
        <button className="login-button">Log In</button>
        <button className="login-register-button">Create a new account</button>
        <span className="forgot-pass">Forgot password?</span>
      </div>
    </div>
  )
}
 