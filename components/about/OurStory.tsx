"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CakeSlice,
  Croissant,
  Heart,
  Sparkles,
  Wheat,
} from "lucide-react";

export default function OurStory() {
  return (
    <section className="overflow-hidden bg-[#fffdfb] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              LEFT IMAGE COMPOSITION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[470px] sm:min-h-[570px] lg:min-h-[640px]"
          >
            {/* BACKGROUND SHAPE */}

            <div
              className="
                absolute
                left-[4%]
                top-[4%]
                h-[88%]
                w-[78%]
                rounded-[150px_30px_30px_30px]
                bg-[#f5e9e4]
              "
            />

            {/* MAIN IMAGE */}

            <div
              className="
                absolute
                left-0
                top-0
                h-[390px]
                w-[78%]
                overflow-hidden
                rounded-[120px_24px_24px_24px]
                shadow-[0_25px_60px_rgba(70,30,30,0.12)]

                sm:h-[470px]
                lg:h-[520px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=90"
                alt="Fresh bakery products at Alibros Bakery"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-[1.04]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/25
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE LABEL */}

              <div className="absolute bottom-5 left-5">
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                    text-white/70
                  "
                >
                  Freshly Prepared
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[18px]
                    text-white
                    sm:text-[21px]
                  "
                >
                  Made with care, every day.
                </p>
              </div>
            </div>

            {/* SMALL IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                absolute
                bottom-[15px]
                right-0
                z-20
                h-[190px]
                w-[175px]
                overflow-hidden
                rounded-[24px]
                border-[6px]
                border-[#fffdfb]
                shadow-[0_18px_45px_rgba(70,30,30,0.15)]

                sm:h-[235px]
                sm:w-[210px]

                lg:bottom-[25px]
                lg:h-[250px]
                lg:w-[220px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=90"
                alt="Fresh celebration cake"
                fill
                sizes="220px"
                className="object-cover"
              />
            </motion.div>

            {/* FLOATING BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 6,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="
                absolute
                right-[5%]
                top-[8%]
                z-30
                flex
                h-[95px]
                w-[95px]
                flex-col
                items-center
                justify-center
                rounded-full
                bg-[#9a1e2f]
                text-center
                text-white
                shadow-[0_15px_35px_rgba(154,30,47,0.25)]

                sm:right-[8%]
              "
            >
              <Croissant size={16} />

              <span
                className="
                  mt-1
                  text-[7px]
                  font-bold
                  uppercase
                  leading-[1.5]
                  tracking-[1.3px]
                "
              >
                Fresh
                <br />
                Every Day
              </span>
            </motion.div>

            {/* DECORATIVE DOTS */}

            <div
              className="
                absolute
                bottom-[8%]
                left-[3%]
                hidden
                grid-cols-4
                gap-[7px]
                sm:grid
              "
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-[#9a1e2f]/25
                  "
                />
              ))}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="lg:pl-3">

            {/* LABEL */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                  bg-[#f4e0e2]
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
                  tracking-[2.7px]
                  text-[#9a1e2f]

                  sm:text-[10px]
                "
              >
                Our Story
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.08,
              }}
              className="
                max-w-[610px]
                font-serif
                text-[35px]
                font-medium
                leading-[1.08]
                tracking-[-1px]
                text-[#281b18]

                sm:text-[43px]
                lg:text-[50px]
              "
            >
              A Simple Love For
              <br />

              <span className="italic text-[#9a1e2f]">
                Good Baking.
              </span>
            </motion.h2>

            {/* STORY */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.16,
              }}
              className="
                mt-6
                max-w-[590px]
                space-y-4
                text-[12px]
                leading-[1.9]
                text-[#786660]

                sm:text-[13px]
              "
            >
              <p>
                Alibros Bakery is built around a simple idea:
                make delicious baked treats that bring a little
                more happiness to everyday moments and special
                celebrations.
              </p>

              <p>
                From soft breads and buttery cookies to
                pastries, cupcakes, desserts and celebration
                cakes, our goal is to create treats that look
                beautiful and taste just as special.
              </p>

              <p>
                For birthdays, anniversaries, weddings or a
                simple sweet craving, we want every Alibros
                Bakery creation to feel thoughtfully prepared
                for the moment.
              </p>
            </motion.div>

            {/* =================================================
                QUOTE CARD
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.25,
              }}
              className="
                relative
                mt-7
                overflow-hidden
                rounded-[20px]
                border
                border-[#ead8d2]
                bg-[#f8efeb]
                px-5
                py-5

                sm:px-6
              "
            >
              <div
                className="
                  absolute
                  -right-[50px]
                  -top-[60px]
                  h-[150px]
                  w-[150px]
                  rounded-full
                  border
                  border-[#9a1e2f]/10
                "
              />

              <Heart
                size={17}
                className="text-[#9a1e2f]"
              />

              <p
                className="
                  relative
                  z-10
                  mt-3
                  max-w-[500px]
                  font-serif
                  text-[18px]
                  italic
                  leading-[1.5]
                  text-[#49332e]

                  sm:text-[20px]
                "
              >
                &ldquo;Because the best moments deserve
                something freshly baked.&rdquo;
              </p>

              <p
                className="
                  relative
                  z-10
                  mt-3
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#9a1e2f]
                "
              >
                Alibros Bakery
              </p>
            </motion.div>

            {/* =================================================
                MINI FEATURES
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.32,
              }}
              className="
                mt-7
                grid
                grid-cols-1
                gap-3
                min-[450px]:grid-cols-3
              "
            >
              <MiniFeature
                icon={<Wheat size={16} />}
                title="Ingredients"
                text="Selected with care"
              />

              <MiniFeature
                icon={<CakeSlice size={16} />}
                title="Craft"
                text="Thoughtfully made"
              />

              <MiniFeature
                icon={<Heart size={16} />}
                title="Passion"
                text="Baked with care"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   MINI FEATURE
===================================================== */

function MiniFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-[16px]
        border
        border-[#eadbd5]
        bg-white
        p-3.5
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#dcb9b1]
        hover:shadow-[0_10px_25px_rgba(70,30,30,0.07)]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#f6e5e5]
          text-[#9a1e2f]
          transition-colors
          duration-300

          group-hover:bg-[#9a1e2f]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <div>
        <h3
          className="
            text-[10px]
            font-bold
            text-[#4b3833]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-0.5
            text-[8px]
            text-[#94817b]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}