"use client";

import { useAppDispatch } from "@/data/store/hooks";
import { useEffect, useRef, useState } from "react";
import Document from "@tiptap/extension-document";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { Editor } from "@tiptap/react";
import { updateTask } from "@/data/store/slices/ColumnSlice";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import MenuDropDown from "../MenuEditorDropDown/MenuDropDown";
interface Props {
  columnId: string;
  cardId: string;
  value: string; // current description HTML from Redux
  title: string;
}
const CustomDocument = Document.extend({
  content: "taskList",
});

const CustomTaskItem = TaskItem.extend({
  content: "inline*",
});

export default function DescriptionEditor({
  value,
  columnId,
  cardId,
  title,
}: Props) {
  const dispatch = useAppDispatch();
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [menu, setMenu] = useState({ x: 0, y: 0, visible: false });
  const menuRef = useRef<HTMLDivElement | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph,
      Text,
      TaskList,
      TaskItem.configure({
        nested: true, // allow nested checkboxes
      }),
    ],
    content: value,
    immediatelyRender: false,

    // 🔥 On every change, dispatch the new content
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      dispatch(
        updateTask({
          columnId,
          cardId,
          title,
          discription: html, // send current editor content
        })
      );
    },
  });

  // 🔄 Sync Redux value → editor content if parent updates
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);
  //To listin for right click inside editor
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // prevent default browser menu
      console.log("Right click detected!", e.clientX, e.clientY);

      // You can now open a custom menu at e.clientX / e.clientY
      // showContextMenu({ x: e.clientX, y: e.clientY });
      setMenu({ x: e.clientX, y: e.clientY, visible: true });
    };

    el.addEventListener("contextmenu", handleContextMenu);

    return () => {
      el.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenu((prev) => ({ ...prev, visible: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={editorRef}>
      <EditorContent
        editor={editor}
        className="border rounded-md p-2 bg-white dark:bg-gray-200 dark:text-black"
      />

      {menu.visible && (
        <MenuDropDown editor={editor} MenuRef={menuRef} menu={menu} />
      )}
    </div>
  );
}
