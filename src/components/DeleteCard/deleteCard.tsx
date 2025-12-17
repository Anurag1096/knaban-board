import Modal from "../Modal/Modal";
import { useAppDispatch } from "@/data/store/hooks";
import { deleteTask } from "@/data/store/slices/ColumnSlice";
import { Button } from "../Button/Button";
interface Props {
  columnId: string;
  cardId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteCard({
  columnId,
  cardId,
  isOpen,
  onClose,
}: Props) {
  const dispatch = useAppDispatch();

  function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    console.log(cardId)
    // dispatch(deleteTask({ columnId, cardId }));
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <p>Are you sure you want to delete this card</p>
          <Button onClick={handleDelete} variant="primary">
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
