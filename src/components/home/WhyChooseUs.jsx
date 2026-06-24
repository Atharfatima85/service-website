import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    id: 1,
    icon: "solar:shield-check-bold-duotone",
    title: "Quality First",
    description:
      "Every project is developed with clean architecture, scalable code and modern development standards.",
  },
  {
    id: 2,
    icon: "solar:rocket-bold-duotone",
    title: "Fast Performance",
    description:
      "Optimized applications focused on speed, user experience and business growth.",
  },
  {
    id: 3,
    icon: "solar:code-bold-duotone",
    title: "Modern Technologies",
    description:
      "React, Next.js, Flutter, Node.js and modern tools used for future-proof solutions.",
  },
  {
    id: 4,
    icon: "solar:star-bold-duotone",
    title: "Premium Experience",
    description:
      "Beautiful UI/UX with smooth animations and pixel-perfect responsive design.",
  },
];

const stats = [
  {
    value: "50+",
    label: "Projects Built",
  },
  {
    value: "20+",
    label: "Happy Clients",
  },
  {
    value: "100%",
    label: "Responsive",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
      
      {/* Background Effects */}

      <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/10 blur-3xl rounded-full" />

      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="We Build Digital Experiences That Deliver Results"
          description="Combining modern technologies, creative thinking and performance-focused development to create exceptional digital products."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
              Building Products
              <span className="block text-blue-600">
                That Stand Out
              </span>
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We focus on creating scalable digital solutions,
              stunning interfaces and powerful user experiences.
              Every project is built with attention to detail,
              performance and long-term maintainability.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5">
              {stats.map((item, index) => (
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    bg-white
                    rounded-3xl
                    p-6
                    shadow-lg
                    border
                    border-slate-100
                  "
                >
                  <h4 className="text-4xl font-black text-blue-600">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-slate-500">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
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
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  bg-white
                  p-7
                  rounded-3xl
                  shadow-lg
                  border
                  border-slate-100
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-blue-600
                    transition-all
                    duration-500
                  "
                >
                  <Icon
                    icon={feature.icon}
                    width="34"
                    className="
                      text-blue-600
                      group-hover:text-white
                      transition-all
                    "
                  />
                </div>

                <h4
                  className="
                    text-xl
                    font-bold
                    mb-4
                  "
                >
                  {feature.title}
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;