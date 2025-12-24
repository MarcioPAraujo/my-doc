import styles from "./toolbarButton.module.css";

interface IToolBarButtonProps {
  icon: React.JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

const ToolBarButton: React.FC<IToolBarButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  selected = false,
}) => {
  const className = `toolbar-button ${selected ? "selected" : ""} ${
    styles.toolbarButton
  }`;

  return (
    <button
      type="button"
      aria-label="Tool Bar Button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {icon}
    </button>
  );
};

export default ToolBarButton;
