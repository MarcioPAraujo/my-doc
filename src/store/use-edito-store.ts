import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface EditoStore {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditoStore>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
