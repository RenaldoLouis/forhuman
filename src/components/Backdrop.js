import { motion } from "framer-motion"

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
            className="backdrop"
            onclick={onClick}
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