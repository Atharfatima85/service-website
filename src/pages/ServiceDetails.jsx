import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";
import CTA from "../components/home/CTA";

import { servicesData } from "../data/servicesData";

function ServiceDetails() {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-4xl font-bold">
          Service Not Found
        </h1>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden py-28 lg:py-36 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-purple-500/20 blur-3xl rounded-full" />

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8">
                <Icon
                  icon={service.icon}
                  width="22"
                />
                Premium Service
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                {service.title}
              </h1>

              <p className="mt-8 text-lg text-white/70 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Button>
                  Start Project
                </Button>

                <Button variant="secondary">
                  Free Consultation
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-[500px]
                  object-cover
                  rounded-[40px]
                  shadow-2xl
                "
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}

      <section className="py-24 bg-white">
        <Container>

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900">
              What's Included
            </h2>

            <p className="mt-5 text-slate-600">
              Everything needed to deliver a world-class solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                "
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                  <Icon
                    icon="solar:verified-check-bold-duotone"
                    width="28"
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}

      <section className="py-24 bg-slate-50">
        <Container>

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Our Development Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Discovery",
              "Planning",
              "Development",
              "Launch",
            ].map((step, index) => (
              <motion.div
                key={step}
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
                  delay: index * 0.15,
                }}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                "
              >
                <div className="text-5xl font-black text-blue-600 mb-5">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}

      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                value: "50+",
                label: "Projects",
              },
              {
                value: "20+",
                label: "Clients",
              },
              {
                value: "98%",
                label: "Success Rate",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  bg-gradient-to-br
                  from-blue-50
                  to-purple-50
                  rounded-3xl
                  p-10
                  text-center
                "
              >
                <h3 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {item.value}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default ServiceDetails;