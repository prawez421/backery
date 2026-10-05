"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Cookie,
  Croissant,
  Wheat,
  CupSoda,
  Sandwich,
  Sparkles,
} from "lucide-react";

/* =====================================================
   MENU CATEGORIES
===================================================== */

const categories = [
  {
    name: "Cakes",
    href: "/menu?category=cakes",
    icon: CakeSlice,
  },
  {
    name: "Pastries",
    href: "/menu?category=pastries",
    icon: Croissant,
  },
  {
    name: "Cupcakes",
    href: "/menu?category=cupcakes",
    icon: CupSoda,
  },
  {
    name: "Cookies",
    href: "/menu?category=cookies",
    icon: Cookie,
  },
  {
    name: "Breads",
    href: "/menu?category=breads",
    icon: Wheat,
  },
  {
    name: "Snacks",
    href: "/menu?category=snacks",
    icon: Sandwich,
  },
];

/* =====================================================
   MENU HERO
===================================================== */

export default function MenuHero() {
  return (
    <section className="bg-[#fff9f6] px-3 pt-3 sm:px-5 lg:px-8">
      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          overflow-hidden
          rounded-[24px]
          sm:rounded-[28px]
        "
      >
        {/* =============================================
            BACKGROUND IMAGE
        ============================================== */}

        <div
          className="
            relative
            h-[430px]
            w-full

            sm:h-[460px]

            lg:h-[500px]
          "
        >
          <Image
            src="/images/home/hero-cake.webp"
            alt="Alibros Bakery Menu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* =========================================
              DARK OVERLAY
          ========================================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#21100e]/90
              via-[#321614]/75
              to-[#501b21]/45
            "
          />

          {/* BOTTOM GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-black/10
            "
          />

          {/* =========================================
              DECORATION
          ========================================== */}

          <div
            className="
              absolute
              -left-[100px]
              -top-[120px]

              h-[330px]
              w-[330px]

              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute
              -left-[40px]
              -top-[60px]

              h-[220px]
              w-[220px]

              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute
              right-[8%]
              top-[12%]

              h-[80px]
              w-[80px]

              rounded-full
              border
              border-white/15
            "
          />

          {/* =========================================
              MAIN CONTENT
          ========================================== */}

          <div
            className="
              absolute
              inset-0
              z-20

              flex
              items-center

              px-6
              pb-[90px]

              sm:px-10

              lg:px-16

              xl:px-20
            "
          >
            <div className="max-w-[680px]">
              {/* =====================================
                  BREADCRUMB
              ====================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mb-5
                  flex
                  items-center
                  gap-2

                  text-[10px]
                  font-medium
                  text-white/65

                  sm:text-[11px]
                "
              >
                <Link
                  href="/"
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  Home
                </Link>

                <span className="text-white/40">/</span>

                <span className="text-white">
                  Menu
                </span>
              </motion.div>

              {/* =====================================
                  SMALL TAG
              ====================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                }}
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2

                  rounded-full
                  border
                  border-white/20

                  bg-white/10

                  px-3
                  py-2

                  backdrop-blur-md
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center

                    rounded-full
                    bg-white/15
                    text-white
                  "
                >
                  <Sparkles size={12} />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2.2px]
                    text-white

                    sm:text-[10px]
                  "
                >
                  Alibros Bakery Menu
                </span>
              </motion.div>

              {/* =====================================
                  HEADING
              ====================================== */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-serif

                  text-[40px]
                  font-semibold
                  leading-[1.02]
                  tracking-[-1.5px]
                  text-white

                  sm:text-[50px]

                  lg:text-[58px]

                  xl:text-[64px]
                "
              >
                Taste Something
                <br />

                <span className="italic text-[#ffd6cd]">
                  Truly Delicious.
                </span>
              </motion.h1>

              {/* =====================================
                  DESCRIPTION
              ====================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.25,
                }}
                className="
                  mt-5
                  max-w-[570px]

                  text-[12px]
                  leading-6
                  text-white/75

                  sm:text-[13px]

                  lg:text-[14px]
                "
              >
                From celebration cakes and creamy pastries to
                fresh breads, cookies, desserts and savoury
                snacks — discover something delicious for every
                moment.
              </motion.p>

              {/* =====================================
                  BUTTON
              ====================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.35,
                }}
                className="mt-6"
              >
                <a
                  href="#products"
                  className="
                    group

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-white

                    px-6
                    py-3

                    text-[11px]
                    font-semibold
                    text-[#8f1728]

                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]

                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:bg-[#fff2ef]

                    sm:px-7
                    sm:text-[12px]
                  "
                >
                  Explore Full Menu

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>
              </motion.div>
            </div>
          </div>

          {/* =========================================
              CATEGORY BAR
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-30

              border-t
              border-white/15

              bg-black/20

              px-3
              py-3

              backdrop-blur-xl

              sm:px-5
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-[1200px]
                gap-2

                overflow-x-auto

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                lg:justify-center
              "
            >
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="
                      group/category

                      flex
                      shrink-0
                      items-center
                      gap-2

                      rounded-full
                      border
                      border-white/15

                      bg-white/10

                      px-3.5
                      py-2

                      text-[9px]
                      font-semibold
                      text-white

                      backdrop-blur-md

                      transition-all
                      duration-300

                      hover:border-white/40
                      hover:bg-white
                      hover:text-[#8f1728]

                      sm:px-4
                      sm:text-[10px]

                      lg:px-5
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center

                        rounded-full

                        bg-white/15

                        transition-colors
                        duration-300

                        group-hover/category:bg-[#f8e5e8]
                      "
                    >
                      <Icon
                        size={12}
                        strokeWidth={1.8}
                      />
                    </span>

                    {category.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}