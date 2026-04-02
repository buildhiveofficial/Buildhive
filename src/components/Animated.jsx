import { motion } from "framer-motion";

const AnimatedSection = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
