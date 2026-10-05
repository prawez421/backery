"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CakeSlice,
  Clock3,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

/* =====================================================
   QUICK LINKS
===================================================== */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Custom Cakes", href: "/custom-cakes" },
  { name: "Contact Us", href: "/contact" },
];

/* =====================================================
   BAKERY LINKS
===================================================== */

const bakeryLinks = [
  {
    name: "Cakes",
    href: "/cakes",
  },
  {
    name: "Cupcakes",
    href: "/menu?category=cupcakes",
  },
  {
    name: "Pastries",
    href: "/menu?category=pastries",
  },
  {
    name: "Cookies",
    href: "/menu?category=cookies",
  },
  {
    name: "Breads",
    href: "/menu?category=breads",
  },
  {
    name: "Custom Cakes",
    href: "/custom-cakes",
  },
];

/* =====================================================
   FOOTER
===================================================== */

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#211411]
        text-white
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          -top-[220px]
          h-[470px]
          w-[470px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[260px]
          -right-[200px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9a1e2f]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[40px]
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#9a1e2f]/[0.04]
          blur-[70px]
        "
      />

      {/* =================================================
          TOP BRAND STRIP
      ================================================== */}

      <div
        className="
          relative
          z-10
          border-b
          border-white/[0.07]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            gap-5
            px-5
            py-7

            sm:px-8

            md:flex-row
            md:items-center
            md:justify-between

            lg:px-12
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#9a1e2f]
                text-white
              "
            >
              <Sparkles size={14} />
            </div>

            <div>
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                  text-[#dca39f]
                "
              >
                Fresh From Our Oven
              </p>

              <p
                className="
                  mt-1
                  font-serif
                  text-[14px]
                  text-white/85
                "
              >
                Made fresh, made with love.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <Link
            href="/menu"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              text-[9px]
              font-semibold
              text-white/60
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Explore Our Menu

            <ArrowUpRight
              size={12}
              className="
                text-[#dca39f]
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </Link>
        </div>
      </div>

      {/* =================================================
          MAIN FOOTER
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
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.65,
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          gap-10
          px-5
          py-14

          sm:px-8

          md:grid-cols-2

          lg:grid-cols-[1.45fr_0.75fr_0.8fr_1.15fr]
          lg:gap-12
          lg:px-12
          lg:py-16
        "
      >
        {/* =================================================
            BRAND
        ================================================== */}

        <div>
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-3
            "
          >
            {/* LOGO */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#9a1e2f]
                text-white
                shadow-[0_8px_25px_rgba(154,30,47,0.25)]
                transition-transform
                duration-300
                group-hover:-rotate-6
              "
            >
              <CakeSlice size={20} />
            </div>

            {/* BRAND NAME */}

            <div>
              <h2
                className="
                  font-serif
                  text-[23px]
                  font-semibold
                  leading-none
                  tracking-[-0.4px]
                  text-white
                "
              >
                ALIBROS
              </h2>

              <p
                className="
                  mt-1.5
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-[#dca39f]
                "
              >
                Bakery
              </p>
            </div>
          </Link>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-[340px]
              text-[10px]
              leading-[1.9]
              text-white/45
            "
          >
            Artisan cakes, fresh pastries, breads and sweet
            creations made with quality ingredients and a
            little extra love for every celebration.
          </p>

          {/* SMALL TAG */}

          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.04]
              px-3.5
              py-2
            "
          >
            <CakeSlice
              size={11}
              className="text-[#dca39f]"
            />

            <span
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[1.4px]
                text-white/50
              "
            >
              Baked With Love
            </span>
          </div>

          {/* SOCIAL MEDIA */}

          <div className="mt-6 flex items-center gap-3">
            <SocialLink
              href="https://www.instagram.com/"
              label="Instagram"
            >
              <FaInstagram size={16} />
            </SocialLink>

            <SocialLink
              href="https://www.facebook.com/"
              label="Facebook"
            >
              <FaFacebookF size={14} />
            </SocialLink>
          </div>
        </div>

        {/* =================================================
            QUICK LINKS
        ================================================== */}

        <FooterLinks
          title="Quick Links"
          links={quickLinks}
        />

        {/* =================================================
            BAKERY
        ================================================== */}

        <FooterLinks
          title="Our Bakery"
          links={bakeryLinks}
        />

        {/* =================================================
            CONTACT
        ================================================== */}

        <div>
          <FooterHeading>
            Visit Alibros
          </FooterHeading>

          <div className="mt-6 space-y-5">

            {/* LOCATION */}

            <ContactItem
              icon={<MapPin size={14} />}
              label="Our Location"
            >
              <p>
                Ranchi, Jharkhand
                <br />
                India
              </p>
            </ContactItem>

            {/* PHONE */}

            <ContactItem
              icon={<Phone size={14} />}
              label="Call Us"
            >
              <a
                href="tel:+917250076595"
                className="
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                +91 72500 76595
              </a>
            </ContactItem>

            {/* EMAIL */}

            <ContactItem
              icon={<Mail size={14} />}
              label="Email Us"
            >
              <a
                href="mailto:prawez713@gmail.com"
                className="
                  break-all
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                prawez713@gmail.com
              </a>
            </ContactItem>

            {/* HOURS */}

            <ContactItem
              icon={<Clock3 size={14} />}
              label="Opening Hours"
            >
              <p>
                Monday - Sunday
                <br />
                9:00 AM - 10:00 PM
              </p>
            </ContactItem>
          </div>
        </div>
      </motion.div>

      {/* =================================================
          BOTTOM FOOTER
      ================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            items-center
            justify-between
            gap-4
            px-5
            py-5
            text-center

            sm:px-8

            md:flex-row
            md:text-left

            lg:px-12
          "
        >
          {/* COPYRIGHT */}

          <p className="text-[9px] text-white/35">
            © {new Date().getFullYear()} Alibros Bakery. All
            rights reserved.
          </p>

          {/* CENTER */}

          <p
            className="
              flex
              items-center
              gap-1.5
              text-[9px]
              text-white/35
            "
          >
            Baked with

            <Heart
              size={10}
              fill="currentColor"
              className="text-[#b52a3d]"
            />

            for every celebration.
          </p>

          {/* LEGAL */}

          <div
            className="
              flex
              items-center
              gap-5
              text-[9px]
              text-white/35
            "
          >
            <Link
              href="/privacy"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =====================================================
   FOOTER HEADING
===================================================== */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3
      className="
        font-serif
        text-[16px]
        font-semibold
        text-white
      "
    >
      {children}
    </h3>
  );
}

/* =====================================================
   FOOTER LINKS
===================================================== */

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>

      <div className="mt-6 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="
              group
              flex
              w-fit
              items-center
              gap-1.5
              text-[10px]
              text-white/45
              transition-colors
              duration-300
              hover:text-[#e8aaa7]
            "
          >
            {link.name}

            <ArrowUpRight
              size={10}
              className="
                -translate-x-1
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   CONTACT ITEM
===================================================== */

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        group
        flex
        items-start
        gap-3
      "
    >
      <div
        className="
          mt-[2px]
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#9a1e2f]/20
          text-[#e8aaa7]
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
            text-[8px]
            uppercase
            tracking-[1px]
            text-white/30
          "
        >
          {label}
        </p>

        <div
          className="
            mt-1
            text-[10px]
            leading-5
            text-white/60
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   SOCIAL LINK
===================================================== */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        text-white/55
        transition-colors
        duration-300

        hover:border-[#9a1e2f]
        hover:bg-[#9a1e2f]
        hover:text-white
      "
    >
      {children}
    </motion.a>
  );
}