import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, scalable and high-performance web applications built with React and modern technologies.",
    icon: "solar:code-bold-duotone",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Cross-platform Android & iOS applications built using Flutter with exceptional user experiences.",
    icon: "solar:smartphone-bold-duotone",
  },
  {
    id: 3,
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive and conversion-focused interfaces designed for modern businesses.",
    icon: "solar:palette-round-bold-duotone",
  },
];

function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Effects */}

      <div className="absolute top-0 left-0 h-80 w-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 h-80 w-80 bg-purple-500/10 blur-3xl rounded-full" />

      <Container>
        <SectionTitle
          subtitle="Services"
          title="Solutions Built For Modern Businesses"
          description="From web applications to mobile apps and user experiences, we build products that help businesses grow."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* Animated Background */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-500
                  via-indigo-500
                  to-purple-500
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Content */}

              <div className="relative z-10">
                <div
                  className="
                    h-20
                    w-20
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    mb-8
                    group-hover:bg-white/20
                    transition-all
                  "
                >
                  <Icon
                    icon={service.icon}
                    width="42"
                    className="
                      text-blue-600
                      group-hover:text-white
                      transition-all
                    "
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    group-hover:text-white
                    transition-all
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    leading-relaxed
                    group-hover:text-white/90
                    transition-all
                  "
                >
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <span
                    className="
                      font-semibold
                      text-blue-600
                      group-hover:text-white
                      transition-all
                    "
                  >
                    Learn More
                  </span>

                  <Icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    className="
                      text-blue-600
                      group-hover:text-white
                      transition-all
                    "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPreview;