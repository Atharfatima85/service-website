import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Container from "../common/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32">
      {/* Background Blur */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6"
            >
              <Icon icon="solar:stars-bold" width="20" />
              React • Flutter • Node.js
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              Build
              <span className="block text-blue-600">
                Amazing Digital
              </span>
              Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mt-8 max-w-xl"
            >
              Modern websites, mobile apps and software solutions
              built with React, Flutter, Node.js and the latest
              technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button
                className="
                  px-8 py-4
                  rounded-xl
                  bg-blue-600
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Get Started
              </button>

              <button
                className="
                  px-8 py-4
                  rounded-xl
                  border-2
                  border-gray-300
                  font-semibold
                  hover:border-blue-600
                  hover:text-blue-600
                  transition-all
                "
              >
                View Projects
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-14"
            >
              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-gray-500">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-gray-500">Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">4+</h3>
                <p className="text-gray-500">Years Learning</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="
                h-[500px]
                rounded-[40px]
                bg-gradient-to-br
                from-blue-600
                via-indigo-600
                to-purple-600
                shadow-2xl
                flex
                items-center
                justify-center
              "
            >
              <Icon
                icon="solar:code-bold-duotone"
                width="220"
                className="text-white"
              />
            </div>

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                absolute
                -top-8
                -left-8
                bg-white
                rounded-2xl
                p-5
                shadow-xl
              "
            >
              <Icon
                icon="logos:react"
                width="50"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                absolute
                -bottom-8
                -right-8
                bg-white
                rounded-2xl
                p-5
                shadow-xl
              "
            >
              <Icon
                icon="logos:flutter"
                width="50"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;