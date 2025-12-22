import Modal from "../Modal/Modal";
import { useAppDispatch } from "@/data/store/hooks";
import { deleteBoard } from "@/data/store/slices/BoardSlice";
import { Button } from "../Button/Button";
interface Props {
  boardId: string;

  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteBoard({
  boardId,

  isOpen,
  onClose,
}: Props) {
  const dispatch = useAppDispatch();

  function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    dispatch(deleteBoard({ id: boardId }));
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <p>Are you sure you want to delete this Board</p>
          <Button onClick={handleDelete} variant="primary">
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
