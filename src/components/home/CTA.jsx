import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../common/Container";

function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 h-96 w-96 bg-white/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 bg-white/10 rounded-full blur-3xl" />

      {/* Floating Elements */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          top-20
          left-20
          h-24
          w-24
          rounded-full
          bg-white/10
          backdrop-blur-xl
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          bottom-20
          right-20
          h-32
          w-32
          rounded-full
          bg-white/10
          backdrop-blur-xl
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            text-center
            max-w-5xl
            mx-auto
          "
        >
          {/* Badge */}

          <motion.div
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
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              text-white
              mb-8
            "
          >
            <Icon
              icon="solar:stars-bold"
              width="20"
            />
            Let's Build Something Amazing
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              text-white
              leading-tight
            "
          >
            Transform Your Ideas
            <span className="block">
              Into Digital Success
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              text-lg
              md:text-xl
              text-white/80
              max-w-3xl
              mx-auto
              mt-8
              leading-relaxed
            "
          >
            We build modern websites, powerful web applications,
            mobile apps and custom software solutions that help
            businesses grow faster and stand out from the competition.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
              mt-12
            "
          >
            <button
              className="
                px-8
                py-4
                rounded-2xl
                bg-white
                text-slate-900
                font-bold
                hover:scale-105
                transition-all
                duration-300
                shadow-2xl
              "
            >
              Start Your Project
            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/30
                bg-white/10
                backdrop-blur-xl
                text-white
                font-bold
                hover:bg-white/20
                transition-all
                duration-300
              "
            >
              Book Free Consultation
            </button>
          </motion.div>

          {/* Stats */}

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                number: "50+",
                label: "Projects Completed",
                icon: "solar:rocket-bold-duotone",
              },
              {
                number: "20+",
                label: "Happy Clients",
                icon: "solar:users-group-rounded-bold-duotone",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: "solar:star-bold-duotone",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-3xl
                  p-8
                  text-center
                "
              >
                <Icon
                  icon={item.icon}
                  width="40"
                  className="mx-auto text-white mb-4"
                />

                <h3 className="text-5xl font-black text-white">
                  {item.number}
                </h3>

                <p className="mt-3 text-white/80">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Text */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
            }}
            className="
              mt-12
              text-white/70
              text-sm
              md:text-base
            "
          >
            Trusted by startups, businesses and growing brands worldwide.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

export default CTA;