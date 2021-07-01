import "./register.scss";


export default function Register() {
  return (
    <div className="login">
      <div className="login-box">
        <h2 className="login-title">CYPHERBREAK</h2>
        <input placeholder="Username" className="login-input" />
        <input placeholder="Email" className="login-input" type="email"/>
        <input placeholder="Password" className="login-input" type="password" />
        <input placeholder="Confirm password" className="login-input" type="password" />
        <button className="login-button">Sign Up</button>
        <button className="login-register-button">Login</button>
        <span className="forgot-pass">Forgot password?</span>
      </div>
    </div>
  )
}
 