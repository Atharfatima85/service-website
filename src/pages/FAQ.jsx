import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../components/common/Container";
import CTA from "../components/home/CTA";
import SectionTitle from "../components/common/SectionTitle";

const faqData = [
  {
    question: "How long does a website project take?",
    answer:
      "The timeline depends on project complexity. Most websites are completed within 2 to 6 weeks while larger custom platforms may take longer.",
  },

  {
    question: "Do you build mobile applications?",
    answer:
      "Yes. We develop Android and iOS applications using Flutter, ensuring excellent performance across both platforms.",
  },

  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can modernize your current website, improve performance, user experience and overall design quality.",
  },

  {
    question: "Do you provide maintenance support?",
    answer:
      "Yes. We offer ongoing maintenance, updates, security monitoring and performance optimization services.",
  },

  {
    question: "Will my website be SEO friendly?",
    answer:
      "Yes. Every website is built with SEO best practices including performance optimization and responsive design.",
  },

  {
    question: "Can you build custom software?",
    answer:
      "Yes. We create custom software solutions tailored to specific business requirements and workflows.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

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
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8">
              <Icon
                icon="solar:question-circle-bold-duotone"
                width="22"
              />
              Frequently Asked Questions
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Got Questions?
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                We Have Answers
              </span>
            </h1>

            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              Find answers to the most common questions about our
              services, development process and support.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Search */}

      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            subtitle="Support Center"
            title="Search Your Question"
            description="Quickly find answers to common questions."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Icon
                icon="solar:magnifer-linear"
                width="24"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-14
                  outline-none
                  focus:border-blue-500
                  shadow-lg
                "
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion */}

      <section className="pb-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-5">
            {filteredFaqs.map((faq, index) => (
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
                  delay: index * 0.08,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                "
              >
                <button
                  onClick={() =>
                    setActive(
                      active === index ? null : index
                    )
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-7
                    text-left
                  "
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate:
                        active === index ? 180 : 0,
                    }}
                  >
                    <Icon
                      icon="solar:alt-arrow-down-bold"
                      width="24"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-7 pb-7 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Help Banner */}

      <section className="pb-24 bg-white">
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600
              p-12
              lg:p-16
              text-center
              text-white
            "
          >
            <h2 className="text-4xl lg:text-6xl font-black">
              Still Have Questions?
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Our team is always ready to help you with project
              planning, development and consultation.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="/contact"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-white
                  text-slate-900
                  font-bold
                  hover:scale-105
                  transition-all
                "
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default FAQ;