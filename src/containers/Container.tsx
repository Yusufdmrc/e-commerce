import React, { ReactNode } from "react";
import "./container.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Container;
