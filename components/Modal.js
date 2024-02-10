import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ open, closeModal, children }) {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed top-0 right-0 left-0 bottom-0 flex bg-[#0000009a] text-black items-center justify-center z-20 w-full h-screen overflow-scroll"
        >
          <motion.div
            className="w-4/5 h-full bg-[#faeddd]"
            initial={{ y: "100vh", opacity: 1 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute cursor-pointer md:right-8 md:top-8 right-4 top-4 uppercase duration-700 font-display text-3xl font-bold z-30 text-[#fecc35]"
              onClick={closeModal}
            >
              <img className="w-[40px] md:w-[65px]" src="/close.png"/>
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
