import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import CTA from "../components/home/CTA";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: "solar:code-bold-duotone",
  },
  {
    value: "20+",
    label: "Happy Clients",
    icon: "solar:users-group-rounded-bold-duotone",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: "solar:star-bold-duotone",
  },
  {
    value: "3+",
    label: "Years Experience",
    icon: "solar:medal-ribbons-star-bold-duotone",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We build modern solutions using the latest technologies and industry best practices.",
    icon: "solar:lightbulb-bold-duotone",
  },

  {
    title: "Quality",
    description:
      "Every project is crafted with attention to detail, performance and scalability.",
    icon: "solar:verified-check-bold-duotone",
  },

  {
    title: "Transparency",
    description:
      "Clear communication and collaboration throughout the entire project lifecycle.",
    icon: "solar:shield-check-bold-duotone",
  },

  {
    title: "Growth Focus",
    description:
      "We create digital products designed to help businesses scale and succeed.",
    icon: "solar:graph-up-bold-duotone",
  },
];

function About() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden py-28 lg:py-36 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8">
                <Icon
                  icon="solar:info-circle-bold-duotone"
                  width="22"
                />
                About Our Company
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Building Digital
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>

              <p className="mt-8 text-lg text-white/70 leading-relaxed">
                We help startups, businesses and organizations build
                powerful websites, mobile applications and software
                solutions that create real impact and measurable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="About"
                className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
              />

              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl">
                <h3 className="text-4xl font-black text-slate-900">
                  50+
                </h3>
                <p className="text-slate-600">
                  Successful Projects
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Story */}

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            subtitle="Our Story"
            title="Turning Ideas Into Digital Reality"
            description="Creating modern digital experiences through design, development and innovation."
          />

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Our mission is to help businesses grow through technology.
              From modern websites and mobile applications to custom
              software solutions, we focus on creating products that
              deliver results, improve user experience and drive
              business success.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}

      <section className="py-24 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-5">
                  <Icon
                    icon={item.icon}
                    width="30"
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-5xl font-black text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            subtitle="Core Values"
            title="What Drives Everything We Do"
            description="Strong principles behind every project and partnership."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
              >
                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon
                    icon={item.icon}
                    width="30"
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Banner */}

      <section className="py-24 bg-slate-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] p-12 lg:p-16 bg-gradient-to-r from-blue-600 to-purple-600 text-center"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white">
              Passionate About Building
              Amazing Products
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
              We combine creativity, strategy and technology to build
              digital experiences that people love to use.
            </p>
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default About;