import { motion } from "framer-motion";
import Container from "../components/common/Container";

function PrivacyPolicy() {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl"
        >
          <h1 className="text-5xl font-black mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Information We Collect
              </h2>

              <p>
                We may collect personal information such as your
                name, email address, phone number and project
                details when you submit our contact form.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                How We Use Information
              </h2>

              <p>
                We use the information to respond to inquiries,
                improve our services and communicate regarding
                projects and updates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Data Security
              </h2>

              <p>
                We implement appropriate security measures to
                protect your information from unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Contact Us
              </h2>

              <p>
                If you have questions regarding this Privacy
                Policy, please contact us through our Contact page.
              </p>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default PrivacyPolicy;