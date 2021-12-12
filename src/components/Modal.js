import { motion } from "framer-motion"
import Backdrop from "./Backdrop"

const Modal = ({ handleClose, text }) => {
    const dropIn = {
        hidden: {
            transform: "scale(0) rotateX(-360deg)",
            opacity: 0,
            transition: {
                delay: 0.3,
            },
        },
        visible: {
            transform: " scale(1) rotateX(0deg)",
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            transform: "scale(0) rotateX(360deg)",
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const ModalText = ({ text }) => (
        <div className="modal-text">
            <h3>{text}</h3>
            <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
                expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique
                eos id. Porro, culpa? Officiis, placeat?
            </h5>
        </div>
    );

    const ModalButton = ({ onClick, label }) => (
        <motion.button
            className="modal-button"
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            {label}
        </motion.button>
    );

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                drag
                onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ zIndex: "2", display: "" }}
            >
                <ModalText text="testing TExt" />
                <ModalButton onClick={handleClose} label="Close" />
            </motion.div>
        </Backdrop>
    )
}

export default Modal;