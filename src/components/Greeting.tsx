"use client";
import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center mb-6 px-4"
    >
      <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mt-4 mb-2">
        WE ARE STAND.
      </h1>
      <div className="text-base md:text-lg italic text-gray-600 tracking-widest mb-3">
        HAIR &nbsp; FASHION &nbsp; MUSIC　←これ考えて教えて
      </div>
      <p>
        Giving beauty shape through styling hair, painting, creating music.<br />
        In the scope of the darkest depths of the ocean and the mountain&apos;s sea of trees, such actions are insignificant.<br />
        But with man&apos;s admiration and appreciation, meaning is found for the first time.←上に同じく<br />
        <span className="block mt-2">Cyndy so loud.</span>
      </p>
    </motion.section>
  );
}
