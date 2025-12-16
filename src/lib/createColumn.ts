interface ColumnProps {
  name: string;
}

export default function createColumn({ name }: ColumnProps) {
  return {
    id: crypto.randomUUID,
    name,
    cards: [],
    createdAt: Date.now(),
  };
}
