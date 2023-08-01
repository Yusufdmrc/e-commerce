import "./auth.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h2>REGISTER</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default Auth;
