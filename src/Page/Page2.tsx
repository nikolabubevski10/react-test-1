import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { useModal } from "../Modal/useModal";
import "./page2.css";

function Page2() {
  const [removedTimes, setRemovedTimes] = useState<number>(0);
  const [deleteTimes, setDeleteTimes] = useState<number>(0);
  const {
    isOpen: isCTAModalOpen,
    openModal: openCTAModal,
    closeModal: closeCTAModal,
  } = useModal();
  const {
    isOpen: isRemoveButtonModalOpen,
    openModal: openRemoveButtonModal,
    closeModal: closeRemoveButtonModal,
  } = useModal();
  const {
    isOpen: isDeleteButtonModalOpen,
    openModal: openDeleteButtonModal,
    closeModal: closeDeleteButtonModal,
  } = useModal();

  const handleRemoveButton = () => {
    setRemovedTimes(removedTimes + 1);
    closeRemoveButtonModal();
  };

  const handleDeleteButton = () => {
    setDeleteTimes(deleteTimes + 1);
    closeDeleteButtonModal();
  };

  return (
    <div className="page">
      <button onClick={openCTAModal}>Single CTA</button>
      <button onClick={openRemoveButtonModal}>Remove {removedTimes + 1}</button>
      <button onClick={openDeleteButtonModal}>Delete {deleteTimes + 1}</button>
      <Modal
        title="Information"
        isOpen={isCTAModalOpen}
        footer={<button onClick={closeCTAModal}>Ok</button>}
      >
        You have clicked the Single CTA button
      </Modal>
      <Modal
        title="Remove?"
        isOpen={isRemoveButtonModalOpen}
        footer={
          <>
            <button className="cancel__btn" onClick={closeRemoveButtonModal}>
              cancel
            </button>
            <button className="warning__btn" onClick={handleRemoveButton}>
              Remove
            </button>
          </>
        }
      >
        Are you sure you want to remove the Remove {removedTimes + 1} button?
      </Modal>
      <Modal
        title="Delete?"
        isOpen={isDeleteButtonModalOpen}
        footer={
          <>
            <button className="cancel__btn" onClick={closeDeleteButtonModal}>
              cancel
            </button>
            <button className="danger__btn" onClick={handleDeleteButton}>
              Delete
            </button>
          </>
        }
      >
        Are you sure you want to delete the Delete {deleteTimes + 1} button?
        This cannot be undone!
      </Modal>
    </div>
  );
}

export default Page2;
