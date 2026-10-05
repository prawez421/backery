"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Birthday", href: "/cakes?category=birthday" },
  { name: "Wedding", href: "/cakes?category=wedding" },
  { name: "Chocolate", href: "/cakes?category=chocolate" },
  { name: "Designer", href: "/cakes?category=designer" },
];

export default function CakesHero() {
  return (
    <section className="overflow-hidden bg-[#fffaf7] px-4 py-5 sm:px-6 lg:px-10">
      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          overflow-hidden
          rounded-[28px]
          bg-[#f2e4de]
          lg:min-h-[570px]
        "
      >
        {/* =========================================
            DECORATIVE BACKGROUND
        ========================================== */}

        <div
          className="
            absolute
            -left-[130px]
            -top-[160px]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-[#d8bbb2]/50
          "
        />

        <div
          className="
            absolute
            -bottom-[180px]
            right-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ead2cb]/70
            blur-[2px]
          "
        />

        {/* =========================================
            DESKTOP VERTICAL TEXT
        ========================================== */}

        <div
          className="
            absolute
            bottom-10
            left-6
            top-10
            z-20
            hidden
            w-[45px]
            flex-col
            items-center
            justify-between
            border-r
            border-[#d8c1ba]
            lg:flex
          "
        >
          <span
            className="
              [writing-mode:vertical-rl]
              rotate-180
              text-[9px]
              font-bold
              uppercase
              tracking-[4px]
              text-[#9a1e2f]
            "
          >
            Alibros Bakery
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-[#9a1e2f]
              text-white
            "
          >
            <CakeSlice size={14} />
          </span>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            grid
            min-h-[570px]
            grid-cols-1
            lg:grid-cols-12
            lg:pl-[70px]
          "
        >
          {/* =====================================
              TEXT AREA
          ====================================== */}

          <div
            className="
              relative
              z-20
              flex
              items-center
              px-6
              pb-8
              pt-10
              sm:px-10
              lg:col-span-7
              lg:px-12
              lg:py-14
              xl:px-16
            "
          >
            <div className="w-full">
              {/* TOP */}

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#9a1e2f]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-[#9a1e2f]
                  "
                >
                  Made for celebrations
                </span>
              </motion.div>

              {/* =================================
                  BIG TYPOGRAPHY
              ================================== */}

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
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1
                  className="
                    font-serif
                    text-[50px]
                    font-medium
                    leading-[0.92]
                    tracking-[-2px]
                    text-[#271916]

                    sm:text-[65px]
                    lg:text-[75px]
                    xl:text-[88px]
                  "
                >
                  Baked
                </h1>

                <div className="flex items-center gap-4">
                  <span
                    className="
                      hidden
                      h-[2px]
                      w-14
                      bg-[#9a1e2f]
                      sm:block
                    "
                  />

                  <h1
                    className="
                      font-serif
                      text-[50px]
                      font-medium
                      italic
                      leading-[0.95]
                      tracking-[-2px]
                      text-[#9a1e2f]

                      sm:text-[65px]
                      lg:text-[75px]
                      xl:text-[88px]
                    "
                  >
                    Beautifully.
                  </h1>
                </div>

                <h1
                  className="
                    mt-1
                    font-serif
                    text-[50px]
                    font-medium
                    leading-[0.95]
                    tracking-[-2px]
                    text-[#271916]

                    sm:text-[65px]
                    lg:text-[75px]
                    xl:text-[88px]
                  "
                >
                  Loved Always.
                </h1>
              </motion.div>

              {/* DESCRIPTION */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                className="
                  mt-7
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-[410px]
                    text-[12px]
                    leading-6
                    text-[#76635d]
                    sm:text-[13px]
                  "
                >
                  From simple birthdays to unforgettable
                  celebrations, discover handcrafted cakes
                  created fresh at Alibros Bakery.
                </p>

                <a
                  href="#cakes"
                  className="
                    group
                    flex
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#9a1e2f]
                    text-white
                    shadow-[0_10px_25px_rgba(154,30,47,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:rotate-6
                    hover:bg-[#761522]
                  "
                  aria-label="Explore cakes"
                >
                  <ArrowUpRight
                    size={19}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </a>
              </motion.div>
            </div>
          </div>

          {/* =====================================
              IMAGE AREA
          ====================================== */}

          <div
            className="
              relative
              min-h-[400px]
              px-6
              pb-24
              sm:px-10
              lg:col-span-5
              lg:min-h-full
              lg:px-0
              lg:pb-0
            "
          >
            {/* BIG IMAGE CARD */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                rotate: 3,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                ml-auto
                h-[350px]
                w-full
                overflow-hidden
                rounded-t-[180px]
                rounded-b-[28px]
                border-[7px]
                border-white

                shadow-[0_25px_60px_rgba(70,30,30,0.18)]

                sm:h-[390px]

                lg:absolute
                lg:right-10
                lg:top-1/2
                lg:h-[460px]
                lg:w-[360px]
                lg:-translate-y-1/2

                xl:right-14
                xl:w-[390px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90"
                alt="Alibros Bakery handcrafted cake"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/35
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE LABEL */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-white/70
                    "
                  >
                    Featured
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[19px]
                      font-semibold
                      text-white
                    "
                  >
                    Chocolate Collection
                  </p>
                </div>

                <Sparkles
                  size={18}
                  className="text-white"
                />
              </div>
            </motion.div>

            {/* =================================
                SMALL OVERLAPPING IMAGE
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                absolute
                bottom-7
                left-3
                z-30
                h-[125px]
                w-[125px]
                overflow-hidden
                rounded-full
                border-[6px]
                border-[#f2e4de]
                bg-white
                shadow-[0_15px_35px_rgba(50,20,20,0.18)]

                sm:left-7
                sm:h-[145px]
                sm:w-[145px]

                lg:bottom-[55px]
                lg:left-[-35px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=85"
                alt="Chocolate cake"
                fill
                sizes="150px"
                className="object-cover"
              />
            </motion.div>

            {/* FRESH BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.6,
              }}
              className="
                absolute
                right-3
                top-[-16px]
                z-30
                flex
                h-[82px]
                w-[82px]
                rotate-6
                items-center
                justify-center
                rounded-full
                bg-[#9a1e2f]
                text-center
                text-white
                shadow-lg

                sm:right-7

                lg:right-3
                lg:top-[25px]
              "
            >
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  leading-[1.5]
                  tracking-[1px]
                "
              >
                Fresh
                <br />
                Every
                <br />
                Day
              </span>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            BOTTOM CATEGORY NAVIGATION
        ========================================== */}

        <div
          className="
            relative
            z-40
            border-t
            border-[#d8c1ba]
            bg-[#ead8d1]/70
            px-5
            py-4
            backdrop-blur-md

            lg:pl-[90px]
            lg:pr-10
          "
        >
          <div
            className="
              flex
              items-center
              gap-7
              overflow-x-auto

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <span
              className="
                shrink-0
                text-[9px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#9a1e2f]
              "
            >
              Shop by
            </span>

            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  gap-2
                  text-[11px]
                  font-semibold
                  text-[#57423d]
                  transition-colors
                  hover:text-[#9a1e2f]
                "
              >
                <span
                  className="
                    font-serif
                    text-[10px]
                    text-[#aa8b82]
                  "
                >
                  0{index + 1}
                </span>

                {category.name}

                <ArrowUpRight
                  size={11}
                  className="
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}