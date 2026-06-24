import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/300?img=11",
    review:
      "Working with this team was an outstanding experience. The final product exceeded expectations and delivered incredible performance.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/300?img=32",
    review:
      "Professional, creative and highly responsive. The UI/UX quality was exceptional and helped improve our conversions.",
  },
  {
    id: 3,
    name: "David Brown",
    role: "Business Owner",
    image: "https://i.pravatar.cc/300?img=51",
    review:
      "Excellent communication and technical expertise. The project was delivered on time with fantastic attention to detail.",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=47",
    review:
      "One of the best development experiences we've had. Beautiful design, smooth animations and great performance.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white">
      
      {/* Background Effects */}

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <Container>
        <SectionTitle
          subtitle="Client Success Stories"
          title="Trusted By Businesses Worldwide"
          description="We create exceptional digital experiences that help businesses grow faster and stand out from competitors."
        />

        <div className="relative mt-20 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -60,
                scale: 0.95,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                relative
                bg-white
                border
                border-slate-200
                rounded-[40px]
                p-8
                md:p-12
                shadow-2xl
              "
            >
              {/* Floating Icon */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                  absolute
                  -top-8
                  right-10
                  h-20
                  w-20
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  flex
                  items-center
                  justify-center
                  shadow-xl
                "
              >
                <Icon
                  icon="solar:chat-round-bold"
                  width="38"
                  className="text-white"
                />
              </motion.div>

              {/* Stars */}

              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    icon="solar:star-bold"
                    width="24"
                    className="text-yellow-500"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="text-xl md:text-3xl font-medium leading-relaxed text-slate-800 mb-10">
                "{testimonials[current].review}"
              </p>

              {/* User */}

              <div className="flex items-center gap-5">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="
                    h-16
                    w-16
                    rounded-full
                    object-cover
                    border-2
                    border-slate-200
                  "
                />

                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {testimonials[current].name}
                  </h4>

                  <p className="text-slate-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                className={`
                  h-3 rounded-full transition-all duration-300
                  ${
                    current === index
                      ? "w-10 bg-blue-600"
                      : "w-3 bg-slate-300"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              value: "50+",
              label: "Projects Delivered",
            },
            {
              value: "98%",
              label: "Client Satisfaction",
            },
            {
              value: "20+",
              label: "Happy Clients",
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                border
                border-slate-200
                shadow-lg
                transition-all
                duration-500
              "
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;