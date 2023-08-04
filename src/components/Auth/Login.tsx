import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <div>
      <FiLogIn onClick={() => (window.location.href = `auth/`)} />
    </div>
  );
};

export default Login;
