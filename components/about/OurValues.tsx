"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Heart,
  Sparkles,
  ShieldCheck,
  Smile,
  CakeSlice,
  ArrowUpRight,
} from "lucide-react";

/* =====================================================
   VALUES DATA
===================================================== */

const values = [
  {
    id: 1,
    number: "01",
    title: "Freshly Baked",
    description:
      "We believe bakery products are best when they are fresh, soft and full of flavour.",
    icon: CakeSlice,
  },
  {
    id: 2,
    number: "02",
    title: "Quality Ingredients",
    description:
      "Every recipe begins with carefully selected ingredients for better taste and quality.",
    icon: Wheat,
  },
  {
    id: 3,
    number: "03",
    title: "Made With Care",
    description:
      "From preparation to decoration, every treat receives attention at every step.",
    icon: Heart,
  },
  {
    id: 4,
    number: "04",
    title: "Beautifully Crafted",
    description:
      "We care about presentation as much as taste, especially for cakes and special occasions.",
    icon: Sparkles,
  },
  {
    id: 5,
    number: "05",
    title: "Customer Happiness",
    description:
      "We want every order to add something sweet and memorable to your special moments.",
    icon: Smile,
  },
  {
    id: 6,
    number: "06",
    title: "Hygiene & Quality",
    description:
      "Clean preparation, careful handling and consistent quality are important parts of our process.",
    icon: ShieldCheck,
  },
];

/* =====================================================
   ANIMATION
===================================================== */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function OurValues() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7efeb]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[80px]
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-[#9a1e2f]/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          bottom-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          border
          border-[#9a1e2f]/[0.06]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* =================================================
            HEADING
        ================================================== */}

        <div
          className="
            mb-10
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1fr_450px]
            lg:items-end
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* LABEL */}

            <div
              className="
                mb-4
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ead4d5]
                  text-[#9a1e2f]
                "
              >
                <Heart size={13} />
              </span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2.7px]
                  text-[#9a1e2f]

                  sm:text-[10px]
                "
              >
                What Matters To Us
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                max-w-[650px]
                font-serif
                text-[35px]
                font-medium
                leading-[1.07]
                tracking-[-1px]
                text-[#281b18]

                sm:text-[43px]
                lg:text-[50px]
              "
            >
              The Values Behind
              <br />

              <span className="italic text-[#9a1e2f]">
                Every Bake.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p
              className="
                text-[12px]
                leading-6
                text-[#7c6963]

                sm:text-[13px]
              "
            >
              Good baking is about more than following a
              recipe. These simple values guide how we want
              every Alibros Bakery product to be prepared,
              presented and enjoyed.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            VALUES GRID
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.id}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  min-h-[270px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#e8d8d2]
                  bg-[#fffdfb]
                  p-6

                  shadow-[0_8px_25px_rgba(70,30,30,0.04)]

                  transition-shadow
                  duration-300

                  hover:shadow-[0_20px_45px_rgba(70,30,30,0.09)]

                  sm:p-7
                "
              >
                {/* BACKGROUND NUMBER */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-2
                    -top-7

                    font-serif
                    text-[100px]
                    font-semibold
                    leading-none
                    text-[#9a1e2f]/[0.035]

                    transition-all
                    duration-500

                    group-hover:-translate-x-2
                    group-hover:translate-y-2
                    group-hover:text-[#9a1e2f]/[0.06]
                  "
                >
                  {value.number}
                </span>

                {/* TOP */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-[15px]

                      bg-[#f4e2e2]
                      text-[#9a1e2f]

                      transition-all
                      duration-300

                      group-hover:-rotate-3
                      group-hover:bg-[#9a1e2f]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* NUMBER */}

                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-[1.5px]
                      text-[#b89e97]
                    "
                  >
                    / {value.number}
                  </span>
                </div>

                {/* CONTENT */}

                <div
                  className="
                    relative
                    z-10
                    mt-8
                  "
                >
                  <h3
                    className="
                      font-serif
                      text-[22px]
                      font-semibold
                      text-[#30211d]

                      transition-colors
                      duration-300

                      group-hover:text-[#9a1e2f]

                      sm:text-[23px]
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[340px]
                      text-[10px]
                      leading-[1.8]
                      text-[#806d67]

                      sm:text-[11px]
                    "
                  >
                    {value.description}
                  </p>
                </div>

                {/* BOTTOM */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6

                    flex
                    items-center
                    gap-3

                    sm:left-7
                    sm:right-7
                  "
                >
                  <div
                    className="
                      h-px
                      flex-1
                      bg-[#eadbd5]

                      transition-colors
                      duration-300

                      group-hover:bg-[#9a1e2f]/30
                    "
                  />

                  <ArrowUpRight
                    size={13}
                    className="
                      text-[#b99e97]

                      transition-all
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#9a1e2f]
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =================================================
            BRAND STATEMENT
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
            duration: 0.6,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[25px]
            bg-[#281916]
          "
        >
          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[90px]
              -top-[100px]
              h-[260px]
              w-[260px]
              rounded-full
              border
              border-white/[0.07]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[70px]
              top-[20px]
              h-[130px]
              w-[130px]
              rounded-full
              border
              border-white/[0.05]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-6
              px-6
              py-7

              sm:px-8

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:px-10
              lg:py-8
            "
          >
            {/* LEFT */}

            <div className="max-w-[720px]">
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#dfa8a4]
                "
              >
                The Alibros Way
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-[24px]
                  font-medium
                  leading-[1.3]
                  text-white

                  sm:text-[28px]
                  lg:text-[31px]
                "
              >
                Simple ingredients. Thoughtful baking.
                <br className="hidden sm:block" />

                <span className="italic text-[#e6aaa7]">
                  {" "}
                  Sweet moments worth sharing.
                </span>
              </h3>
            </div>

            {/* BRAND ICON */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-[#e5aaa7]
                "
              >
                <CakeSlice
                  size={19}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p
                  className="
                    font-serif
                    text-[16px]
                    font-semibold
                    text-white
                  "
                >
                  Alibros Bakery
                </p>

                <p
                  className="
                    mt-0.5
                    text-[7px]
                    uppercase
                    tracking-[2px]
                    text-white/40
                  "
                >
                  Baked with care
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}