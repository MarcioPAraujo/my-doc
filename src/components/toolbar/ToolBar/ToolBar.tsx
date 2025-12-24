"use client";
import Icon from "@/components/Icons/Icons";
import styles from "./ToolBar.module.css";
import ToolBarButton from "../ToolBarButton/ToolBarButton";
import { useEditorStore } from "@/store/use-edito-store";

interface IToolbarItems {
  label: string;
  onClick: () => void;
  icon: React.JSX.Element;
  selected?: boolean;
  disabled?: boolean;
}

const ToolBar = () => {
  const { editor } = useEditorStore();
  const toolbarItems: IToolbarItems[][] = [
    [
      {
        label: "Undo",
        onClick: () => editor?.chain().focus().undo().run(),
        icon: <Icon iconName="undo" color="#0a0a0a" />,
      },
    ],
  ];
  return (
    <div className={styles.toolbar}>
      {toolbarItems[0].map((item) => (
        <ToolBarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
export default ToolBar;
