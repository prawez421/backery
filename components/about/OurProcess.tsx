"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  CookingPot,
  ChefHat,
  CakeSlice,
  BadgeCheck,
  PackageCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* =====================================================
   PROCESS DATA
===================================================== */

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Choose Ingredients",
    shortTitle: "Ingredients",
    description:
      "Every bake begins with carefully selected ingredients for better taste, texture and freshness.",
    icon: Wheat,
  },
  {
    id: 2,
    number: "02",
    title: "Prepare With Care",
    shortTitle: "Prepare",
    description:
      "Ingredients are measured, mixed and prepared carefully according to each recipe.",
    icon: CookingPot,
  },
  {
    id: 3,
    number: "03",
    title: "Bake Fresh",
    shortTitle: "Bake",
    description:
      "Our cakes, breads, cookies and other treats are baked with attention to timing and texture.",
    icon: ChefHat,
  },
  {
    id: 4,
    number: "04",
    title: "Decorate & Finish",
    shortTitle: "Decorate",
    description:
      "Each product receives its finishing touches, from simple toppings to detailed cake decoration.",
    icon: CakeSlice,
  },
  {
    id: 5,
    number: "05",
    title: "Quality Check",
    shortTitle: "Check",
    description:
      "Before an order is ready, we check its presentation, finishing and overall quality.",
    icon: BadgeCheck,
  },
  {
    id: 6,
    number: "06",
    title: "Ready For You",
    shortTitle: "Ready",
    description:
      "Your freshly prepared order is packed carefully and made ready for pickup or delivery.",
    icon: PackageCheck,
  },
];

/* =====================================================
   ANIMATIONS
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

export default function OurProcess() {
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
      {/* =================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          -top-[250px]
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          -right-[180px]
          h-[560px]
          w-[560px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#9a1e2f]/10
          blur-[110px]
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
            SECTION HEADING
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
            max-w-[720px]
            text-center
          "
        >
          {/* SMALL LABEL */}

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
              className="text-[#e8aaa7]"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#e8aaa7]
              "
            >
              Behind Every Bake
            </span>
          </div>

          {/* HEADING */}

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
            From Ingredients To
            <br />

            <span className="italic text-[#e8aaa7]">
              Something Delicious.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[560px]
              text-[11px]
              leading-6
              text-white/50

              sm:text-[12px]
            "
          >
            Every Alibros Bakery creation follows a simple
            journey — thoughtful preparation, fresh baking,
            careful finishing and a final quality check.
          </p>
        </motion.div>

        {/* =================================================
            DESKTOP PROCESS
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
            gap-x-5
            gap-y-12

            md:grid
            xl:grid-cols-6
          "
        >
          {/* ===============================================
              HORIZONTAL LINE
              Only XL screens
          ================================================ */}

          <div
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[39px]
              hidden
              h-px
              bg-white/10
              xl:block
            "
          />

          {/* ANIMATED LINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[39px]
              hidden
              h-px
              bg-[#9a1e2f]
              xl:block
            "
          />

          {/* =================================================
              STEPS
          ================================================== */}

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="
                  group
                  relative
                  text-center
                "
              >
                {/* =========================================
                    NUMBER / ICON CIRCLE
                ========================================== */}

                <div
                  className="
                    relative
                    z-20
                    mx-auto
                    flex
                    h-[78px]
                    w-[78px]
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/10

                    bg-[#34211d]

                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]

                    transition-all
                    duration-300

                    group-hover:-translate-y-2
                    group-hover:border-[#e8aaa7]/40
                    group-hover:bg-[#9a1e2f]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                    className="
                      text-[#e8aaa7]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />

                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1

                      flex
                      h-6
                      min-w-6
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/10

                      bg-[#fff7f4]

                      px-1

                      text-[7px]
                      font-bold
                      text-[#9a1e2f]
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* =========================================
                    CONTENT
                ========================================== */}

                <div className="mt-6">
                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#d59b98]
                    "
                  >
                    Step {step.number}
                  </span>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-[18px]
                      font-semibold
                      text-white

                      transition-colors
                      duration-300

                      group-hover:text-[#edb3b0]

                      lg:text-[19px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-2
                      max-w-[220px]
                      text-[9px]
                      leading-[1.8]
                      text-white/45

                      lg:text-[10px]
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* ARROW BETWEEN STEPS */}

                {index !== processSteps.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="
                      absolute
                      -right-[13px]
                      top-[33px]

                      hidden
                      text-[#dca29f]

                      xl:block
                    "
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* =================================================
            MOBILE PROCESS
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
              bottom-[40px]
              left-[25px]
              top-[40px]
              w-px
              bg-white/10
            "
          />

          {/* STEPS */}

          {processSteps.map((step, index) => {
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
                    index !== processSteps.length - 1
                      ? "pb-7"
                      : ""
                  }
                `}
              >
                {/* ICON */}

                <div
                  className="
                    relative
                    z-20

                    flex
                    h-[51px]
                    w-[51px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#e8aaa7]/20

                    bg-[#34211d]

                    text-[#e8aaa7]
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                  />

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1

                      flex
                      h-[18px]
                      min-w-[18px]
                      items-center
                      justify-center

                      rounded-full

                      bg-[#9a1e2f]

                      px-1

                      text-[6px]
                      font-bold
                      text-white
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* CARD */}

                <div
                  className="
                    flex-1

                    rounded-[18px]

                    border
                    border-white/[0.07]

                    bg-white/[0.04]

                    p-4
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#d69c99]
                    "
                  >
                    {step.shortTitle}
                  </span>

                  <h3
                    className="
                      mt-1.5
                      font-serif
                      text-[18px]
                      font-semibold
                      text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      leading-[1.8]
                      text-white/45
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
            BOTTOM BRAND MESSAGE
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
          }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="
            mt-12
            overflow-hidden

            rounded-[24px]

            border
            border-white/[0.08]

            bg-white/[0.04]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

              px-6
              py-6

              sm:px-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  bg-[#9a1e2f]

                  text-white
                "
              >
                <CakeSlice
                  size={18}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#dba3a0]
                  "
                >
                  Our Simple Philosophy
                </p>

                <h3
                  className="
                    mt-1
                    font-serif
                    text-[19px]
                    font-medium
                    text-white

                    sm:text-[22px]
                  "
                >
                  Care in every step.
                  <span className="italic text-[#e8aaa7]">
                    {" "}
                    Joy in every bite.
                  </span>
                </h3>
              </div>
            </div>

            {/* PROCESS MINI FLOW */}

            <div
              className="
                flex
                max-w-full
                items-center
                gap-2
                overflow-x-auto

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {["Mix", "Bake", "Finish", "Enjoy"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.05]
                        px-3
                        py-2

                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[1px]
                        text-white/60
                      "
                    >
                      {item}
                    </span>

                    {index !== 3 && (
                      <ArrowRight
                        size={10}
                        className="text-[#dba3a0]"
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}