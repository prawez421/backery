"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Croissant,
  Heart,
  Sparkles,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="overflow-hidden bg-[#fffaf7] px-4 py-5 sm:px-6 lg:px-10">
      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          overflow-hidden
          rounded-[28px]
          border
          border-[#eeddd7]
          bg-[#f7eee9]
        "
      >
        {/* =========================================
            BACKGROUND DECORATIONS
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[180px]
            -top-[180px]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#dfc8c1]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-200px]
            left-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#ead5cf]/50
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[38%]
            top-[40px]
            h-[7px]
            w-[7px]
            rounded-full
            bg-[#9a1e2f]/30
          "
        />

        {/* =========================================
            MAIN GRID
        ========================================== */}

        <div
          className="
            relative
            z-10
            grid
            min-h-[540px]
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div
            className="
              flex
              items-center
              px-6
              pb-8
              pt-10

              sm:px-10
              sm:py-12

              lg:px-12
              lg:py-14

              xl:px-16
            "
          >
            <div className="max-w-[610px]">
              {/* BREADCRUMB */}

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  mb-6
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-medium
                  text-[#95817b]
                "
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-[#9a1e2f]"
                >
                  Home
                </Link>

                <span>/</span>

                <span className="font-semibold text-[#9a1e2f]">
                  About Us
                </span>
              </motion.div>

              {/* SMALL LABEL */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
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
                    bg-[#efdadd]
                    text-[#9a1e2f]
                  "
                >
                  <Sparkles size={13} />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                    text-[#9a1e2f]

                    sm:text-[10px]
                  "
                >
                  About Alibros Bakery
                </span>
              </motion.div>

              {/* =====================================
                  HEADING
              ====================================== */}

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-serif
                  text-[42px]
                  font-medium
                  leading-[1.03]
                  tracking-[-1.5px]
                  text-[#281a17]

                  sm:text-[52px]
                  lg:text-[57px]
                  xl:text-[64px]
                "
              >
                Baking Happiness,
                <br />

                <span className="italic text-[#9a1e2f]">
                  One Treat
                </span>

                <br />

                at a Time.
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.27,
                }}
                className="
                  mt-5
                  max-w-[510px]
                  text-[12px]
                  leading-6
                  text-[#796762]

                  sm:text-[13px]
                  lg:text-[14px]
                "
              >
                At Alibros Bakery, we believe every
                celebration deserves something delicious.
                From freshly baked breads and cookies to
                pastries, desserts and beautiful custom
                cakes, every treat is prepared with care.
              </motion.p>

              {/* =====================================
                  FEATURES
              ====================================== */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                }}
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >
                <Feature
                  icon={<Croissant size={13} />}
                  text="Freshly Baked"
                />

                <Feature
                  icon={<CakeSlice size={13} />}
                  text="Custom Cakes"
                />

                <Feature
                  icon={<Heart size={13} />}
                  text="Made With Care"
                />
              </motion.div>

              {/* =====================================
                  BUTTONS
              ====================================== */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.45,
                }}
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                <Link
                  href="/menu"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#9a1e2f]
                    px-6
                    py-3.5
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-[0_9px_22px_rgba(154,30,47,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#791725]

                    sm:px-7
                    sm:text-[12px]
                  "
                >
                  Explore Our Menu

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/custom-cakes"
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-[#d8bbb3]
                    bg-white/60
                    px-6
                    py-3.5
                    text-[11px]
                    font-semibold
                    text-[#68524c]
                    transition-all
                    duration-300
                    hover:border-[#9a1e2f]
                    hover:bg-white
                    hover:text-[#9a1e2f]

                    sm:text-[12px]
                  "
                >
                  Custom Cakes
                </Link>
              </motion.div>
            </div>
          </div>

          {/* =====================================
              RIGHT IMAGE AREA
          ====================================== */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              px-5
              pb-7

              sm:min-h-[500px]
              sm:px-10

              lg:min-h-full
              lg:px-8
              lg:py-10
            "
          >
            {/* LARGE IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-7
                left-5
                right-5
                top-4
                overflow-hidden
                rounded-[28px_100px_28px_28px]
                border-[6px]
                border-white
                shadow-[0_25px_60px_rgba(70,30,30,0.14)]

                sm:left-10
                sm:right-10

                lg:bottom-10
                lg:left-8
                lg:right-10
                lg:top-10
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=1400&q=90"
                alt="Alibros Bakery"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-[1.03]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE TEXT */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                    text-white/65
                  "
                >
                  Alibros Bakery
                </p>

                <p
                  className="
                    mt-1
                    max-w-[300px]
                    font-serif
                    text-[20px]
                    font-medium
                    text-white

                    sm:text-[23px]
                  "
                >
                  Fresh moments start here.
                </p>
              </div>
            </motion.div>

            {/* =====================================
                SMALL FLOATING IMAGE
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="
                absolute
                bottom-4
                right-3
                z-20

                h-[135px]
                w-[125px]

                overflow-hidden
                rounded-[20px]

                border-[5px]
                border-[#fffaf7]

                shadow-[0_15px_35px_rgba(60,25,25,0.18)]

                sm:bottom-6
                sm:right-7
                sm:h-[160px]
                sm:w-[145px]

                lg:bottom-7
                lg:right-5
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=90"
                alt="Fresh cake"
                fill
                sizes="150px"
                className="object-cover"
              />
            </motion.div>

            {/* =====================================
                FLOATING BADGE
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 6,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
              }}
              className="
                absolute
                left-3
                top-7
                z-30

                flex
                h-[88px]
                w-[88px]
                flex-col
                items-center
                justify-center

                rounded-full
                bg-[#9a1e2f]

                text-center
                text-white

                shadow-[0_12px_30px_rgba(154,30,47,0.28)]

                sm:left-7
                sm:top-10

                lg:left-2
                lg:top-[65px]
              "
            >
              <CakeSlice size={15} />

              <span
                className="
                  mt-1
                  text-[7px]
                  font-bold
                  uppercase
                  leading-[1.5]
                  tracking-[1.2px]
                "
              >
                Baked
                <br />
                With Love
              </span>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            BOTTOM STRIP
        ========================================== */}

        <div
          className="
            relative
            z-20
            border-t
            border-[#dfcbc5]
            bg-white/40
            px-5
            py-4
            backdrop-blur-md

            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              flex
              gap-7
              overflow-x-auto

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              lg:justify-center
            "
          >
            {[
              "Cakes",
              "Pastries",
              "Cupcakes",
              "Cookies",
              "Breads",
              "Desserts",
              "Custom Cakes",
            ].map((item) => (
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
                    h-[5px]
                    w-[5px]
                    rounded-full
                    bg-[#9a1e2f]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[1px]
                    text-[#705b55]

                    sm:text-[10px]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   FEATURE COMPONENT
===================================================== */

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-[#e4d1cb]
        bg-white/60
        px-3
        py-2
        text-[9px]
        font-semibold
        text-[#705c56]

        sm:text-[10px]
      "
    >
      <span className="text-[#9a1e2f]">
        {icon}
      </span>

      {text}
    </div>
  );
}