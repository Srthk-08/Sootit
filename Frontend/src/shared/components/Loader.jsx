import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-neutral-950"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-16 w-16 bg-white border border-slate-100 dark:bg-neutral-900 overflow-hidden flex items-center justify-center shadow-lg"
        >
          <img src={logo} alt="S" className="w-10 h-10 object-contain" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-bold text-neutral-800 dark:text-white tracking-widest uppercase"
        >
          Sootit
        </motion.h2>
        <div className="mt-2 h-1 w-32 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0.5
            }}
            className="h-full bg-slate-900 dark:bg-slate-700"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
