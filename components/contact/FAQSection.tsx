"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  ChevronDown,
  CircleHelp,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

/* =====================================================
   FAQ DATA
===================================================== */

const faqs = [
  {
    id: 1,
    category: "Custom Cakes",
    question: "Do you make custom cakes?",
    answer:
      "Yes. You can share your celebration type, preferred cake size, flavour, theme, colours and design requirements through our custom cake enquiry.",
  },
  {
    id: 2,
    category: "Cake Options",
    question: "Do you have eggless cakes?",
    answer:
      "Eggless preference can be included while submitting your cake enquiry. Availability can depend on the selected cake, flavour and other requirements.",
  },
  {
    id: 3,
    category: "Ordering",
    question: "How early should I order a custom cake?",
    answer:
      "It is better to enquire in advance, especially for detailed custom, designer or celebration cakes. The required preparation time can vary depending on the design and size.",
  },
  {
    id: 4,
    category: "Delivery",
    question: "Do you offer cake delivery?",
    answer:
      "Delivery availability can depend on your location, order type and selected delivery date. Contact the bakery with your delivery details to confirm availability.",
  },
  {
    id: 5,
    category: "Design",
    question: "Can I choose my own cake design?",
    answer:
      "Yes. You can describe your preferred theme, colours, decoration and other design ideas while sending a custom cake enquiry.",
  },
  {
    id: 6,
    category: "Reference",
    question: "Can I send a reference image for my cake?",
    answer:
      "Yes. A reference image can help explain the style and design you are looking for. The final result may vary depending on size, ingredients and practical design requirements.",
  },
  {
    id: 7,
    category: "Bulk Orders",
    question: "Do you accept bulk bakery orders?",
    answer:
      "You can contact us regarding bulk requirements for cakes, cupcakes, pastries, cookies or other bakery products. Availability and preparation time can depend on the quantity.",
  },
  {
    id: 8,
    category: "Order Support",
    question: "How can I ask about an existing order?",
    answer:
      "Use the contact form and select the relevant enquiry type, or contact the bakery directly. Include your order details so the enquiry can be identified easily.",
  },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveFaq((current) => (current === id ? null : id));
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fffdfb]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[80px]
          h-[450px]
          w-[450px]
          rounded-full
          border
          border-[#9a1e2f]/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[230px]
          -right-[180px]
          h-[470px]
          w-[470px]
          rounded-full
          border
          border-[#9a1e2f]/[0.05]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
            className="lg:sticky lg:top-[120px] lg:self-start"
          >
            {/* LABEL */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#ead8d2]
                bg-[#fff7f4]
                px-4
                py-2
              "
            >
              <CircleHelp
                size={12}
                className="text-[#9a1e2f]"
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2.4px]
                  text-[#9a1e2f]
                "
              >
                Frequently Asked Questions
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[500px]
                font-serif
                text-[36px]
                font-medium
                leading-[1.07]
                tracking-[-1px]
                text-[#281b18]

                sm:text-[44px]
                lg:text-[50px]
              "
            >
              A Few Things You
              <br />

              <span className="italic text-[#9a1e2f]">
                Might Want To Know.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[430px]
                text-[11px]
                leading-6
                text-[#806d67]

                sm:text-[12px]
              "
            >
              Find quick answers about custom cakes, orders,
              delivery and bakery enquiries. If you still need
              help, you can send us a message.
            </p>

            {/* =========================================
                HELP CARD
            ========================================== */}

            <div
              className="
                relative
                mt-8
                overflow-hidden
                rounded-[24px]
                bg-[#281916]
                p-6
                text-white
              "
            >
              {/* DECORATION */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[75px]
                  -top-[80px]
                  h-[190px]
                  w-[190px]
                  rounded-full
                  border
                  border-white/[0.06]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[90px]
                  left-[20px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  border
                  border-white/[0.05]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#9a1e2f]
                    text-white
                  "
                >
                  <MessageCircle size={17} />
                </div>

                <p
                  className="
                    mt-5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#e8aaa7]
                  "
                >
                  Still Have A Question?
                </p>

                <h3
                  className="
                    mt-2
                    font-serif
                    text-[22px]
                    font-medium
                    leading-[1.3]
                  "
                >
                  We&apos;re happy to{" "}
                  <span className="italic text-[#e8aaa7]">
                    help.
                  </span>
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[320px]
                    text-[9px]
                    leading-[1.8]
                    text-white/45
                  "
                >
                  Send your question through our contact form
                  and include any useful order or cake details.
                </p>

                <Link
                  href="#contact-form"
                  className="
                    group
                    mt-5
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.06]
                    px-5
                    py-3
                    text-[9px]
                    font-bold
                    text-white
                    transition-all
                    duration-300

                    hover:border-white/30
                    hover:bg-white/10
                  "
                >
                  <Mail size={13} />

                  Send A Message

                  <ArrowUpRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT FAQ LIST
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            {/* TOP INFO */}

            <div
              className="
                mb-4
                flex
                items-center
                justify-between
                gap-4
                rounded-[18px]
                border
                border-[#eadbd5]
                bg-[#faf4f1]
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f0dcdc]
                    text-[#9a1e2f]
                  "
                >
                  <Sparkles size={14} />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      text-[#45322d]
                    "
                  >
                    Quick Answers
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[7px]
                      text-[#998680]
                    "
                  >
                    Click a question to see the answer.
                  </p>
                </div>
              </div>

              <div
                className="
                  hidden
                  items-center
                  gap-2
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#9a1e2f]
                  sm:flex
                "
              >
                <CakeSlice size={12} />
                Alibros Bakery
              </div>
            </div>

            {/* FAQ ACCORDION */}

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    className={`
                      overflow-hidden
                      rounded-[20px]
                      border
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            border-[#dcbdb7]
                            bg-[#fff9f6]
                            shadow-[0_12px_35px_rgba(70,30,30,0.06)]
                          `
                          : `
                            border-[#eadbd5]
                            bg-white
                            hover:border-[#ddc4be]
                          `
                      }
                    `}
                  >
                    {/* QUESTION BUTTON */}

                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        w-full
                        items-center
                        gap-4
                        px-4
                        py-4
                        text-left

                        sm:px-5
                        sm:py-5
                      "
                    >
                      {/* NUMBER */}

                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-[8px]
                          font-bold
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "bg-[#9a1e2f] text-white"
                              : "bg-[#f5e8e4] text-[#9a1e2f]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* QUESTION */}

                      <div className="flex-1">
                        <p
                          className="
                            mb-1
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[1.5px]
                            text-[#9a1e2f]
                          "
                        >
                          {faq.category}
                        </p>

                        <h3
                          className="
                            font-serif
                            text-[15px]
                            font-semibold
                            leading-[1.4]
                            text-[#3b2924]

                            sm:text-[17px]
                          "
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* ARROW */}

                      <div
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? `
                                rotate-180
                                border-[#9a1e2f]
                                bg-[#9a1e2f]
                                text-white
                              `
                              : `
                                border-[#e6d4ce]
                                text-[#9a1e2f]
                              `
                          }
                        `}
                      >
                        <ChevronDown size={14} />
                      </div>
                    </button>

                    {/* =================================
                        ANSWER
                    ================================== */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.3,
                            },
                            opacity: {
                              duration: 0.2,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div
                            className="
                              ml-[72px]
                              mr-4
                              border-t
                              border-[#eadbd5]
                              pb-5
                              pt-4

                              sm:ml-[80px]
                              sm:mr-5
                            "
                          >
                            <p
                              className="
                                max-w-[650px]
                                text-[10px]
                                leading-[1.9]
                                text-[#7e6b65]

                                sm:text-[11px]
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* =========================================
                BOTTOM CUSTOM CAKE LINK
            ========================================== */}

            <div
              className="
                mt-4
                flex
                flex-col
                gap-4
                rounded-[20px]
                bg-[#9a1e2f]
                px-5
                py-5
                text-white

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                  "
                >
                  <CakeSlice size={15} />
                </div>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-white/55
                    "
                  >
                    Have A Cake Idea?
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[15px]
                      font-medium
                    "
                  >
                    Start your custom cake enquiry.
                  </p>
                </div>
              </div>

              <Link
                href="/custom-cakes"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-[9px]
                  font-bold
                  text-[#9a1e2f]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#fff4f1]
                "
              >
                Custom Cakes

                <ArrowUpRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}