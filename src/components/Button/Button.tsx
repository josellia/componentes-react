import * as React from "react";
import "./styles.scss";

interface IContainer {
  buttons?: Array<string>;
  title?: string;
  color?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
}

const ContainerTitleButtons: React.FC<IContainer> = ({ buttons, title }) => {
  return (
    <div className="container-header">
      <h1 className="container-title">{title}</h1>
      {buttons?.map((buttonLabel: string, index: number) => (
        <button className="btn" key={index} name={buttonLabel}>
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default ContainerTitleButtons;
