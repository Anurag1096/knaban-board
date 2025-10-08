interface ParagraphState {
  paragraph?: string;
  handleParaInput?: (e: React.FormEvent<HTMLElement>) => void;
  styleObj?: React.CSSProperties;
}

const Paragraph = ({
  paragraph = "Add Text for paragraph",
  handleParaInput,
  styleObj = {
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "4px",
    minHeight: "24px",
  },
}: ParagraphState) => {
  return (
    <p
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={handleParaInput}
      style={styleObj}
    >
      {paragraph}
    </p>
  );
};

export default Paragraph;
