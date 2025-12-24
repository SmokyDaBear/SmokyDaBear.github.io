
export function ModalWrapper({ children, closeModal }: { children: React.ReactNode; closeModal: () => void }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}