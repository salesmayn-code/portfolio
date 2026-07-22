"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
export function AnimatedWrapper({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
