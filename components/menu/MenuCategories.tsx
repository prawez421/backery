"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  CakeSlice,
  Croissant,
  Cookie,
  Wheat,
  Dessert,
  Sandwich,
  CupSoda,
} from "lucide-react";

/* =====================================================
   TYPES
===================================================== */

interface MenuCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

/* =====================================================
   CATEGORY DATA
===================================================== */

const categories = [
  {
    id: 1,
    name: "All Products",
    icon: LayoutGrid,
  },
  {
    id: 2,
    name: "Cakes",
    icon: CakeSlice,
  },
  {
    id: 3,
    name: "Pastries",
    icon: Croissant,
  },
  {
    id: 4,
    name: "Cupcakes",
    icon: CupSoda,
  },
  {
    id: 5,
    name: "Cookies",
    icon: Cookie,
  },
  {
    id: 6,
    name: "Breads",
    icon: Wheat,
  },
  {
    id: 7,
    name: "Desserts",
    icon: Dessert,
  },
  {
    id: 8,
    name: "Snacks",
    icon: Sandwich,
  },
];

/* =====================================================
   ANIMATIONS
===================================================== */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
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
   MENU CATEGORIES
===================================================== */

export default function MenuCategories({
  activeCategory,
  setActiveCategory,
}: MenuCategoriesProps) {
  return (
    <section className="w-full">
      {/* =========================================
          HEADING
      ========================================== */}

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
          amount: 0.4,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          mb-5
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
          {/* SMALL TITLE */}

          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-6 bg-[#a71930]" />

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#a71930]

                sm:text-[10px]
              "
            >
              Browse Menu
            </p>
          </div>

          {/* MAIN TITLE */}

          <h2
            className="
              font-serif
              text-[27px]
              font-semibold
              leading-tight
              tracking-[-0.6px]
              text-[#241a17]

              sm:text-[31px]

              lg:text-[34px]
            "
          >
            Explore Our{" "}
            <span className="italic text-[#a71930]">
              Categories
            </span>
          </h2>
        </div>

        {/* RIGHT DESCRIPTION */}

        <p
          className="
            max-w-[360px]

            text-[11px]
            leading-5
            text-[#88766f]

            sm:text-right
            sm:text-[12px]
          "
        >
          Choose your favourite category and discover
          freshly baked Alibros treats.
        </p>
      </motion.div>

      {/* =========================================
          CATEGORY BOX
      ========================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          flex
          w-full
          gap-2

          overflow-x-auto

          rounded-[18px]
          border
          border-[#eee0da]

          bg-white

          p-2

          shadow-[0_7px_25px_rgba(70,30,30,0.04)]

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
                lg:text-[12px]

                ${
                  isActive
                    ? "text-white"
                    : "bg-[#fff9f6] text-[#6d5a54] hover:bg-[#fbeded] hover:text-[#a71930]"
                }
              `}
            >
              {/* =====================================
                  ACTIVE BACKGROUND
              ====================================== */}

              {isActive && (
                <motion.span
                  layoutId="active-menu-category"
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-[#a71930]

                    shadow-[0_7px_18px_rgba(167,25,48,0.20)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              {/* =====================================
                  ICON
              ====================================== */}

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
                      : "bg-[#f7e5e8] text-[#a71930] group-hover:bg-[#a71930] group-hover:text-white"
                  }
                `}
              >
                <Icon
                  size={13}
                  strokeWidth={1.8}
                />
              </span>

              {/* CATEGORY NAME */}

              <span className="relative z-10 whitespace-nowrap">
                {category.name}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* =========================================
          CURRENT ACTIVE CATEGORY
      ========================================== */}

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
            bg-[#a71930]
          "
        />

        <span>Currently showing</span>

        <span className="font-semibold text-[#a71930]">
          {activeCategory}
        </span>
      </motion.div>
    </section>
  );
}