import "./register.scss";


export default function Register() {
  return (
    <div className="register">
      <div className="register-box">
        <h2 className="register-title">CYPHERBREAK</h2>
        <input placeholder="Username" className="register-input" />
        <input placeholder="Email" className="register-input" type="email"/>
        <input placeholder="Password" className="register-input" type="password" />
        <input placeholder="Confirm password" className="register-input" type="password" />
        <button className="register-button">Sign Up</button>
        <button className="login-register-button">Login</button>
        <span className="forgot-password">Forgot password?</span>
      </div>
    </div>
  )
}
 