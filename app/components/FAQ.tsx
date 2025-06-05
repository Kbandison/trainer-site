"use client";
import { useState } from "react";
import {
  IconCalendarEvent,
  IconDeviceMobile,
  IconRocket,
  IconAdjustments,
  IconChevronDown,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a session?",
    answer:
      "Use the contact form above or click the 'Book Now' button to get started. I’ll get back to you ASAP with all the details.",
    icon: <IconCalendarEvent size={22} className="text-accent" />,
  },
  {
    question: "Is everything mobile-friendly?",
    answer:
      "Absolutely. Every page, form, and gallery looks and works great on any device—phone, tablet, or desktop.",
    icon: <IconDeviceMobile size={22} className="text-accent" />,
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Every client is unique, but most see tangible results within a few weeks if you stick to the plan!",
    icon: <IconRocket size={22} className="text-accent" />,
  },
  {
    question: "Can I customize my program?",
    answer:
      "Yes! All plans are tailored to your needs, preferences, and goals. Just let me know what you’re after.",
    icon: <IconAdjustments size={22} className="text-accent" />,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string>("");

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-black/80 to-brand/20 py-12 px-0">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-brand mb-10 drop-shadow">
          Frequently Asked Questions
        </h2>
        <div
          className="w-full h-full glass-aceternity spotlight-aceternity border border-brand/25 shadow-2xl
            p-4 sm:p-16 rounded-2xl
            ring-2 ring-[#FFFFFF11] ring-inset
            backdrop-blur-[8px]"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.09) 20%, rgba(0,234,255,0.06) 80%)",
            boxShadow:
              "0 4px 64px 0 rgba(0,234,255,0.12), 0 4px 18px 0 rgba(127,0,255,0.10)",
            border: "1.5px solid rgba(0,234,255,0.15)",
          }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={open}
            onValueChange={setOpen}
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="py-6 px-2 sm:px-4 group flex items-center justify-between focus:outline-none [>svg]:hidden">
                  <span className="flex items-center gap-3 font-bold text-accent text-lg sm:text-xl">
                    {faq.icon}
                    {faq.question}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{
                      rotate: open === `item-${i}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.26 }}
                    className="ml-4"
                  >
                    <IconChevronDown
                      size={26}
                      className={`transition-colors ${
                        open === `item-${i}`
                          ? "text-brand"
                          : "text-white/60 group-hover:text-accent"
                      }`}
                    />
                  </motion.span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base sm:text-lg text-white/90 border-l-2 border-brand/20 pl-4 ml-2 mt-2 transition-all duration-300">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
