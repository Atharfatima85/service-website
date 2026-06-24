import { NavLink } from "react-router-dom";
import Container from "../common/Container";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Athar.dev
            </h3>

            <p className="text-gray-400">
              Modern web applications,
              mobile apps and software
              solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2">
              <NavLink to="/">
                Home
              </NavLink>

              <NavLink to="/services">
                Services
              </NavLink>

              <NavLink to="/about">
                About
              </NavLink>

              <NavLink to="/contact">
                Contact
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Legal
            </h4>

            <div className="flex flex-col gap-2">
              <NavLink to="/privacy-policy">
                Privacy Policy
              </NavLink>

              <NavLink to="/terms-conditions">
                Terms & Conditions
              </NavLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
          © 2026 Athar.dev. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;