import { useEditorState } from "@tiptap/react";
import type { Editor } from "@tiptap/react";
import { useState, useRef,useEffect } from "react";
export default function MenuDropDown({
  editor,
  MenuRef,
  menu,
  secondMenu,
  handleSecMenu,
}: {
  editor: Editor;
  MenuRef: React.RefObject<HTMLDivElement>;
  menu: { y: string; x: string; visible: boolean };
  secondMenu: boolean;
  handleSecMenu: () => void;
}) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isTaskList: ctx.editor.isActive("taskList"),
        canTaskList: ctx.editor.can().chain().toggleTaskList().run(),
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        isCode: ctx.editor.isActive("code") ?? false,
        canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
        canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
        isParagraph: ctx.editor.isActive("paragraph") ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
        isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
        isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
      };
    },
  });
  const EditPos = useRef<HTMLDivElement | null>(null);
  const [divHeight,setDivHeight]=useState({top:0,left:0})
  console.log("positon of the element", EditPos.current?.clientHeight);
  useEffect(()=>{
    if(!EditPos.current) return
    const rect = EditPos.current.getBoundingClientRect();
    setDivHeight({top:rect.top,left:rect.right})
    
  },[EditPos])
  return (
    <div
      ref={MenuRef}
      style={{ position: "fixed", top: menu.y, left: menu.x }}
      className="bg-white border shadow-md p-2 rounded "
      onMouseDown={(e) => e.stopPropagation()}
    >
      {secondMenu && (
        <div
          style={{ position: "fixed", top: divHeight.top, left:divHeight.left }}
          className="bg-white border shadow-md p-2 rounded"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Start of second menu */}
          <div>
            <button
              className="hover:cursor-pointer hover:bg-amber-100"
              onClick={() => alert("jioi")}
            >
              Bullets
            </button>
          </div>
          <div>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editorState.canBold}
              className={
                editorState.isBold
                  ? "hover:cursor-pointer hover:bg-red-300 bg-amber-100"
                  : "hover:cursor-pointer hover:bg-amber-300 "
              }
            >
              Bold
            </button>
          </div>
          <div>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editorState.canItalic}
              className={
                editorState.isItalic
                  ? "hover:cursor-pointer hover:bg-red-300 bg-amber-100"
                  : "hover:cursor-pointer hover:bg-amber-300 "
              }
            >
              Italic
            </button>
          </div>
          <div>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editorState.canStrike}
              className={
                editorState.isStrike
                  ? "hover:cursor-pointer hover:bg-red-300 bg-amber-100"
                  : "hover:cursor-pointer hover:bg-amber-300 "
              }
            >
              Strike
            </button>
          </div>
          <div>
            <button
              onClick={() => editor.chain().focus().setParagraph().run()}
              className={
                editorState.isParagraph
                  ? "hover:cursor-pointer hover:bg-red-300 bg-amber-100"
                  : "hover:cursor-pointer hover:bg-amber-300 "
              }
            >
              Paragraph
            </button>
          </div>

          <div>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={
                editorState.isBulletList
                  ? "hover:cursor-pointer hover:bg-red-300 bg-amber-100"
                  : "hover:cursor-pointer hover:bg-red-300"
              }
            >
              Bullet list
            </button>
          </div>
          <div>
            <button
              onClick={() => editor.chain().focus().setCodeBlock().run()}
              className={
                editorState.isCodeBlock
                  ? "hover:cursor-pointer hover:bg-red-300 bg-amber-100"
                  : "hover:cursor-pointer hover:bg-amber-300 "
              }
            >
              Code block
            </button>
          </div>
          <div>
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={
                editorState.isTaskList
                  ? "bg-amber-300 hover:bg-red-300 cursor-pointer px-2 py-1 rounded"
                  : "bg-gray-200 hover:bg-amber-300 cursor-pointer px-2 py-1 rounded"
              }
            >
              Checkbox
            </button>
          </div>
          {/* end of second menu */}
        </div>
      )}
      <div>
        <button>New button</button>
      </div>
        <div ref={EditPos}>
        <button
          onClick={handleSecMenu}
          className={
            "bg-amber-300 hover:bg-red-300 cursor-pointer px-2 py-1 rounded"
          }
        >
          Edit menu
        </button>
      </div>
      <div>
        <button>New button</button>
      </div>
      <div>
        <button>New button</button>
      </div>
      <div>
        <button>New button</button>
      </div>
    
    </div>
  );
}
