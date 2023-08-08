import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Logout = () => {
  const logout = async () => {
    toast.success("Exiting...");
    await signOut(auth);
    setTimeout(() => {
      window.location = "/";
    }, 2000);
  };
  return (
    <div onClick={logout}>
      <BiLogOut size={22} />
    </div>
  );
};

export default Logout;
