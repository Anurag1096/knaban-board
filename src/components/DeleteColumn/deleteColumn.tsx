import Modal from "../Modal/Modal";
import { useAppDispatch } from "@/data/store/hooks";
import { deleteColumn } from "@/data/store/slices/ColumnSlice";
import { Button } from "../Button/Button";
interface Props {
  columnId: string;

  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteColumn({
  columnId,

  isOpen,
  onClose,
}: Props) {
  const dispatch = useAppDispatch();

  function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    console.log(columnId)
    dispatch(deleteColumn({ columnId }));
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <p>Are you sure you want to delete this column</p>
          <Button onClick={handleDelete} variant="primary">
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
