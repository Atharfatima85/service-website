import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import CTA from "../components/home/CTA";

const services = [
  {
    slug: "web-development",
    icon: "solar:code-bold-duotone",
    title: "Web Development",
    description:
      "Modern, scalable and high-performance websites built using React, Next.js and the latest technologies.",
  },

  {
    slug: "mobile-app-development",
    icon: "solar:smartphone-bold-duotone",
    title: "Mobile App Development",
    description:
      "Cross-platform Android & iOS applications built with Flutter and modern architecture.",
  },

  {
    slug: "ui-ux-design",
    icon: "solar:palette-bold-duotone",
    title: "UI / UX Design",
    description:
      "Beautiful user experiences and interfaces designed to increase engagement and conversions.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Flutter",
  "Firebase",
  "Tailwind CSS",
  "WordPress",
  "JavaScript",
];

function Services() {
  return (
    <>
      {/* Hero Section */}

      <section className="relative overflow-hidden py-28 lg:py-36 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8">
              Premium Software Solutions
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Services That Help
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Businesses Grow
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed">
              We build websites, mobile applications and digital experiences
              that drive growth, improve performance and create lasting impact.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="What We Can Build For You"
            description="Premium digital solutions designed for startups, businesses and enterprises."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className="
                    relative
                    overflow-hidden
                    group
                    bg-white
                    border
                    border-slate-200
                    rounded-3xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-500
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <Icon
                        icon={service.icon}
                        width="34"
                        className="text-blue-600"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      Learn More

                      <Icon
                        icon="solar:arrow-right-linear"
                        width="20"
                        className="group-hover:translate-x-1 transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}

      <section className="py-24 bg-slate-50">
        <Container>
          <SectionTitle
            subtitle="Technology Stack"
            title="Technologies We Use"
            description="Modern technologies for scalable and future-ready digital products."
          />

          <div className="flex flex-wrap justify-center gap-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                  px-6
                  py-4
                  rounded-2xl
                  bg-white
                  border
                  border-slate-200
                  shadow-md
                  font-semibold
                  text-slate-700
                "
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            subtitle="Why Choose Us"
            title="Delivering More Than Just Code"
            description="We focus on quality, performance, user experience and long-term success."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Delivery",
                icon: "solar:rocket-bold-duotone",
              },

              {
                title: "Scalable Architecture",
                icon: "solar:server-bold-duotone",
              },

              {
                title: "Premium UI/UX Design",
                icon: "solar:palette-bold-duotone",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
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
                whileHover={{
                  y: -10,
                }}
                className="
                  rounded-3xl
                  p-8
                  bg-gradient-to-br
                  from-blue-50
                  to-purple-50
                  border
                  border-slate-200
                "
              >
                <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-6">
                  <Icon
                    icon={item.icon}
                    width="32"
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  Professional development process focused on quality,
                  performance, scalability and user satisfaction.
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default Services;