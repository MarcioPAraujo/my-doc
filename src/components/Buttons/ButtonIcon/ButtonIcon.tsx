import { ElementType } from "react";
import styles from "./ButtonIcon.module.css";

interface IButtonIconProps {
  icon: ElementType;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}
const ButtonIcon: React.FC<IButtonIconProps> = ({
  icon: Icon,
  onClick,
  disabled = false,
  selected = false,
}) => {
  const classname = `button-icon ${selected ? "selected" : ""} ${
    styles.buttonIcon
  }`;

  return (
    <button
      type="button"
      aria-label="Button Icon"
      onClick={onClick}
      disabled={disabled}
      className={classname}
    >
      <Icon />
    </button>
  );
};
export default ButtonIcon;
