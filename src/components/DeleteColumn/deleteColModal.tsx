// The job of this modal is to render all the column list in a modal form
// it will receive all the columns

import Modal from "../Modal/Modal";
import { useState } from "react";
import { Board } from "../CreateBoard/types/BoardTypes";
import Image from "next/image";
import DeleteColumn from "./deleteColumn";
interface Props {
  columns: Board[];
  openColModal: boolean;
  closeColModal: () => void;
}
export default function DeletColModla({
  columns,
  openColModal,
  closeColModal,
}: Props) {
  const [openDeleteId, setOpenDeleteId] = useState<string | null>(null);
  function handleClickOpen(columnId: string) {
    setOpenDeleteId(columnId);
  }
  function handleClickClose() {
    setOpenDeleteId(null);
  }

  return (
    <>
      <Modal isOpen={openColModal} onClose={closeColModal}>
        {columns.map((col) => {
          return (
            <div key={col.id} className="flex justify-between   p-8">
              <div className="w-fit">{col.name} </div>

              <div className="w-fit">
                <Image
                  src={"/delete_icon.svg"}
                  alt="delete icon"
                  width={24}
                  height={24}
                  onClick={() => handleClickOpen(col.id)}
                />
              </div>

              <DeleteColumn
                columnId={col.id}
                isOpen={openDeleteId === col.id}
                onClose={handleClickClose}
              />
            </div>
          );
        })}
      </Modal>
    </>
  );
}
