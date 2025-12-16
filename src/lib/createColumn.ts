interface ColumnProps {
  name: string;
  id:string;
}

export default function createColumn({ name,id }: ColumnProps) {
  return {
    id,
    name,
    cards: [],
    createdAt: Date.now(),
  };
}
