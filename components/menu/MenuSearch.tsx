"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

/* =====================================================
   PROPS TYPE
===================================================== */

interface MenuSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

/* =====================================================
   MENU SEARCH COMPONENT
===================================================== */

export default function MenuSearch({
  search,
  setSearch,
}: MenuSearchProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full"
    >
      {/* =========================================
          SEARCH CONTAINER
      ========================================== */}

      <div
        className="
          flex
          flex-col
          gap-3

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* =====================================
            LEFT TEXT
        ====================================== */}

        <div>
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[2px]
              text-[#a71930]
            "
          >
            Find Your Favourite
          </p>

          <p
            className="
              mt-1
              text-[11px]
              text-[#8b7973]

              sm:text-[12px]
            "
          >
            Search cakes, pastries, cookies and more.
          </p>
        </div>

        {/* =====================================
            SEARCH INPUT
        ====================================== */}

        <div
          className="
            group
            relative
            w-full

            sm:max-w-[390px]
            lg:max-w-[430px]
          "
        >
          {/* SEARCH ICON */}

          <div
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              z-10

              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center

              rounded-full
              bg-[#f8e5e8]
              text-[#a71930]

              transition-all
              duration-300

              group-focus-within:bg-[#a71930]
              group-focus-within:text-white
            "
          >
            <Search size={14} strokeWidth={2} />
          </div>

          {/* INPUT */}

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bakery products..."
            aria-label="Search bakery products"
            className="
              h-[52px]
              w-full

              rounded-full
              border
              border-[#eadbd6]

              bg-white

              pl-[58px]
              pr-12

              text-[12px]
              font-medium
              text-[#342724]

              outline-none

              shadow-[0_6px_20px_rgba(70,30,30,0.04)]

              transition-all
              duration-300

              placeholder:text-[#ad9d97]

              hover:border-[#dcbcb5]

              focus:border-[#a71930]
              focus:shadow-[0_8px_25px_rgba(167,25,48,0.10)]

              sm:text-[13px]
            "
          />

          {/* =====================================
              CLEAR BUTTON
          ====================================== */}

          {search.length > 0 && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              whileTap={{
                scale: 0.9,
              }}
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="
                absolute
                right-3
                top-1/2

                flex
                h-8
                w-8
                -translate-y-1/2
                items-center
                justify-center

                rounded-full

                bg-[#fff1f2]
                text-[#a71930]

                transition-all
                duration-300

                hover:bg-[#a71930]
                hover:text-white
              "
            >
              <X size={14} />
            </motion.button>
          )}
        </div>
      </div>

      {/* =========================================
          SEARCH RESULT TEXT
      ========================================== */}

      {search.trim() !== "" && (
        <motion.div
          initial={{
            opacity: 0,
            y: -5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            mt-3
            flex
            items-center
            gap-2

            text-[10px]
            text-[#8b7973]

            sm:justify-end
            sm:text-[11px]
          "
        >
          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              bg-[#a71930]
            "
          />

          <span>
            Searching for{" "}
            <span className="font-semibold text-[#a71930]">
              &quot;{search}&quot;
            </span>
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}