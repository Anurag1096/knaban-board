interface TextState {
  text?: string;// will be a react state;
  handleInput?: (e: React.FormEvent<HTMLDivElement>) => void;
  styleobj?: React.CSSProperties;
}

const TextEditable = ({
  text="Add text",
  handleInput =()=> alert("Will run when you edit "),
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
