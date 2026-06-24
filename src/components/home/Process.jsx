import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description:
      "Understanding project goals, business requirements and user needs before starting development.",
    icon: "solar:clipboard-list-bold-duotone",
  },
  {
    id: "02",
    title: "Design & Planning",
    description:
      "Creating wireframes, UI concepts and technical architecture for a smooth development process.",
    icon: "solar:pen-new-square-bold-duotone",
  },
  {
    id: "03",
    title: "Development",
    description:
      "Building scalable, responsive and high-performance applications using modern technologies.",
    icon: "solar:code-bold-duotone",
  },
  {
    id: "04",
    title: "Testing & Launch",
    description:
      "Quality assurance, optimization and deployment to deliver a reliable final product.",
    icon: "solar:rocket-bold-duotone",
  },
];

function Process() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      
      {/* Background Effects */}

      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <Container>
        <SectionTitle
          subtitle="Our Process"
          title="How We Transform Ideas Into Products"
          description="A proven process focused on quality, innovation and delivering exceptional digital experiences."
        />

        <div className="relative max-w-6xl mx-auto">

          {/* Center Line Desktop */}

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" />

          <div className="space-y-16">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`
                  relative
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  gap-10
                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >
                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    w-full
                    lg:w-[45%]
                    bg-white
                    border
                    border-slate-100
                    rounded-[32px]
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-500
                  "
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="
                        h-16
                        w-16
                        rounded-2xl
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        icon={step.icon}
                        width="34"
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="text-blue-600 font-bold">
                        Step {step.id}
                      </p>

                      <h3 className="text-2xl font-bold">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Center Circle */}

                <div
                  className="
                    hidden
                    lg:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    h-20
                    w-20
                    rounded-full
                    bg-white
                    border-4
                    border-blue-500
                    shadow-xl
                    items-center
                    justify-center
                    z-10
                  "
                >
                  <span className="font-black text-xl text-blue-600">
                    {step.id}
                  </span>
                </div>

                {/* Spacer */}

                <div className="hidden lg:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <motion.div
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
            duration: 0.8,
          }}
          className="
            mt-24
            text-center
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            rounded-[40px]
            p-10
            lg:p-16
            text-white
          "
        >
          <h3 className="text-3xl lg:text-5xl font-black mb-5">
            Ready To Build Something Amazing?
          </h3>

          <p className="max-w-2xl mx-auto text-white/90">
            Let's turn your ideas into high-performance digital
            products with modern technologies and exceptional design.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Process;