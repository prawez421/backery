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

export default function AboutCTA() {
  return (
    <section className="bg-[#fffaf7] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          min-h-[470px]
          max-w-[1450px]
          overflow-hidden
          rounded-[30px]
          sm:min-h-[500px]
          lg:min-h-[540px]
        "
      >
        {/* =========================================
            BACKGROUND IMAGE
        ========================================== */}

        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1800&q=90"
          alt="Fresh bakery treats from Alibros Bakery"
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
            transition-transform
            duration-[1500ms]
            hover:scale-[1.03]
          "
        />

        {/* =========================================
            OVERLAYS
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#1b0d0b]/95
            via-[#28120f]/75
            to-[#28120f]/20
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/35
            via-transparent
            to-black/10
          "
        />

        {/* =========================================
            DECORATIVE CIRCLES
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[120px]
            -top-[150px]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[180px]
            right-[8%]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[50px]
            right-[50px]
            hidden
            h-[170px]
            w-[170px]
            rounded-full
            border
            border-white/[0.06]
            lg:block
          "
        />

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[470px]
            items-center
            px-6
            py-12

            sm:min-h-[500px]
            sm:px-10

            lg:min-h-[540px]
            lg:px-16

            xl:px-20
          "
        >
          <div className="max-w-[680px]">
            {/* =====================================
                SMALL LABEL
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/15
                bg-white/[0.08]
                px-4
                py-2.5
                backdrop-blur-md
              "
            >
              <Sparkles
                size={12}
                className="text-[#f1b5b1]"
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#f1b5b1]
                  sm:text-[9px]
                "
              >
                A Little Sweetness Awaits
              </span>
            </motion.div>

            {/* =====================================
                HEADING
            ====================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.2,
              }}
              className="
                font-serif
                text-[40px]
                font-medium
                leading-[1.03]
                tracking-[-1.5px]
                text-white

                sm:text-[50px]
                lg:text-[58px]
                xl:text-[64px]
              "
            >
              Made Fresh.
              <br />

              Made With Love.
              <br />

              <span className="italic text-[#efaaa6]">
                Made For You.
              </span>
            </motion.h2>

            {/* =====================================
                DESCRIPTION
            ====================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="
                mt-5
                max-w-[550px]
                text-[11px]
                leading-6
                text-white/65

                sm:text-[12px]
                lg:text-[13px]
              "
            >
              From celebration cakes and pastries to cookies,
              breads, cupcakes and desserts — discover something
              delicious for everyday cravings and special
              moments at Alibros Bakery.
            </motion.p>

            {/* =====================================
                MINI FEATURES
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.38,
              }}
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              <Feature
                icon={<CakeSlice size={12} />}
                text="Celebration Cakes"
              />

              <Feature
                icon={<Croissant size={12} />}
                text="Fresh Bakery"
              />

              <Feature
                icon={<Heart size={12} />}
                text="Made With Care"
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
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.46,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                min-[430px]:flex-row
              "
            >
              {/* EXPLORE MENU */}

              <Link
                href="/menu"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5

                  rounded-full

                  bg-white

                  px-6
                  py-3.5

                  text-[10px]
                  font-bold
                  text-[#8f1728]

                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#fff4f1]

                  sm:px-7
                  sm:text-[11px]
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

              {/* CUSTOM CAKE */}

              <Link
                href="/custom-cakes"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5

                  rounded-full

                  border
                  border-white/25

                  bg-white/[0.08]

                  px-6
                  py-3.5

                  text-[10px]
                  font-bold
                  text-white

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-white/50
                  hover:bg-white/15

                  sm:px-7
                  sm:text-[11px]
                "
              >
                <CakeSlice size={14} />

                Create Custom Cake
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            FLOATING BRAND CARD
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: 0.55,
          }}
          className="
            absolute
            bottom-6
            right-6
            z-20

            hidden

            rounded-[20px]

            border
            border-white/15

            bg-black/20

            px-5
            py-4

            backdrop-blur-xl

            md:block
            lg:bottom-8
            lg:right-8
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-[#9a1e2f]

                text-white
              "
            >
              <CakeSlice
                size={16}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <p
                className="
                  font-serif
                  text-[15px]
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
                  font-semibold
                  uppercase
                  tracking-[1.8px]
                  text-white/45
                "
              >
                Baked With Care
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM CATEGORY STRIP
        ========================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-10

            hidden

            border-t
            border-white/10

            bg-black/10

            px-8
            py-3

            backdrop-blur-md

            lg:block
          "
        >
          <div
            className="
              flex
              max-w-[750px]
              items-center
              gap-6
            "
          >
            {[
              "Cakes",
              "Pastries",
              "Cupcakes",
              "Cookies",
              "Breads",
              "Desserts",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-[#eaa9a6]
                  "
                />

                <span
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[1.4px]
                    text-white/50
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
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
        inline-flex
        items-center
        gap-2

        rounded-full

        border
        border-white/15

        bg-white/[0.07]

        px-3
        py-2

        text-[8px]
        font-semibold
        text-white/75

        backdrop-blur-md

        sm:text-[9px]
      "
    >
      <span className="text-[#efaaa6]">
        {icon}
      </span>

      {text}
    </div>
  );
}