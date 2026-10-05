"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  CakeSlice,
  Heart,
  Gem,
  Camera,
  Palette,
  Gift,
  Sparkles,
  Baby,
  Leaf,
} from "lucide-react";

/* =====================================================
   PROPS TYPE
===================================================== */

interface CakeCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

/* =====================================================
   CATEGORY DATA
===================================================== */

const categories = [
  {
    id: 1,
    name: "All Cakes",
    icon: LayoutGrid,
  },
  {
    id: 2,
    name: "Birthday Cakes",
    icon: Gift,
  },
  {
    id: 3,
    name: "Anniversary Cakes",
    icon: Heart,
  },
  {
    id: 4,
    name: "Wedding Cakes",
    icon: Gem,
  },
  {
    id: 5,
    name: "Chocolate Cakes",
    icon: CakeSlice,
  },
  {
    id: 6,
    name: "Photo Cakes",
    icon: Camera,
  },
  {
    id: 7,
    name: "Designer Cakes",
    icon: Palette,
  },
  {
    id: 8,
    name: "Bento Cakes",
    icon: Baby,
  },
  {
    id: 9,
    name: "Theme Cakes",
    icon: Sparkles,
  },
  {
    id: 10,
    name: "Eggless Cakes",
    icon: Leaf,
  },
];

/* =====================================================
   ANIMATION
===================================================== */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function CakeCategories({
  activeCategory,
  setActiveCategory,
}: CakeCategoriesProps) {
  return (
    <section className="w-full">

      {/* =================================================
          HEADING
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          mb-6
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        {/* LEFT */}

        <div>
          {/* SMALL LABEL */}

          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-7 bg-[#9a1e2f]" />

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#9a1e2f]
                sm:text-[10px]
              "
            >
              Cake Collection
            </p>
          </div>

          {/* TITLE */}

          <h2
            className="
              font-serif
              text-[27px]
              font-semibold
              leading-tight
              tracking-[-0.6px]
              text-[#241917]
              sm:text-[31px]
              lg:text-[34px]
            "
          >
            Find Your Perfect{" "}
            <span className="italic text-[#9a1e2f]">
              Cake
            </span>
          </h2>
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            max-w-[390px]
            text-[11px]
            leading-5
            text-[#89766f]
            sm:text-right
            sm:text-[12px]
          "
        >
          From birthdays to weddings, choose a cake made
          especially for your celebration.
        </p>
      </motion.div>

      {/* =================================================
          CATEGORY FILTER
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
          flex
          w-full
          gap-2
          overflow-x-auto
          rounded-[20px]
          border
          border-[#eeded8]
          bg-white
          p-2
          shadow-[0_7px_28px_rgba(70,30,30,0.05)]

          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden

          lg:flex-wrap
          lg:justify-center
          lg:overflow-visible
        "
      >
        {categories.map((category) => {
          const Icon = category.icon;

          const isActive =
            activeCategory === category.name;

          return (
            <motion.button
              key={category.id}
              type="button"
              variants={itemVariants}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                setActiveCategory(category.name)
              }
              className={`
                group
                relative
                flex
                shrink-0
                items-center
                gap-2
                overflow-hidden
                rounded-full
                px-3.5
                py-2.5
                text-[10px]
                font-semibold
                transition-colors
                duration-300

                sm:px-4
                sm:text-[11px]

                lg:px-5

                ${
                  isActive
                    ? "text-white"
                    : "bg-[#fff9f6] text-[#705d57] hover:bg-[#fae9e9] hover:text-[#9a1e2f]"
                }
              `}
            >
              {/* =========================================
                  ACTIVE BACKGROUND
              ========================================== */}

              {isActive && (
                <motion.span
                  layoutId="active-cake-category"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#9a1e2f]
                    shadow-[0_7px_18px_rgba(154,30,47,0.20)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              {/* =========================================
                  ICON
              ========================================== */}

              <span
                className={`
                  relative
                  z-10
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-[#f7e5e7] text-[#9a1e2f] group-hover:bg-[#9a1e2f] group-hover:text-white"
                  }
                `}
              >
                <Icon
                  size={13}
                  strokeWidth={1.8}
                />
              </span>

              {/* NAME */}

              <span className="relative z-10 whitespace-nowrap">
                {category.name}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* =================================================
          ACTIVE CATEGORY
      ================================================== */}

      <motion.div
        key={activeCategory}
        initial={{
          opacity: 0,
          x: -5,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          mt-3
          flex
          items-center
          gap-2
          text-[10px]
          text-[#95827c]
          sm:text-[11px]
        "
      >
        <span
          className="
            h-[6px]
            w-[6px]
            rounded-full
            bg-[#9a1e2f]
          "
        />

        <span>Showing</span>

        <span className="font-semibold text-[#9a1e2f]">
          {activeCategory}
        </span>
      </motion.div>
    </section>
  );
}