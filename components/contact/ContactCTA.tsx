"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CakeSlice,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="
        overflow-hidden
        bg-[#fffaf7]
        px-4
        py-14
        sm:px-6
        sm:py-16
        lg:px-10
        lg:py-20
      "
    >
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
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          max-w-[1400px]
          overflow-hidden
          rounded-[30px]
          bg-[#251512]
        "
      >
        {/* =====================================================
            DECORATIVE CIRCLES
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[170px]
            -top-[190px]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-white/[0.05]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[210px]
            left-[25%]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-white/[0.04]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[25%]
            top-[10%]
            h-[180px]
            w-[180px]
            rounded-full
            border
            border-white/[0.04]
          "
        />

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              flex
              items-center
              px-6
              py-12

              sm:px-10
              sm:py-14

              lg:min-h-[560px]
              lg:px-14
              lg:py-16

              xl:px-20
            "
          >
            <div className="max-w-[650px]">
              {/* LABEL */}

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
                  delay: 0.1,
                }}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2.5

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
                  className="text-[#eaa7a4]"
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[2.3px]
                    text-[#eaa7a4]
                  "
                >
                  Let&apos;s Create Something Special
                </span>
              </motion.div>

              {/* HEADING */}

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
                  delay: 0.15,
                }}
                className="
                  font-serif
                  text-[39px]
                  font-medium
                  leading-[1.04]
                  tracking-[-1.3px]
                  text-white

                  sm:text-[48px]
                  lg:text-[54px]
                  xl:text-[60px]
                "
              >
                Planning Something
                <br />

                <span className="italic text-[#eaa7a4]">
                  Delicious?
                </span>
              </motion.h2>

              {/* DESCRIPTION */}

              <motion.p
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
                  duration: 0.55,
                  delay: 0.25,
                }}
                className="
                  mt-5
                  max-w-[520px]
                  text-[10px]
                  leading-6
                  text-white/50

                  sm:text-[11px]
                  lg:text-[12px]
                "
              >
                From birthdays and anniversaries to weddings
                and special celebrations, tell us what
                you&apos;re planning and let&apos;s turn your
                cake idea into something memorable.
              </motion.p>

              {/* =================================================
                  BUTTONS
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.35,
                }}
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  min-[450px]:flex-row
                "
              >
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

                    bg-[#9a1e2f]

                    px-6
                    py-3.5

                    text-[9px]
                    font-bold
                    text-white

                    shadow-[0_12px_30px_rgba(0,0,0,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#b1293e]

                    sm:px-7
                    sm:text-[10px]
                  "
                >
                  <CakeSlice size={14} />

                  Plan A Custom Cake

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* CONTACT */}

                <Link
                  href="#contact-form"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5

                    rounded-full

                    border
                    border-white/15

                    bg-white/[0.05]

                    px-6
                    py-3.5

                    text-[9px]
                    font-bold
                    text-white

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-white/30
                    hover:bg-white/10

                    sm:px-7
                    sm:text-[10px]
                  "
                >
                  <MessageCircle size={14} />

                  Contact Us

                  <ArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  />
                </Link>
              </motion.div>

              {/* =================================================
                  SMALL FEATURES
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                }}
                className="
                  mt-9
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <SmallFeature text="Custom Designs" />

                <SmallFeature text="Freshly Baked" />

                <SmallFeature text="Made For Celebrations" />
              </motion.div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            className="
              relative
              min-h-[420px]
              overflow-hidden

              sm:min-h-[480px]

              lg:min-h-[560px]
            "
          >
            {/* IMAGE */}

            <Image
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90"
              alt="Beautiful custom celebration cake"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                hover:scale-[1.04]
              "
            />

            {/* LEFT IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#251512]
                via-[#251512]/15
                to-transparent

                lg:from-[#251512]/70
              "
            />

            {/* BOTTOM OVERLAY */}

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

            {/* =================================================
                TOP FLOATING BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 5,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.4,
              }}
              className="
                absolute
                right-5
                top-5

                flex
                h-[92px]
                w-[92px]
                flex-col
                items-center
                justify-center

                rounded-full

                border-[4px]
                border-white

                bg-[#9a1e2f]

                text-center
                text-white

                shadow-[0_12px_35px_rgba(0,0,0,0.25)]

                sm:right-7
                sm:top-7
                sm:h-[105px]
                sm:w-[105px]
              "
            >
              <CakeSlice size={18} />

              <span
                className="
                  mt-2
                  text-[7px]
                  font-bold
                  uppercase
                  leading-[1.4]
                  tracking-[1.3px]
                "
              >
                Made
                <br />
                With Love
              </span>
            </motion.div>

            {/* =================================================
                BOTTOM FLOATING CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.5,
              }}
              className="
                absolute
                bottom-5
                left-5
                right-5

                rounded-[20px]

                border
                border-white/20

                bg-white/90

                p-4

                shadow-[0_15px_40px_rgba(0,0,0,0.15)]

                backdrop-blur-xl

                sm:bottom-7
                sm:left-7
                sm:right-auto
                sm:w-[330px]
                sm:p-5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-[#f3dfe0]

                    text-[#9a1e2f]
                  "
                >
                  <Heart
                    size={17}
                    fill="currentColor"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[1.7px]
                      text-[#9a1e2f]
                    "
                  >
                    Your Celebration
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[15px]
                      font-semibold
                      text-[#34231f]

                      sm:text-[17px]
                    "
                  >
                    Deserves something special.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* =====================================================
   SMALL FEATURE
===================================================== */

function SmallFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[#9a1e2f]/25
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#eaa7a4]
          "
        />
      </span>

      <span
        className="
          text-[8px]
          font-medium
          text-white/55
        "
      >
        {text}
      </span>
    </div>
  );
}