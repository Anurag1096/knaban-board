"use client";

import { useAppDispatch } from "@/data/store/hooks";
import { useEffect } from "react";
import Document from '@tiptap/extension-document'
import { EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { updateTask } from "@/data/store/slices/ColumnSlice";
import { TaskItem, TaskList } from '@tiptap/extension-list'
interface Props {
  columnId: string;
  cardId: string;
  value: string; // current description HTML from Redux
  title: string; 
}
const CustomDocument = Document.extend({
  content: 'taskList',
})

const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})
export default function DescriptionEditor({ value, columnId, cardId, title }: Props) {
  const dispatch = useAppDispatch();

  const editor = useEditor({
    extensions: [StarterKit,CustomDocument, TaskList, CustomTaskItem],
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

  return (
    <EditorContent
      editor={editor}
      className="border rounded-md p-2 bg-white dark:bg-gray-500 dark:text-white"
    />
  );
}
