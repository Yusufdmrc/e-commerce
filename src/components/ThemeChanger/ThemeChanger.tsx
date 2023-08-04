import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

interface ThemeChangerProps {
  mode: boolean;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ mode, setMode }) => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      if (mode) {
        root.style.backgroundColor = "#2a2f2f";
        root.style.color = "#fff";
      } else {
        root.style.backgroundColor = "#fff";
        root.style.color = "#2a2f2f";
      }
    }
  }, [mode]);

  return (
    <div onClick={() => setMode(!mode)}>
      {mode ? (
        <BsMoon className="icon" size={22} />
      ) : (
        <BsSun className="icon" size={22} />
      )}
    </div>
  );
};

export default ThemeChanger;
