import "./auth.css";
import { ChangeEvent, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { toast } from "react-toastify";

const Auth: React.FC = () => {
  const [register, setRegister] = useState<boolean>(true);
  const [authData, setAuthData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const onChangee = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };

  const authFunc = async () => {
    if (register) {
      try {
        const data: UserCredential = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          toast.success("Registered");
          setTimeout(() => {
            window.location = "/shop";
          }, 1000);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const data: UserCredential = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          toast.success("Logging in...");
          setTimeout(() => {
            window.location = "/shop";
          }, 1000);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <h2>{register ? "REGISTER" : "LOGIN"}</h2>
        <input
          onChange={onChangee}
          type="email"
          placeholder="Email"
          name="email"
          value={authData.email}
        />
        <input
          onChange={onChangee}
          type="password"
          placeholder="Password"
          name="password"
          value={authData.password}
        />
        <div className="auth-google">Login with Google</div>
        <p onClick={() => setRegister(!register)}>
          {register
            ? "Have you registered before"
            : "Would you like to register"}
        </p>
        <div onClick={authFunc} className="auth-button">
          {register ? "Register" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
