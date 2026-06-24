import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

function Button({
  children,
  variant = "primary",
  icon = true,
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl",

    secondary:
      "bg-white border border-slate-200 text-slate-900 shadow-lg",

    glass:
      "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
        inline-flex
        items-center
        gap-3
        px-7
        py-4
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        ${styles[variant]}
      `}
    >
      {children}

      {icon && (
        <Icon
          icon="solar:arrow-right-linear"
          width="20"
        />
      )}
    </motion.button>
  );
}

export default Button;