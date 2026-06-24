import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-[120px] md:text-[180px] font-black text-white">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-5 text-white/70 max-w-xl mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-10
            px-8
            py-4
            rounded-2xl
            font-bold
            text-white
            bg-gradient-to-r
            from-blue-600
            to-purple-600
          "
        >
          Back To Home
        </Link>
      </motion.div>

    </section>
  );
}

export default NotFound;