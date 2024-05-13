import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Example = () => {
    useEffect(() => {
        AOS.init({
          offset: 1,
          duration: 300,
        });
      }, []);
    
  return (
    <div style={{fontSize: "13px", display:"flex", alignItems:"center"}} className="flex mr-7 font-medium py-0 pb-3">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
      SMART WATCHES
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: showFlyout ? "left" : "right", 
              height: "0.05rem"
            }}
            className="absolute -bottom-0 -left-0 -right-1 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out"
          />
        </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div style={{zIndex: "999 !important"}} className="w-64 bg-white p-6 shadow-xl">
      <div data-aos="fade-up" className="mb-3 space-y-3">
        <a href="#" className="block text-sm hover:underline">
          Luxe Edition
        </a>
        <a href="#" className="block text-sm hover:underline">
          Value Edition
        </a>
      </div>
      <div data-aos="fade-up" className="mb-6 space-y-3">
        <a href="#" className="block text-sm hover:underline">
          Women's Edition
        </a>
      </div>
      <button data-aos="fade-up" className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        View All
      </button>
    </div>
  );
};

export default Example;