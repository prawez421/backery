"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-[#fffaf7] px-4 py-5 sm:px-6 lg:px-10">
      <div
        className="
          relative
          mx-auto
          min-h-[500px]
          max-w-[1450px]
          overflow-hidden
          rounded-[28px]
          sm:min-h-[540px]
          lg:min-h-[580px]
        "
      >
        {/* =========================================
            BACKGROUND IMAGE
        ========================================== */}

        <Image
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=90"
          alt="Alibros Bakery contact"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* =========================================
            OVERLAYS
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#1c0e0c]/90
            via-[#2b1713]/70
            to-[#2b1713]/30
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#1a0c0a]/70
            via-transparent
            to-black/20
          "
        />

        {/* =========================================
            DECORATION
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[160px]
            -top-[180px]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-white/[0.08]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[130px]
            top-[60px]
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[80px]
            top-[120px]
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
            CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[500px]
            items-center
            px-6
            pb-[120px]
            pt-12

            sm:min-h-[540px]
            sm:px-10

            lg:min-h-[580px]
            lg:px-16
            lg:pb-[125px]

            xl:px-20
          "
        >
          <div className="max-w-[690px]">
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
                mb-5
                flex
                items-center
                gap-2
                text-[9px]
                font-medium
                text-white/55
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

              <span>/</span>

              <span className="text-[#f0b1ad]">
                Contact
              </span>
            </motion.div>

            {/* SMALL LABEL */}

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
                border-white/15

                bg-white/[0.08]

                px-4
                py-2

                backdrop-blur-md
              "
            >
              <Sparkles
                size={12}
                className="text-[#f0b1ad]"
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#f0b1ad]

                  sm:text-[9px]
                "
              >
                Get In Touch
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
                text-[42px]
                font-medium
                leading-[1.02]
                tracking-[-1.5px]
                text-white

                sm:text-[52px]
                lg:text-[60px]
                xl:text-[66px]
              "
            >
              Something Sweet
              <br />

              Starts With{" "}

              <span className="italic text-[#f0aaa7]">
                Hello.
              </span>
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
                duration: 0.55,
                delay: 0.27,
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
              Have a question about our cakes, bakery treats
              or custom orders? Tell us what you&apos;re
              looking for and we&apos;ll be happy to help.
            </motion.p>

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
                duration: 0.55,
                delay: 0.38,
              }}
              className="
                mt-7
                flex
                flex-col
                gap-3
                min-[430px]:flex-row
              "
            >
              <Link
                href="#contact-form"
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

                  text-[10px]
                  font-semibold
                  text-white

                  shadow-[0_10px_30px_rgba(0,0,0,0.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#7e1726]

                  sm:px-7
                  sm:text-[11px]
                "
              >
                Send Us A Message

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
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-white/25

                  bg-white/[0.08]

                  px-6
                  py-3.5

                  text-[10px]
                  font-semibold
                  text-white

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-white/45
                  hover:bg-white/[0.15]

                  sm:px-7
                  sm:text-[11px]
                "
              >
                <CakeSlice size={14} />

                Custom Cake
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            FLOATING CONTACT STRIP
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
            delay: 0.5,
          }}
          className="
            absolute
            bottom-4
            left-4
            right-4
            z-20

            grid
            grid-cols-1

            overflow-hidden

            rounded-[20px]

            border
            border-white/15

            bg-[#fffaf7]/95

            shadow-[0_15px_40px_rgba(0,0,0,0.15)]

            backdrop-blur-xl

            sm:grid-cols-3

            lg:bottom-5
            lg:left-5
            lg:right-5
          "
        >
          {/* MESSAGE */}

          <ContactItem
            icon={<MessageCircle size={17} />}
            label="Have A Question?"
            text="We're happy to help"
          />

          {/* PHONE */}

          <ContactItem
            icon={<Phone size={17} />}
            label="Talk To Us"
            text="Bakery enquiries"
            border
          />

          {/* EMAIL */}

          <ContactItem
            icon={<Mail size={17} />}
            label="Write To Us"
            text="Send your enquiry"
            border
          />
        </motion.div>

        {/* =========================================
            FLOATING CAKE BADGE
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 6,
          }}
          transition={{
            duration: 0.55,
            delay: 0.55,
          }}
          className="
            absolute
            right-[5%]
            top-[12%]
            z-20

            hidden

            h-[100px]
            w-[100px]

            flex-col
            items-center
            justify-center

            rounded-full

            border
            border-white/15

            bg-[#9a1e2f]

            text-center
            text-white

            shadow-[0_15px_35px_rgba(0,0,0,0.2)]

            lg:flex
          "
        >
          <CakeSlice size={17} />

          <span
            className="
              mt-2
              text-[7px]
              font-bold
              uppercase
              leading-[1.5]
              tracking-[1.3px]
            "
          >
            Let&apos;s
            <br />
            Talk Cake
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   CONTACT ITEM
===================================================== */

function ContactItem({
  icon,
  label,
  text,
  border = false,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  border?: boolean;
}) {
  return (
    <div
      className={`
        group
        flex
        items-center
        gap-3

        px-4
        py-3.5

        transition-colors
        duration-300

        hover:bg-white

        sm:px-5
        sm:py-4

        ${
          border
            ? "border-t border-[#eadbd5] sm:border-l sm:border-t-0"
            : ""
        }
      `}
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
            tracking-[1.5px]
            text-[#a18b84]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-0.5
            font-serif
            text-[13px]
            font-semibold
            text-[#382722]

            sm:text-[14px]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}