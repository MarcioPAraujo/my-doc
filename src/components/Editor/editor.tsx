"use client";
import React from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import { TaskList, TaskItem } from "@tiptap/extension-list";
import StarterKit from "@tiptap/starter-kit";
import styles from "./editor.module.css";

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: "<p>Hello World! 🌍</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: styles.editorComponent,
        style: "padding-left: 3rem;",
      },
    },
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
