import { motion } from "framer-motion";
import Container from "../components/common/Container";

function TermsConditions() {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl"
        >
          <h1 className="text-5xl font-black mb-8">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Acceptance of Terms
              </h2>

              <p>
                By using our website and services, you agree to
                comply with these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Services
              </h2>

              <p>
                We provide web development, mobile app development,
                UI/UX design and software solutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Intellectual Property
              </h2>

              <p>
                All content, branding and materials on this website
                remain the property of the company unless otherwise
                stated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Limitation of Liability
              </h2>

              <p>
                We are not liable for indirect damages resulting
                from the use of our website or services.
              </p>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default TermsConditions;