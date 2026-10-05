"use client";

import { motion } from "framer-motion";
import {
  CalendarHeart,
  Palette,
  Send,
  MessageCircleMore,
  ChefHat,
  PackageCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* =====================================================
   PROCESS DATA
===================================================== */

const steps = [
  {
    id: 1,
    number: "01",
    title: "Choose Occasion",
    description:
      "Tell us what you're celebrating — birthday, wedding, anniversary or any special moment.",
    icon: CalendarHeart,
  },
  {
    id: 2,
    number: "02",
    title: "Customize Your Cake",
    description:
      "Choose your flavour, weight, shape, theme, colours and add a personal cake message.",
    icon: Palette,
  },
  {
    id: 3,
    number: "03",
    title: "Send Your Request",
    description:
      "Upload a reference image if you have one and submit your complete custom cake request.",
    icon: Send,
  },
  {
    id: 4,
    number: "04",
    title: "We Confirm Details",
    description:
      "Our bakery team reviews your request and confirms the design, availability and final price.",
    icon: MessageCircleMore,
  },
  {
    id: 5,
    number: "05",
    title: "We Bake It Fresh",
    description:
      "Once confirmed, our bakers prepare and decorate your cake fresh for your celebration.",
    icon: ChefHat,
  },
  {
    id: 6,
    number: "06",
    title: "Pickup or Delivery",
    description:
      "Collect your cake from Alibros Bakery or receive it at your selected delivery address.",
    icon: PackageCheck,
  },
];

/* =====================================================
   ANIMATION
===================================================== */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function HowItWorks() {
  const scrollToForm = () => {
    document
      .getElementById("custom-cake-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#281916]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* ==========================================
          BACKGROUND DECORATION
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[170px]
          -top-[180px]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[230px]
          right-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[45%]
          top-[20%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#9a1e2f]/10
          blur-[100px]
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
        {/* =================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            mb-12
            max-w-[700px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-4
              py-2
            "
          >
            <Sparkles
              size={12}
              className="text-[#e4aaa8]"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#e4aaa8]
              "
            >
              Simple & Easy
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              font-serif
              text-[35px]
              font-medium
              leading-[1.08]
              tracking-[-1px]
              text-white

              sm:text-[43px]
              lg:text-[50px]
            "
          >
            From Your Idea To A{" "}
            <span className="italic text-[#e5aaa7]">
              Delicious Cake.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[550px]
              text-[11px]
              leading-6
              text-white/55

              sm:text-[12px]
            "
          >
            Creating your custom cake with Alibros Bakery is
            simple. Share your idea and we&apos;ll take care
            of the rest.
          </p>
        </motion.div>

        {/* =================================================
            DESKTOP TIMELINE
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            relative
            hidden
            grid-cols-3
            gap-x-8
            gap-y-14

            md:grid
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="group relative"
              >
                {/* =====================================
                    TOP LINE + NUMBER
                ====================================== */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                  "
                >
                  {/* NUMBER CIRCLE */}

                  <div
                    className="
                      relative
                      z-20
                      flex
                      h-[54px]
                      w-[54px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#e5aaa7]/30

                      bg-[#321f1b]

                      transition-all
                      duration-300

                      group-hover:border-[#e5aaa7]
                      group-hover:bg-[#9a1e2f]
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[14px]
                        font-semibold
                        text-[#e5aaa7]

                        transition-colors
                        group-hover:text-white
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* CONNECTOR */}

                  {index !== steps.length - 1 && (
                    <div
                      className="
                        relative
                        ml-3
                        h-px
                        flex-1
                        overflow-hidden
                        bg-white/10
                      "
                    >
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: "100%",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.12,
                        }}
                        className="
                          absolute
                          inset-y-0
                          left-0
                          bg-[#9a1e2f]/70
                        "
                      />
                    </div>
                  )}
                </div>

                {/* =====================================
                    ICON
                ====================================== */}

                <div
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-[13px]

                    bg-white/[0.06]
                    text-[#e5aaa7]

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:bg-white
                    group-hover:text-[#9a1e2f]
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>

                {/* =====================================
                    CONTENT
                ====================================== */}

                <h3
                  className="
                    font-serif
                    text-[20px]
                    font-semibold
                    text-white

                    transition-colors
                    duration-300

                    group-hover:text-[#efb6b3]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[330px]
                    text-[10px]
                    leading-[1.8]
                    text-white/50

                    lg:text-[11px]
                  "
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =================================================
            MOBILE TIMELINE
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="
            relative
            md:hidden
          "
        >
          {/* VERTICAL LINE */}

          <div
            className="
              absolute
              bottom-[30px]
              left-[22px]
              top-[30px]
              w-px
              bg-white/10
            "
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className={`
                  relative
                  flex
                  gap-4

                  ${
                    index !== steps.length - 1
                      ? "pb-8"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-[45px]
                    w-[45px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#e5aaa7]/30

                    bg-[#321f1b]

                    font-serif
                    text-[11px]
                    font-semibold
                    text-[#e5aaa7]
                  "
                >
                  {step.number}
                </div>

                {/* CONTENT */}

                <div
                  className="
                    flex-1
                    rounded-[18px]
                    border
                    border-white/[0.07]
                    bg-white/[0.04]
                    p-5
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-[12px]
                      bg-white/[0.07]
                      text-[#e5aaa7]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3
                    className="
                      font-serif
                      text-[19px]
                      font-semibold
                      text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.8]
                      text-white/50
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
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
            duration: 0.55,
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5

            rounded-[22px]

            border
            border-white/[0.08]

            bg-white/[0.04]

            px-6
            py-5

            backdrop-blur-md

            sm:flex-row
            sm:px-7
          "
        >
          {/* TEXT */}

          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#dca4a1]
              "
            >
              Ready to create?
            </p>

            <p
              className="
                mt-1
                font-serif
                text-[19px]
                font-medium
                text-white

                sm:text-[21px]
              "
            >
              Start designing your special cake.
            </p>
          </div>

          {/* BUTTON */}

          <button
            type="button"
            onClick={scrollToForm}
            className="
              group

              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              gap-2

              rounded-full

              bg-[#9a1e2f]

              px-6
              py-3

              text-[10px]
              font-semibold
              text-white

              shadow-[0_8px_20px_rgba(0,0,0,0.18)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#b3263b]

              sm:w-auto
              sm:text-[11px]
            "
          >
            Design My Cake

            <ArrowRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}