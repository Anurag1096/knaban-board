import { useState } from "react";

interface Props {
  onSubmit: (message: string) => void;
}

export default function CommentsInput({ onSubmit }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSubmit(text);
    setText("");
  };

  return (
    <div className="flex gap-3 items-start">
      <textarea
        className="flex-1 p-2 border rounded-lg bg-white dark:bg-gray-900"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
