import "../styles/Modal.css";

interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ message, onConfirm, onCancel }: Props) {
  return (
    <div className="modal-overlay fade-in">
      <div className="modal-content slide-up">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm">Sí</button>
          <button onClick={onCancel} className="cancel">No</button>
        </div>
      </div>
    </div>
  );
}
