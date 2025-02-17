import './HelpModal.css';

const HelpModal = ({ isOpen, onClose, children }:any) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default HelpModal;
