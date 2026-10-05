"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, CakeSlice } from "lucide-react";

/* =====================================================
   PROPS TYPE
===================================================== */

interface CakeSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

/* =====================================================
   CAKE SEARCH
===================================================== */

export default function CakeSearch({
  search,
  setSearch,
}: CakeSearchProps) {
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
        amount: 0.4,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full"
    >
      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          flex
          flex-col
          gap-4

          rounded-[20px]
          border
          border-[#eeded8]

          bg-white

          p-4

          shadow-[0_7px_25px_rgba(70,30,30,0.04)]

          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:p-5
        "
      >
        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="flex items-center gap-3">
          {/* ICON */}

          <div
            className="
              hidden
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              rounded-full

              bg-[#f8e7e9]
              text-[#9a1e2f]

              sm:flex
            "
          >
            <CakeSlice
              size={17}
              strokeWidth={1.8}
            />
          </div>

          {/* TEXT */}

          <div>
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#9a1e2f]

                sm:text-[10px]
              "
            >
              Find Your Cake
            </p>

            <p
              className="
                mt-1
                text-[11px]
                leading-5
                text-[#8b7973]

                sm:text-[12px]
              "
            >
              Search by cake name, flavour or category.
            </p>
          </div>
        </div>

        {/* =====================================
            SEARCH INPUT
        ====================================== */}

        <div
          className="
            group
            relative
            w-full

            sm:max-w-[420px]

            lg:max-w-[470px]
          "
        >
          {/* SEARCH ICON */}

          <div
            className="
              pointer-events-none

              absolute
              left-3
              top-1/2
              z-10

              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              bg-[#f8e5e7]
              text-[#9a1e2f]

              transition-all
              duration-300

              group-focus-within:bg-[#9a1e2f]
              group-focus-within:text-white
            "
          >
            <Search
              size={14}
              strokeWidth={2}
            />
          </div>

          {/* INPUT */}

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search chocolate, birthday, bento..."
            aria-label="Search cakes"
            autoComplete="off"
            className="
              h-[52px]
              w-full

              rounded-full
              border
              border-[#eadbd6]

              bg-[#fffaf8]

              pl-[55px]
              pr-12

              text-[11px]
              font-medium
              text-[#342724]

              outline-none

              transition-all
              duration-300

              placeholder:text-[#ad9d97]

              hover:border-[#dbbbb4]

              focus:border-[#9a1e2f]
              focus:bg-white
              focus:shadow-[0_7px_22px_rgba(154,30,47,0.10)]

              sm:text-[12px]
            "
          />

          {/* =====================================
              CLEAR BUTTON
          ====================================== */}

          <AnimatePresence>
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
                aria-label="Clear cake search"
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

                  bg-[#f8e7e9]
                  text-[#9a1e2f]

                  transition-colors
                  duration-300

                  hover:bg-[#9a1e2f]
                  hover:text-white
                "
              >
                <X size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================
          SEARCHING TEXT
      ========================================== */}

      <AnimatePresence>
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
            exit={{
              opacity: 0,
              y: -5,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mt-3
              flex
              items-center
              gap-2

              px-1

              text-[10px]
              text-[#8b7973]

              sm:text-[11px]
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]
                rounded-full
                bg-[#9a1e2f]
              "
            />

            <span>
              Searching cakes for{" "}
              <span className="font-semibold text-[#9a1e2f]">
                &quot;{search}&quot;
              </span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}