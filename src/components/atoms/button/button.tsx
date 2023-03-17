import { ButtonController } from "./buttonController";

interface IBtn {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  variant: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const Btn = ({ type, text, variant, icon, onClick }: IBtn): JSX.Element => {
  const { classNames } = ButtonController();

  return (
    <button
      className={`${classNames.global} ${classNames[variant]}`}
      type={type}
      onClick={onClick && onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Btn;
