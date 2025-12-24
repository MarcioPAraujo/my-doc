"use client";
import Icon from "@/components/Icons/ToolbarIcons";
import styles from "./ToolBar.module.css";
import ToolBarButton from "../ToolBarButton/ToolBarButton";
import { useEditorStore } from "@/store/use-edito-store";
import Separator from "../Separator/Separator";

interface IToolbarItems {
  label: string;
  onClick: () => void;
  icon: React.JSX.Element;
  selected?: boolean;
  disabled?: boolean;
}
const ICON_SIZE = 16;

const ToolBar = () => {
  const { editor } = useEditorStore();
  const toolbarItems: IToolbarItems[][] = [
    [
      {
        label: "Undo",
        onClick: () => editor?.chain().focus().undo().run(),
        icon: <Icon iconName="undo" size={ICON_SIZE} />,
      },
      {
        label: "Redo",
        onClick: () => editor?.chain().focus().redo().run(),
        icon: <Icon iconName="redo" size={ICON_SIZE} />,
      },
      {
        label: "Print",
        onClick: () => window.print(),
        icon: <Icon iconName="printer" size={ICON_SIZE} />,
      },
      {
        label: "Spell Check",
        onClick: () => {
          const curr = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            curr === "false" ? "true" : "false"
          );
        },
        icon: <Icon iconName="spellcheck" size={ICON_SIZE} />,
      },
    ],
    [
      {
        label: "Font",
        onClick: () => console.log("Font button clicked"),
        icon: <Icon iconName="font" size={ICON_SIZE} />,
      },
      {
        label: "Bold",
        onClick: () => editor?.chain().focus().toggleBold().run(),
        selected: editor?.isActive("bold") || false,
        icon: <Icon iconName="bold" size={ICON_SIZE} />,
      },
      {
        label: "Italic",
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        selected: editor?.isActive("italic") || false,
        icon: <Icon iconName="italic" size={ICON_SIZE} />,
      },
      {
        label: "Underline",
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        selected: editor?.isActive("underline") || false,
        icon: <Icon iconName="underline" size={ICON_SIZE} />,
      },
    ],
    [
      {
        label: "Comment",
        onClick: () => console.log("Comment button clicked"),
        icon: <Icon iconName="comment" size={ICON_SIZE} />,
      },
      {
        label: "Todo List",
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        selected: editor?.isActive("taskList") || false,
        icon: <Icon iconName="tasklist" size={ICON_SIZE} />,
      },
      {
        label: "Remove Formatting",
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
        icon: <Icon iconName="clearFormatting" size={ICON_SIZE} />,
      },
    ],
  ];
  return (
    <div className={styles.toolbar}>
      {toolbarItems[0].map((item) => (
        <abbr title={item.label} key={item.label}>
          <ToolBarButton key={item.label} {...item} />
        </abbr>
      ))}
      <Separator />
      {toolbarItems[1].map((item) => (
        <abbr title={item.label} key={item.label}>
          <ToolBarButton key={item.label} {...item} />
        </abbr>
      ))}
      <Separator />
      {toolbarItems[2].map((item) => (
        <abbr title={item.label} key={item.label}>
          <ToolBarButton key={item.label} {...item} />
        </abbr>
      ))}
    </div>
  );
};
export default ToolBar;
