import { IconType } from "react-icons";
import {
  BsPrinter,
  BsArrow90DegLeft,
  BsArrow90DegRight,
  BsSpellcheck,
  BsType,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsChatLeftText,
  BsListTask,
} from "react-icons/bs";
import { TbClearFormatting } from "react-icons/tb";

type TIcons = {
  undo: IconType;
  redo: IconType;
  printer: IconType;
  spellcheck: IconType;
  font: IconType;
  bold: IconType;
  italic: IconType;
  underline: IconType;
  comment: IconType;
  tasklist: IconType;
  clearFormatting: IconType;
};
interface IIconProps {
  size?: number;
  color?: string;
  iconName: keyof TIcons;
}

const Icons: Record<string, IconType> = {
  undo: BsArrow90DegLeft,
  redo: BsArrow90DegRight,
  printer: BsPrinter,
  spellcheck: BsSpellcheck,
  font: BsType,
  bold: BsTypeBold,
  italic: BsTypeItalic,
  underline: BsTypeUnderline,
  comment: BsChatLeftText,
  tasklist: BsListTask,
  clearFormatting: TbClearFormatting,
};

const Icon: React.FC<IIconProps> = ({ size, color, iconName }) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent size={size} color={color} />;
};
export default Icon;
