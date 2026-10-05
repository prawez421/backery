"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Sparkles,
  Palette,
  Heart,
} from "lucide-react";

export default function CustomCakeHero() {
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
            BACKGROUND DECORATION
        ========================================== */}

        <div
          className="
            absolute
            -right-[150px]
            -top-[170px]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#dfc7c0]
          "
        />

        <div
          className="
            absolute
            -bottom-[200px]
            left-[30%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#efdcd6]/60
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
            min-h-[560px]
            grid-cols-1
            lg:grid-cols-2
          "
        >
          {/* =====================================
              LEFT IMAGE COLLAGE
          ====================================== */}

          <div
            className="
              relative
              min-h-[440px]
              px-6
              pb-6
              pt-10
              sm:min-h-[500px]
              sm:px-10
              lg:min-h-full
              lg:px-12
              lg:py-12
            "
          >
            {/* LARGE IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                rotate: -3,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-6
                top-8
                h-[330px]
                w-[72%]
                overflow-hidden
                rounded-[100px_24px_24px_24px]
                border-[6px]
                border-white
                shadow-[0_25px_55px_rgba(70,30,30,0.15)]

                sm:left-10
                sm:h-[390px]
                sm:w-[68%]

                lg:left-12
                lg:top-1/2
                lg:h-[430px]
                lg:w-[65%]
                lg:-translate-y-1/2
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90"
                alt="Custom celebration cake"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="object-cover"
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
            </motion.div>

            {/* SMALL IMAGE */}

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
                delay: 0.35,
              }}
              className="
                absolute
                bottom-6
                right-6
                z-20
                h-[160px]
                w-[145px]
                overflow-hidden
                rounded-[22px]
                border-[5px]
                border-white
                shadow-[0_18px_40px_rgba(60,25,25,0.18)]

                sm:bottom-8
                sm:right-12
                sm:h-[190px]
                sm:w-[170px]

                lg:bottom-[55px]
                lg:right-[40px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=85"
                alt="Custom chocolate cake"
                fill
                sizes="180px"
                className="object-cover"
              />
            </motion.div>

            {/* =====================================
                CUSTOM BADGE
            ====================================== */}

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
                duration: 0.5,
                delay: 0.55,
              }}
              className="
                absolute
                right-[12%]
                top-[35px]
                z-30

                flex
                h-[95px]
                w-[95px]
                rotate-[8deg]
                flex-col
                items-center
                justify-center

                rounded-full

                bg-[#9a1e2f]
                text-center
                text-white

                shadow-[0_12px_30px_rgba(154,30,47,0.25)]

                sm:right-[16%]
                sm:top-[45px]
              "
            >
              <Sparkles size={15} />

              <span
                className="
                  mt-1
                  text-[8px]
                  font-bold
                  uppercase
                  leading-[1.4]
                  tracking-[1px]
                "
              >
                Made
                <br />
                For You
              </span>
            </motion.div>

            {/* DECORATIVE TEXT */}

            <div
              className="
                absolute
                bottom-[70px]
                left-[7px]
                hidden
                -rotate-90
                text-[8px]
                font-bold
                uppercase
                tracking-[4px]
                text-[#b18f86]

                lg:block
              "
            >
              Alibros Bakery
            </div>
          </div>

          {/* =====================================
              RIGHT CONTENT
          ====================================== */}

          <div
            className="
              relative
              flex
              items-center
              px-6
              pb-12
              pt-4

              sm:px-10

              lg:px-12
              lg:py-14

              xl:px-16
            "
          >
            <div className="max-w-[600px]">

              {/* BREADCRUMB */}

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
                  mb-6
                  flex
                  items-center
                  gap-2

                  text-[10px]
                  font-medium
                  text-[#917d77]
                "
              >
                <Link
                  href="/"
                  className="
                    transition-colors
                    hover:text-[#9a1e2f]
                  "
                >
                  Home
                </Link>

                <span>/</span>

                <span className="font-semibold text-[#9a1e2f]">
                  Custom Cakes
                </span>
              </motion.div>

              {/* SMALL TITLE */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
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
                    bg-[#f0dadd]
                    text-[#9a1e2f]
                  "
                >
                  <Palette size={14} />
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
                  You Imagine. We Bake.
                </span>
              </motion.div>

              {/* =====================================
                  HEADING
              ====================================== */}

              <motion.h1
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
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-serif
                  text-[43px]
                  font-medium
                  leading-[1.02]
                  tracking-[-1.5px]
                  text-[#281a17]

                  sm:text-[54px]
                  lg:text-[59px]
                  xl:text-[66px]
                "
              >
                Your Idea.
                <br />

                <span className="italic text-[#9a1e2f]">
                  Your Cake.
                </span>

                <br />

                Your Moment.
              </motion.h1>

              {/* DESCRIPTION */}

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
                  duration: 0.5,
                  delay: 0.28,
                }}
                className="
                  mt-5
                  max-w-[510px]

                  text-[12px]
                  leading-6
                  text-[#796761]

                  sm:text-[13px]
                  lg:text-[14px]
                "
              >
                Tell us your occasion, favourite flavour,
                design and special message. We&apos;ll create
                a beautiful custom cake made especially for
                your celebration.
              </motion.p>

              {/* =====================================
                  FEATURES
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
                  duration: 0.5,
                  delay: 0.36,
                }}
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-3
                  sm:flex
                  sm:flex-wrap
                "
              >
                <Feature
                  icon={<CakeSlice size={13} />}
                  text="Choose Flavour"
                />

                <Feature
                  icon={<Palette size={13} />}
                  text="Choose Design"
                />

                <Feature
                  icon={<Heart size={13} />}
                  text="Personal Message"
                />
              </motion.div>

              {/* =====================================
                  BUTTONS
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
                <a
                  href="#custom-cake-form"
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
                  Design Your Cake

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                <a
                  href="#design-gallery"
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
                  View Designs
                </a>
              </motion.div>
            </div>
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
            px-6
            py-4
            backdrop-blur-md

            sm:px-10
            lg:px-14
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
              "Birthday Cakes",
              "Wedding Cakes",
              "Anniversary Cakes",
              "Kids Cakes",
              "Theme Cakes",
              "Photo Cakes",
            ].map((item) => (
              <span
                key={item}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2

                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-[#705b55]

                  sm:text-[10px]
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

                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   FEATURE
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