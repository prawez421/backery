"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";

export default function BakeryLocation() {
  return (
    <section
      id="location"
      className="
        relative
        overflow-hidden
        bg-[#f7efeb]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[190px]
          -top-[180px]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#9a1e2f]/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[200px]
          -right-[180px]
          h-[440px]
          w-[440px]
          rounded-full
          border
          border-[#9a1e2f]/[0.05]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div
          className="
            mb-10
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1fr_420px]
            lg:items-end
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f3dfe0]
                  text-[#9a1e2f]
                "
              >
                <MapPin size={13} />
              </span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2.7px]
                  text-[#9a1e2f]
                "
              >
                Find Our Bakery
              </span>
            </div>

            <h2
              className="
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
              Come Say Hello,
              <br />

              <span className="italic text-[#9a1e2f]">
                We&apos;ll Handle The Sweet Part.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              text-[11px]
              leading-6
              text-[#806d67]
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            Visit Alibros Bakery for freshly baked cakes,
            pastries and treats. Use the location details below
            to plan your visit.
          </motion.p>
        </div>

        {/* =================================================
            LOCATION CARD
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            overflow-hidden

            rounded-[30px]

            border
            border-[#e5d4ce]

            bg-white

            shadow-[0_18px_55px_rgba(70,30,30,0.07)]

            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* =================================================
              LEFT - MAP STYLE AREA
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
              duration: 0.65,
            }}
            className="
              relative
              min-h-[390px]
              overflow-hidden
              bg-[#eee6e1]

              sm:min-h-[450px]
              lg:min-h-[570px]
            "
          >
            {/* =========================================
                MAP BACKGROUND PATTERN

                Isko baad me real Google Map iframe
                se replace kar sakte ho.
            ========================================== */}

            <div className="absolute inset-0 bg-[#eee8e4]" />

            {/* ROAD LINES */}

            <div
              className="
                absolute
                -left-[10%]
                top-[20%]
                h-[42px]
                w-[125%]
                rotate-[8deg]
                bg-white/80
              "
            />

            <div
              className="
                absolute
                -left-[10%]
                top-[58%]
                h-[32px]
                w-[125%]
                -rotate-[12deg]
                bg-white/70
              "
            />

            <div
              className="
                absolute
                left-[22%]
                top-[-15%]
                h-[130%]
                w-[28px]
                rotate-[15deg]
                bg-white/65
              "
            />

            <div
              className="
                absolute
                right-[20%]
                top-[-10%]
                h-[125%]
                w-[36px]
                -rotate-[7deg]
                bg-white/60
              "
            />

            {/* SMALL STREET LINES */}

            <div
              className="
                absolute
                left-[8%]
                top-[35%]
                h-[2px]
                w-[35%]
                rotate-[-18deg]
                bg-[#d8ccc6]
              "
            />

            <div
              className="
                absolute
                bottom-[24%]
                right-[5%]
                h-[2px]
                w-[45%]
                rotate-[15deg]
                bg-[#d8ccc6]
              "
            />

            <div
              className="
                absolute
                right-[30%]
                top-[12%]
                h-[35%]
                w-[2px]
                rotate-[20deg]
                bg-[#d8ccc6]
              "
            />

            {/* DECORATIVE BLOCKS */}

            <div
              className="
                absolute
                left-[8%]
                top-[9%]
                h-[55px]
                w-[90px]
                rotate-[-6deg]
                rounded-[12px]
                bg-[#ded4ce]
              "
            />

            <div
              className="
                absolute
                bottom-[10%]
                left-[15%]
                h-[70px]
                w-[120px]
                rotate-[8deg]
                rounded-[15px]
                bg-[#e1d7d2]
              "
            />

            <div
              className="
                absolute
                right-[7%]
                top-[14%]
                h-[80px]
                w-[110px]
                rotate-[5deg]
                rounded-[15px]
                bg-[#e0d6d0]
              "
            />

            {/* =========================================
                LOCATION PIN
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                y: -25,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.3,
                type: "spring",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* PULSE */}

              <motion.div
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.25, 0, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[90px]
                  w-[90px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#9a1e2f]/20
                "
              />

              {/* PIN */}

              <div
                className="
                  relative
                  flex
                  h-[64px]
                  w-[64px]
                  items-center
                  justify-center

                  rounded-full

                  border-[5px]
                  border-white

                  bg-[#9a1e2f]

                  text-white

                  shadow-[0_12px_35px_rgba(90,25,35,0.3)]
                "
              >
                <CakeSlice size={22} />
              </div>

              {/* LOCATION LABEL */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[78px]
                  w-[180px]
                  -translate-x-1/2

                  rounded-[14px]

                  bg-[#281916]

                  px-4
                  py-3

                  text-center

                  shadow-xl
                "
              >
                <p
                  className="
                    font-serif
                    text-[14px]
                    font-semibold
                    text-white
                  "
                >
                  Alibros Bakery
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    uppercase
                    tracking-[1.5px]
                    text-[#e6a8a5]
                  "
                >
                  You&apos;ve Found Us
                </p>
              </div>
            </motion.div>

            {/* TOP MAP BADGE */}

            <div
              className="
                absolute
                left-5
                top-5
                z-20

                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-white

                bg-white/90

                px-4
                py-2

                shadow-sm

                backdrop-blur-md
              "
            >
              <Navigation
                size={11}
                className="text-[#9a1e2f]"
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#5c4540]
                "
              >
                Bakery Location
              </span>
            </div>

            {/* MAP NOTE */}

            <div
              className="
                absolute
                bottom-5
                left-5
                z-20

                rounded-[12px]

                border
                border-white

                bg-white/85

                px-3
                py-2

                text-[7px]
                text-[#8a7771]

                shadow-sm

                backdrop-blur-md
              "
            >
              Map preview • Add real Google Map later
            </div>
          </motion.div>

          {/* =================================================
              RIGHT - LOCATION DETAILS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              duration: 0.65,
            }}
            className="
              relative
              overflow-hidden
              bg-[#fffdfb]

              px-6
              py-8

              sm:px-8
              sm:py-10

              lg:px-9
              lg:py-11
            "
          >
            {/* DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[120px]
                -top-[130px]
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-[#9a1e2f]/[0.05]
              "
            />

            <div className="relative z-10">
              {/* LABEL */}

              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-[#f5e4e4]

                  px-3.5
                  py-2
                "
              >
                <Sparkles
                  size={11}
                  className="text-[#9a1e2f]"
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1.7px]
                    text-[#9a1e2f]
                  "
                >
                  Visit Us
                </span>
              </div>

              {/* TITLE */}

              <h3
                className="
                  font-serif
                  text-[30px]
                  font-semibold
                  leading-[1.1]
                  text-[#30211d]

                  sm:text-[34px]
                "
              >
                Alibros
                <br />

                <span className="italic text-[#9a1e2f]">
                  Bakery.
                </span>
              </h3>

              <p
                className="
                  mt-4
                  max-w-[360px]
                  text-[10px]
                  leading-[1.8]
                  text-[#83706a]
                "
              >
                Stop by the bakery, explore our fresh
                collection and find something delicious for
                yourself or your next celebration.
              </p>

              {/* =====================================
                  INFO
              ====================================== */}

              <div
                className="
                  mt-8
                  space-y-3
                "
              >
                <LocationInfo
                  icon={<MapPin size={16} />}
                  label="Bakery Address"
                  value="Add your complete bakery address here"
                />

                <LocationInfo
                  icon={<Phone size={16} />}
                  label="Phone"
                  value="+91 XXXXX XXXXX"
                />

                <LocationInfo
                  icon={<Clock3 size={16} />}
                  label="Opening Hours"
                  value="Check our weekly schedule"
                />
              </div>

              {/* DIVIDER */}

              <div className="my-7 h-px bg-[#eadbd5]" />

              {/* =====================================
                  DIRECTIONS
              ====================================== */}

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#9a1e2f]
                  "
                >
                  Need Directions?
                </p>

                <p
                  className="
                    mt-2
                    text-[9px]
                    leading-[1.7]
                    text-[#8b7872]
                  "
                >
                  Add your Google Maps location link below so
                  customers can navigate directly to the
                  bakery.
                </p>

                {/* 
                  IMPORTANT:
                  "#" ko actual Google Maps location URL
                  se replace karna.
                */}

                <Link
                  href="#"
                  className="
                    group
                    mt-5

                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-[16px]

                    bg-[#9a1e2f]

                    px-5
                    py-4

                    text-white

                    shadow-[0_10px_25px_rgba(154,30,47,0.16)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#7e1726]
                  "
                >
                  <div className="flex items-center gap-3">
                    <Navigation size={15} />

                    <div>
                      <p
                        className="
                          text-[7px]
                          uppercase
                          tracking-[1.5px]
                          text-white/60
                        "
                      >
                        Open In Maps
                      </p>

                      <p
                        className="
                          mt-0.5
                          font-serif
                          text-[14px]
                          font-semibold
                        "
                      >
                        Get Directions
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full

                      bg-white/10

                      transition-all
                      duration-300

                      group-hover:bg-white
                      group-hover:text-[#9a1e2f]
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />
                  </span>
                </Link>
              </div>

              {/* =====================================
                  SMALL FOOTER
              ====================================== */}

              <div
                className="
                  mt-5

                  flex
                  items-center
                  gap-3

                  rounded-[14px]

                  border
                  border-[#eadbd5]

                  bg-[#faf4f1]

                  px-4
                  py-3
                "
              >
                <CakeSlice
                  size={14}
                  className="shrink-0 text-[#9a1e2f]"
                />

                <p
                  className="
                    text-[8px]
                    leading-[1.6]
                    text-[#806d67]
                  "
                >
                  Visiting for a custom cake? Contact the
                  bakery beforehand for availability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   LOCATION INFO
===================================================== */

function LocationInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4

        rounded-[16px]

        border
        border-[#eadbd5]

        bg-[#fffaf7]

        px-4
        py-3.5

        transition-all
        duration-300

        hover:border-[#dcbeb8]
        hover:bg-white
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-[12px]

          bg-[#f3dfe0]

          text-[#9a1e2f]

          transition-all
          duration-300

          group-hover:bg-[#9a1e2f]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-[7px]
            font-bold
            uppercase
            tracking-[1.4px]
            text-[#a08c86]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            text-[9px]
            font-semibold
            leading-[1.5]
            text-[#493631]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}