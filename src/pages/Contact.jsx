import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import Container from "../components/common/Container";
import CTA from "../components/home/CTA";

function Contact() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

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
              🚀 Let's Work Together
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
              Get In Touch &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Build Something Amazing
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Ready to launch your next website, mobile app or custom software?
              Let's discuss your ideas and create something exceptional.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}

      <section className="py-24 bg-slate-50">
        <Container>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Side */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black text-slate-900">
                Let's Discuss
                <span className="block text-blue-600">
                  Your Project
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Whether you need a website, mobile application,
                UI/UX design or complete software solution,
                we're ready to help bring your vision to life.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4 p-5 rounded-3xl bg-white shadow-lg border">
                  <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                    📞
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Phone Number
                    </h4>
                    <p className="text-slate-600">
                      +92 300 1234567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-3xl bg-white shadow-lg border">
                  <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">
                    ✉️
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Email Address
                    </h4>
                    <p className="text-slate-600">
                      hello@company.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-3xl bg-white shadow-lg border">
                  <div className="h-14 w-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Location
                    </h4>
                    <p className="text-slate-600">
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>

              </div>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-4 mt-10">

                <div className="bg-white rounded-3xl p-5 text-center shadow-lg">
                  <h3 className="text-3xl font-black text-blue-600">
                    50+
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Projects
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-5 text-center shadow-lg">
                  <h3 className="text-3xl font-black text-purple-600">
                    20+
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Clients
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-5 text-center shadow-lg">
                  <h3 className="text-3xl font-black text-cyan-600">
                    98%
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Success
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Right Side Form */}

           <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="
    bg-white
    p-8
    rounded-[32px]
    shadow-2xl
    border
    border-slate-200
  "
>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Send Message
              </h3>

              <div className="space-y-5">

            <input
  type="text"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Full Name"
  className="
    w-full h-14 px-5 rounded-2xl
    border border-slate-200
    focus:border-blue-500
    focus:ring-4 focus:ring-blue-100
    outline-none transition-all
  "
/><input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="
    w-full h-14 px-5 rounded-2xl
    border border-slate-200
    focus:border-blue-500
    focus:ring-4 focus:ring-blue-100
    outline-none transition-all
  "
/>
       <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className="
    w-full h-14 px-5 rounded-2xl
    border border-slate-200
    focus:border-blue-500
    focus:ring-4 focus:ring-blue-100
    outline-none transition-all
  "
/>
<input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Project Type"
  className="
    w-full h-14 px-5 rounded-2xl
    border border-slate-200
    focus:border-blue-500
    focus:ring-4 focus:ring-blue-100
    outline-none transition-all
  "
/>

                <textarea  
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your project..."
  className="
    w-full p-5 rounded-2xl
    border border-slate-200
    focus:border-blue-500
    focus:ring-4 focus:ring-blue-100
    outline-none transition-all
  "
/>

                <button
  type="submit"
  className="
    w-full h-14
    rounded-2xl
    font-bold
    text-white
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-purple-600
    hover:scale-[1.02]
    transition-all
    duration-300
    shadow-xl
  "
>
  Send Message →
</button>

              </div>
            </motion.form>

          </div>

        </Container>
      </section>

      {/* Map */}

      <section className="py-20 bg-white">
        <Container>
          <div className="overflow-hidden rounded-[32px] shadow-2xl border border-slate-200">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default Contact;