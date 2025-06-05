"use client";

import { motion } from "framer-motion";
import {
  IconBell,
  IconUsers,
  IconBolt,
  IconArrowRight,
} from "@tabler/icons-react";

const services = [
  {
    title: "1-on-1 Coaching",
    desc: "Custom plans and accountability with direct access to your trainer. Results, not just routines.",
    icon: <IconBell size={38} className="text-accent" />,
    price: "$60/session",
    link: "#",
  },
  {
    title: "Group Training",
    desc: "Community-driven classes designed for all levels. Get fit, have fun, and make friends.",
    icon: <IconUsers size={38} className="text-accent" />,
    price: "$25/class",
    link: "#",
  },
  {
    title: "Performance Boost",
    desc: "Specialized programs for athletes and go-getters. Unlock your potential with science-backed training.",
    icon: <IconBolt size={38} className="text-accent" />,
    price: "$120/month",
    link: "#",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-24 services-gradient flex flex-col items-center"
    >
      <h2 className="text-4xl font-extrabold text-brand mb-14 drop-shadow">
        My Services
      </h2>
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl px-4">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.13,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center glass-aceternity spotlight-aceternity rounded-2xl shadow-2xl p-8 border border-brand/20 hover:border-brand/70 transition h-full"
          >
            {/* Pricing Badge */}
            <div className="absolute top-4 right-4 bg-accent text-black text-xs font-bold px-4 py-1 rounded-full shadow-md z-20 border-2 border-brand/20">
              {service.price}
            </div>
            <div className="mb-4 z-10">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center z-10">
              {service.title}
            </h3>
            <p className="text-base text-white/90 text-center mb-6 z-10">
              {service.desc}
            </p>
            {/* Learn More */}
            <a
              href={service.link}
              className="flex items-center gap-1 font-semibold text-accent hover:text-brand transition z-10 group"
              tabIndex={0}
            >
              Learn More
              <IconArrowRight
                size={18}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
