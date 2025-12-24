"use client";
import React from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import { TaskList, TaskItem } from "@tiptap/extension-list";
import StarterKit from "@tiptap/starter-kit";
import styles from "./editor.module.css";
import { TableKit } from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-edito-store";

function Editor() {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate(props) {
      setEditor(props.editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    extensions: [
      StarterKit,
      TaskList,
      Image,
      ImageResize,
      TableKit.configure({
        table: { resizable: true },
      }),
      TaskItem.configure({
        nested: true,
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: styles.editorComponent,
        style: "padding-left: 3rem;",
      },
    },
    content: `<table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>`,
  });
  return (
    <div className={styles.container}>
      <div className={styles.editorContainer}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default Editor;
