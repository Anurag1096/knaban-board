interface TextState {
  text: string;
  handleInput: (e: React.FormEvent<HTMLDivElement>) => void;
  styleobj?: React.CSSProperties;
}

const TextEditable = ({
  text,
  handleInput,
  styleobj = {
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "4px",
    minHeight: "24px",
  },
}: TextState) => {
  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={handleInput}
      style={styleobj}
    >
      {text}
    </div>
  );
};

export default TextEditable;
