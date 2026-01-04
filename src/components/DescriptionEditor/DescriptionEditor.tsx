
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
interface Props{
    value:string;
    id:string;
    name:string;
    onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=> void;
}
export default function DescriptionEditor({ value, onChange, id,name}:Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <EditorContent
     id={id}
     name={name}
      editor={editor}
      className="border rounded-md p-2 bg-white dark:bg-gray-900"
    />
  );
}

