import { motion } from "framer-motion";

function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`
        max-w-4xl
        ${center ? "mx-auto text-center" : ""}
        mb-16
        lg:mb-20
      `}
    >
      {/* Subtitle */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-blue-100
          text-blue-700
          font-semibold
          text-sm
          mb-6
        "
      >
        ✦ {subtitle}
      </motion.div>

      {/* Title */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
          text-slate-900
          leading-tight
        "
      >
        {title}
      </motion.h2>

      {/* Description */}

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          className="
            mt-6
            text-lg
            text-slate-600
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default SectionTitle;