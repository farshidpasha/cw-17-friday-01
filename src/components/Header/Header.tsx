import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { SiTodoist } from "react-icons/si";
import Button from "../@base/Button/Button";
import Modal from "../@base/Modal/Modal";
import ModifyModalContent from "../ModifyModalContent/ModifyModalContent";
import { Itask } from "../../types/types";

interface Iheader {
  taskDispatch: (action: Itask) => void;
}

export default function Header({ handleSubmit }: Iheader) {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState({
    isOpen: false,
    id: null,
  });
  const openModal = () => {};
  const closeModifyModalHandler = () => {
    setIsModifyModalOpen({ isOpen: false, id: null });
  };
  const addTaskHandler = () => {
    setIsModifyModalOpen({ isOpen: true, id: null });
  };
  return (
    <>
      {isModifyModalOpen.isOpen && (
        <Modal
          title="Modal"
          content={
            <ModifyModalContent
              handleSubmit={handleSubmit}
              isEdit={false}
              addFunction={addTaskHandler}
              editFunction={() => {}}
            />
          }
          closeHandle={closeModifyModalHandler}
        />
      )}
      <header className="p-4 flex justify-between items-center bg-[#6200ea]">
        <div className="flex items-center gap-4">
          <SiTodoist size="36px" color="white" />
          <h1 className="text-white font-bold text-xl">ToDoist</h1>
        </div>
        <div className="flex gap-4">
          <Button
            className="w-9"
            icon={<FaPlus color="#6200ea" />}
            onClick={addTaskHandler}
          />
          <Button className="w-9" icon={<FaFilter color="#6200ea" />} />
        </div>
      </header>
    </>
  );
}
