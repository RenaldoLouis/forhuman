import { motion } from "framer-motion"

const Backdrop = ({ onClick, children }) => {
    return (
        <motion.div
            className="backdrop"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: "1" }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop;