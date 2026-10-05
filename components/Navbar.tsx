"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import {
  CakeSlice,
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

/* =====================================================
   ALIBROS BAKERY - MENU DATA
===================================================== */

const menuItems = [
  { name: "All Products", href: "/menu" },
  // { name: "Cakes", href: "/menu?category=cakes" },
  // { name: "Pastries", href: "/menu?category=pastries" },
  // { name: "Cupcakes", href: "/menu?category=cupcakes" },
  // { name: "Cookies", href: "/menu?category=cookies" },
  // { name: "Breads", href: "/menu?category=breads" },
  // { name: "Desserts", href: "/menu?category=desserts" },
  // { name: "Snacks", href: "/menu?category=snacks" },
];

const cakeItems = [
  { name: "All Cakes", href: "/cakes" },
  // { name: "Birthday Cakes", href: "/cakes?category=birthday" },
  // {
  //   name: "Anniversary Cakes",
  //   href: "/cakes?category=anniversary",
  // },
  // { name: "Wedding Cakes", href: "/cakes?category=wedding" },
  // { name: "Chocolate Cakes", href: "/cakes?category=chocolate" },
  // { name: "Photo Cakes", href: "/cakes?category=photo" },
  // { name: "Designer Cakes", href: "/cakes?category=designer" },
  // { name: "Bento Cakes", href: "/cakes?category=bento" },
];

/* =====================================================
   NAVBAR
===================================================== */

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
  const [mobileCakeDropdown, setMobileCakeDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Demo cart count
  // Later isko actual cart state/API se connect karna
  const cartCount = 2;

  /* =====================================================
     NAVBAR SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MENU WHEN ROUTE CHANGES
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
    setMobileMenuDropdown(false);
    setMobileCakeDropdown(false);
  }, [pathname]);

  /* =====================================================
     PREVENT BODY SCROLL
  ===================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     ACTIVE ROUTE CHECK
  ===================================================== */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =================================================
          HEADER
      ================================================== */}

      <motion.header
        initial={{
          y: -70,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          sticky
          top-0
          z-50
          w-full
          border-b
          transition-all
          duration-300

          ${
            scrolled
              ? `
                border-[#eee2dd]
                bg-[#fffaf7]/95
                shadow-[0_5px_30px_rgba(80,30,30,0.08)]
                backdrop-blur-xl
              `
              : `
                border-transparent
                bg-[#fffaf7]
              `
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            h-[68px]
            w-full
            max-w-[1450px]
            items-center
            justify-between
            gap-2
            px-3

            min-[360px]:px-4

            sm:h-[74px]
            sm:px-6

            lg:h-[78px]
            lg:px-6

            xl:px-10

            2xl:px-12
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="
              group
              flex
              min-w-0
              flex-1
              items-center
              gap-2

              sm:gap-3

              lg:flex-none
              lg:shrink-0
            "
          >
            {/* ICON */}

            <motion.div
              whileHover={{
                scale: 1.07,
                rotate: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#8f1728]
                text-white
                shadow-[0_5px_15px_rgba(143,23,40,0.16)]

                sm:h-10
                sm:w-10
              "
            >
              <CakeSlice
                size={18}
                strokeWidth={1.8}
                className="sm:h-5 sm:w-5"
              />
            </motion.div>

            {/* BRAND NAME */}

            <div className="min-w-0">
              <span
                className="
                  block
                  truncate
                  font-serif
                  text-[15px]
                  font-semibold
                  leading-tight
                  tracking-[-0.3px]
                  text-[#211816]

                  min-[360px]:text-[16px]

                  sm:text-[19px]

                  lg:text-[18px]

                  xl:text-[20px]
                "
              >
                Alibros Bakery
              </span>

              <span
                className="
                  mt-[2px]
                  hidden
                  whitespace-nowrap
                  text-[7px]
                  uppercase
                  tracking-[1.5px]
                  text-[#9b8d88]

                  sm:block

                  xl:text-[8px]
                  xl:tracking-[1.8px]
                "
              >
                Freshly Baked • Made With Love
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div
            className="
              hidden
              items-center
              gap-4

              lg:flex

              xl:gap-6

              2xl:gap-7
            "
          >
            {/* HOME */}

            <NavItem
              name="Home"
              href="/"
              active={pathname === "/"}
            />

            {/* MENU */}

            <DesktopDropdown
              name="Menu"
              href="/menu"
              active={pathname.startsWith("/menu")}
              items={menuItems}
            />

            {/* CAKES */}

            <DesktopDropdown
              name="Cakes"
              href="/cakes"
              active={pathname.startsWith("/cakes")}
              items={cakeItems}
            />

            {/* CUSTOM CAKES */}

            <NavItem
              name="Custom Cakes"
              href="/custom-cakes"
              active={isActive("/custom-cakes")}
            />

            {/* ABOUT */}

            <NavItem
              name="About Us"
              href="/about"
              active={isActive("/about")}
            />

            {/* CONTACT */}

            <NavItem
              name="Contact"
              href="/contact"
              active={isActive("/contact")}
            />
          </div>

          {/* =================================================
              DESKTOP RIGHT
          ================================================== */}

          <div
            className="
              hidden
              shrink-0
              items-center
              gap-2

              lg:flex

              xl:gap-3
            "
          >
            {/* CART */}

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="
                group
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#eadfda]
                bg-white
                text-[#493f3c]
                shadow-[0_4px_15px_rgba(70,30,30,0.04)]
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#8f1728]
                hover:text-[#8f1728]

                xl:h-11
                xl:w-11
              "
            >
              <ShoppingBag
                size={18}
                strokeWidth={1.8}
              />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-[3px]
                    -top-[4px]
                    flex
                    h-[18px]
                    min-w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#fffaf7]
                    bg-[#8f1728]
                    px-1
                    text-[8px]
                    font-bold
                    text-white
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* ORDER NOW */}

            <Link
              href="/order"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                whitespace-nowrap
                rounded-full
                bg-[#8f1728]
                px-4
                py-[10px]
                text-[12px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(143,23,40,0.18)]
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#761221]

                xl:gap-2
                xl:px-6
                xl:py-[11px]
                xl:text-[13px]
              "
            >
              Order Now

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE RIGHT
          ================================================== */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-1.5

              min-[360px]:gap-2

              lg:hidden
            "
          >
            {/* MOBILE CART */}

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="
                relative
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#eadfda]
                bg-white
                text-[#493f3c]
                shadow-[0_3px_10px_rgba(70,30,30,0.04)]

                sm:h-10
                sm:w-10
              "
            >
              <ShoppingBag
                size={17}
                strokeWidth={1.8}
              />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-[3px]
                    -top-[3px]
                    flex
                    h-[16px]
                    min-w-[16px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#fffaf7]
                    bg-[#8f1728]
                    px-[3px]
                    text-[7px]
                    font-bold
                    text-white

                    sm:h-[17px]
                    sm:min-w-[17px]
                    sm:text-[8px]
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON */}

            <motion.button
              type="button"
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => {
                setMenuOpen((prev) => !prev);
              }}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#eadfda]
                bg-white
                text-[#8f1728]
                shadow-[0_3px_10px_rgba(70,30,30,0.04)]

                sm:h-10
                sm:w-10
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                  >
                    <X size={19} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => setMenuOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/25
                backdrop-blur-[2px]

                lg:hidden
              "
            />

            {/* MOBILE MENU BOX */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="
                fixed
                left-3
                right-3
                top-[76px]
                z-50
                max-h-[calc(100dvh-90px)]
                overflow-y-auto
                overscroll-contain
                rounded-[18px]
                border
                border-[#efe3de]
                bg-[#fffaf7]
                p-3
                shadow-[0_20px_60px_rgba(50,20,20,0.18)]

                min-[360px]:left-4
                min-[360px]:right-4

                sm:top-[82px]
                sm:rounded-[22px]
                sm:p-4

                lg:hidden
              "
            >
              {/* MOBILE BRAND */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-3
                  border-b
                  border-[#eee2dd]
                  px-2
                  pb-3
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
                    bg-[#8f1728]
                    text-white
                  "
                >
                  <CakeSlice size={17} />
                </div>

                <div>
                  <p
                    className="
                      font-serif
                      text-[16px]
                      font-semibold
                      text-[#211816]
                    "
                  >
                    Alibros Bakery
                  </p>

                  <p
                    className="
                      mt-[2px]
                      text-[7px]
                      uppercase
                      tracking-[1.4px]
                      text-[#9b8d88]
                    "
                  >
                    Freshly Baked • Made With Love
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {/* HOME */}

                <MobileLink
                  name="Home"
                  href="/"
                  active={pathname === "/"}
                  onClick={() => setMenuOpen(false)}
                />

                {/* MENU */}

                <MobileDropdown
                  name="Menu"
                  active={pathname.startsWith("/menu")}
                  open={mobileMenuDropdown}
                  onToggle={() => {
                    setMobileMenuDropdown((prev) => !prev);

                    if (!mobileMenuDropdown) {
                      setMobileCakeDropdown(false);
                    }
                  }}
                  items={menuItems}
                  onNavigate={() => setMenuOpen(false)}
                />

                {/* CAKES */}

                <MobileDropdown
                  name="Cakes"
                  active={pathname.startsWith("/cakes")}
                  open={mobileCakeDropdown}
                  onToggle={() => {
                    setMobileCakeDropdown((prev) => !prev);

                    if (!mobileCakeDropdown) {
                      setMobileMenuDropdown(false);
                    }
                  }}
                  items={cakeItems}
                  onNavigate={() => setMenuOpen(false)}
                />

                {/* CUSTOM CAKES */}

                <MobileLink
                  name="Custom Cakes"
                  href="/custom-cakes"
                  active={isActive("/custom-cakes")}
                  onClick={() => setMenuOpen(false)}
                />

                {/* ABOUT */}

                <MobileLink
                  name="About Us"
                  href="/about"
                  active={isActive("/about")}
                  onClick={() => setMenuOpen(false)}
                />

                {/* CONTACT */}

                <MobileLink
                  name="Contact"
                  href="/contact"
                  active={isActive("/contact")}
                  onClick={() => setMenuOpen(false)}
                />

                {/* DIVIDER */}

                <div className="my-2 h-px bg-[#eee2dd]" />

                {/* CART */}

                <Link
                  href="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-[14px]
                    font-medium
                    text-[#403633]
                    transition-colors

                    hover:bg-[#f9efeb]
                    hover:text-[#8f1728]
                  "
                >
                  <span className="flex items-center gap-2.5">
                    <ShoppingBag size={17} />

                    My Cart
                  </span>

                  {cartCount > 0 && (
                    <span
                      className="
                        flex
                        h-6
                        min-w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f8e8e9]
                        px-2
                        text-[10px]
                        font-bold
                        text-[#8f1728]
                      "
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* ORDER */}

                <Link
                  href="/order"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    mt-2
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#8f1728]
                    px-5
                    py-3
                    text-[13px]
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(143,23,40,0.15)]
                    transition-all

                    hover:bg-[#761221]

                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  Order Now

                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* =====================================================
   DESKTOP NORMAL LINK
===================================================== */

type NavItemProps = {
  name: string;
  href: string;
  active: boolean;
};

function NavItem({
  name,
  href,
  active,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className="relative py-3"
    >
      <motion.span
        whileHover={{
          y: -2,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`
          whitespace-nowrap
          text-[12px]
          font-medium
          transition-colors
          duration-300

          xl:text-[13px]

          2xl:text-[14px]

          ${
            active
              ? "text-[#8f1728]"
              : "text-[#493f3c] hover:text-[#8f1728]"
          }
        `}
      >
        {name}
      </motion.span>

      {active && (
        <motion.span
          layoutId="navbar-active"
          className="
            absolute
            bottom-[4px]
            left-0
            h-[2px]
            w-full
            rounded-full
            bg-[#8f1728]
          "
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
}

/* =====================================================
   TYPES
===================================================== */

type DropdownItem = {
  name: string;
  href: string;
};

type DesktopDropdownProps = {
  name: string;
  href: string;
  active: boolean;
  items: DropdownItem[];
};

/* =====================================================
   DESKTOP DROPDOWN
===================================================== */

function DesktopDropdown({
  name,
  href,
  active,
  items,
}: DesktopDropdownProps) {
  return (
    <div className="group relative">
      {/* DROPDOWN TITLE */}

      <Link
        href={href}
        className="
          relative
          flex
          items-center
          gap-1
          py-3
        "
      >
        <span
          className={`
            whitespace-nowrap
            text-[12px]
            font-medium
            transition-colors
            duration-300

            xl:text-[13px]

            2xl:text-[14px]

            ${
              active
                ? "text-[#8f1728]"
                : "text-[#493f3c] group-hover:text-[#8f1728]"
            }
          `}
        >
          {name}
        </span>

        <ChevronDown
          size={13}
          className="
            transition-transform
            duration-300
            group-hover:rotate-180
          "
        />

        {active && (
          <motion.span
            layoutId="navbar-active"
            className="
              absolute
              bottom-[4px]
              left-0
              h-[2px]
              w-full
              rounded-full
              bg-[#8f1728]
            "
          />
        )}
      </Link>

      {/* DROPDOWN BOX */}

      <div
        className="
          invisible
          absolute
          left-1/2
          top-full
          w-[235px]
          -translate-x-1/2
          translate-y-2
          pt-3
          opacity-0
          transition-all
          duration-200

          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[18px]
            border
            border-[#eee1dc]
            bg-[#fffaf7]
            p-2
            shadow-[0_18px_50px_rgba(60,20,20,0.13)]
          "
        >
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                group/item
                flex
                items-center
                justify-between
                rounded-[12px]
                px-4
                py-[11px]
                text-[13px]
                font-medium
                text-[#493f3c]
                transition-all
                duration-200

                hover:bg-[#f8e8e9]
                hover:pl-5
                hover:text-[#8f1728]
              "
            >
              <span>{item.name}</span>

              <ArrowRight
                size={13}
                className="
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-200

                  group-hover/item:translate-x-0
                  group-hover/item:opacity-100
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   MOBILE NORMAL LINK
===================================================== */

type MobileLinkProps = {
  name: string;
  href: string;
  active: boolean;
  onClick: () => void;
};

function MobileLink({
  name,
  href,
  active,
  onClick,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex
        items-center
        justify-between
        rounded-xl
        px-4
        py-3
        text-[14px]
        font-medium
        transition-colors

        sm:py-3.5
        sm:text-[15px]

        ${
          active
            ? "bg-[#f8e8e9] text-[#8f1728]"
            : "text-[#403633] hover:bg-[#f9efeb] hover:text-[#8f1728]"
        }
      `}
    >
      <span>{name}</span>

      {active && (
        <span
          className="
            h-2
            w-2
            shrink-0
            rounded-full
            bg-[#8f1728]
          "
        />
      )}
    </Link>
  );
}

/* =====================================================
   MOBILE DROPDOWN
===================================================== */

type MobileDropdownProps = {
  name: string;
  active: boolean;
  open: boolean;
  onToggle: () => void;
  items: DropdownItem[];
  onNavigate: () => void;
};

function MobileDropdown({
  name,
  active,
  open,
  onToggle,
  items,
  onNavigate,
}: MobileDropdownProps) {
  return (
    <div>
      {/* BUTTON */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          px-4
          py-3
          text-left
          text-[14px]
          font-medium
          transition-colors

          sm:py-3.5
          sm:text-[15px]

          ${
            active
              ? "bg-[#f8e8e9] text-[#8f1728]"
              : "text-[#403633] hover:bg-[#f9efeb] hover:text-[#8f1728]"
          }
        `}
      >
        <span>{name}</span>

        <ChevronDown
          size={16}
          className={`
            shrink-0
            transition-transform
            duration-300

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* ITEMS */}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.22,
            }}
            className="overflow-hidden"
          >
            <div
              className="
                ml-3
                mt-1
                space-y-1
                border-l
                border-[#eadbd5]
                pb-2
                pl-3
                pt-1
              "
            >
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onNavigate}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    px-3
                    py-2.5
                    text-[13px]
                    text-[#695b56]
                    transition-colors

                    hover:bg-[#f8e8e9]
                    hover:text-[#8f1728]
                  "
                >
                  <span>{item.name}</span>

                  <ArrowRight
                    size={12}
                    className="shrink-0"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}