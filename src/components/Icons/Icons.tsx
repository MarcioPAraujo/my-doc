import { IconType } from "react-icons";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";

type TIcons = {
  undo: IconType;
  redo: IconType;
};
interface IIconProps {
  size?: number;
  color?: string;
  iconName: keyof TIcons;
}

const Icons: Record<string, IconType> = {
  undo: BsArrow90DegLeft,
  redo: BsArrow90DegRight,
};

const Icon: React.FC<IIconProps> = ({ size, color, iconName }) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent size={size} color={color} />;
};
export default Icon;
