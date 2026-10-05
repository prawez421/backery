"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CakeSlice, RotateCcw } from "lucide-react";

import CakeCategories from "./CakeCategories";
import CakeSearch from "./CakeSearch";
import CakeCard, { Cake } from "./CakeCard";

/* =====================================================
   CAKES DATA
===================================================== */

const cakes: Cake[] = [
  // ===================================================
  // BIRTHDAY CAKES
  // ===================================================

  {
    id: 1,
    name: "Chocolate Birthday Cake",
    category: "Birthday Cakes",
    price: 699,
    oldPrice: 799,
    weight: "500g",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    description:
      "Rich chocolate cake beautifully crafted for birthday celebrations.",
  },

  {
    id: 2,
    name: "Birthday Sprinkle Cake",
    category: "Birthday Cakes",
    price: 749,
    oldPrice: 849,
    weight: "1 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80",
    description:
      "Colourful celebration cake topped with cream and festive sprinkles.",
  },

  // ===================================================
  // ANNIVERSARY CAKES
  // ===================================================

  {
    id: 3,
    name: "Romantic Anniversary Cake",
    category: "Anniversary Cakes",
    price: 849,
    oldPrice: 949,
    weight: "1 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant creamy cake designed to make anniversaries extra special.",
  },

  {
    id: 4,
    name: "Red Velvet Anniversary Cake",
    category: "Anniversary Cakes",
    price: 899,
    weight: "1 Kg",
    eggless: false,
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft red velvet layers with smooth cream for a romantic celebration.",
  },

  // ===================================================
  // WEDDING CAKES
  // ===================================================

  {
    id: 5,
    name: "Elegant Wedding Cake",
    category: "Wedding Cakes",
    price: 2499,
    oldPrice: 2799,
    weight: "2 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant premium celebration cake beautifully prepared for weddings.",
  },

  {
    id: 6,
    name: "Floral Wedding Cake",
    category: "Wedding Cakes",
    price: 2999,
    weight: "3 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium wedding cake inspired by beautiful floral celebrations.",
  },

  // ===================================================
  // CHOCOLATE CAKES
  // ===================================================

  {
    id: 7,
    name: "Chocolate Truffle Cake",
    category: "Chocolate Cakes",
    price: 749,
    oldPrice: 849,
    weight: "500g",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
    description:
      "Rich chocolate sponge layered with silky chocolate ganache.",
  },

  {
    id: 8,
    name: "Dark Chocolate Cake",
    category: "Chocolate Cakes",
    price: 799,
    weight: "1 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80",
    description:
      "Deep chocolate flavour with a smooth and indulgent finish.",
  },

  // ===================================================
  // PHOTO CAKES
  // ===================================================

  {
    id: 9,
    name: "Personalised Photo Cake",
    category: "Photo Cakes",
    price: 899,
    oldPrice: 999,
    weight: "1 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    description:
      "Personalised celebration cake made special with your favourite photo.",
  },

  {
    id: 10,
    name: "Celebration Photo Cake",
    category: "Photo Cakes",
    price: 949,
    weight: "1 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    description:
      "A personalised cake perfect for birthdays and memorable occasions.",
  },

  // ===================================================
  // DESIGNER CAKES
  // ===================================================

  {
    id: 11,
    name: "Luxury Designer Cake",
    category: "Designer Cakes",
    price: 1299,
    oldPrice: 1499,
    weight: "1.5 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium designer cake crafted with elegant details and rich flavours.",
  },

  {
    id: 12,
    name: "Floral Designer Cake",
    category: "Designer Cakes",
    price: 1399,
    weight: "1.5 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=80",
    description:
      "Beautiful designer cake finished with elegant floral decoration.",
  },

  // ===================================================
  // BENTO CAKES
  // ===================================================

  {
    id: 13,
    name: "Mini Chocolate Bento Cake",
    category: "Bento Cakes",
    price: 399,
    oldPrice: 449,
    weight: "300g",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=80",
    description:
      "Cute mini chocolate cake perfect for small and personal celebrations.",
  },

  {
    id: 14,
    name: "Cute Celebration Bento",
    category: "Bento Cakes",
    price: 449,
    weight: "300g",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1595272568891-123402d0fb3b?auto=format&fit=crop&w=900&q=80",
    description:
      "A small celebration cake with a simple and adorable finish.",
  },

  // ===================================================
  // THEME CAKES
  // ===================================================

  {
    id: 15,
    name: "Kids Theme Cake",
    category: "Theme Cakes",
    price: 1199,
    oldPrice: 1299,
    weight: "1.5 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=900&q=80",
    description:
      "Fun celebration cake designed around colourful kids party themes.",
  },

  {
    id: 16,
    name: "Special Theme Cake",
    category: "Theme Cakes",
    price: 1399,
    weight: "2 Kg",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80",
    description:
      "Creative themed cake customised for unforgettable celebrations.",
  },

  // ===================================================
  // EGGLESS CAKES
  // ===================================================

  {
    id: 17,
    name: "Eggless Chocolate Cake",
    category: "Eggless Cakes",
    price: 699,
    oldPrice: 799,
    weight: "500g",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    description:
      "Rich and delicious chocolate cake prepared completely without eggs.",
  },

  {
    id: 18,
    name: "Eggless Vanilla Cake",
    category: "Eggless Cakes",
    price: 649,
    weight: "500g",
    eggless: true,
    image:
      "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft vanilla celebration cake prepared without eggs.",
  },
];

/* =====================================================
   CAKES GRID
===================================================== */

export default function CakesGrid() {
  /* ===================================================
     STATES
  =================================================== */

  const [activeCategory, setActiveCategory] =
    useState<string>("All Cakes");

  const [search, setSearch] = useState<string>("");

  /* ===================================================
     FILTER CAKES
  =================================================== */

  const filteredCakes = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return cakes.filter((cake) => {
      /* CATEGORY */

      const matchesCategory =
        activeCategory === "All Cakes" ||
        cake.category === activeCategory;

      /* SEARCH */

      const matchesSearch =
        searchValue === "" ||
        cake.name.toLowerCase().includes(searchValue) ||
        cake.category.toLowerCase().includes(searchValue) ||
        cake.description.toLowerCase().includes(searchValue) ||
        cake.weight?.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  /* ===================================================
     RESET FILTER
  =================================================== */

  const resetFilters = () => {
    setActiveCategory("All Cakes");
    setSearch("");
  };

  return (
    <section
      id="cakes"
      className="
        overflow-hidden
        bg-[#fff9f6]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            CATEGORIES
        ================================================== */}

        <CakeCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* =================================================
            SEARCH
        ================================================== */}

        <div className="mt-7">
          <CakeSearch
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* =================================================
            GRID HEADING
        ================================================== */}

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
          }}
          className="
            mb-6
            mt-9

            flex
            flex-col
            gap-3

            border-b
            border-[#eee0db]

            pb-5

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <CakeSlice
                size={13}
                className="text-[#9a1e2f]"
              />

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
                Alibros Bakery
              </p>
            </div>

            <h2
              className="
                font-serif
                text-[27px]
                font-semibold
                tracking-[-0.6px]
                text-[#241917]

                sm:text-[31px]
                lg:text-[34px]
              "
            >
              {activeCategory === "All Cakes"
                ? "Our Cake Collection"
                : activeCategory}
            </h2>

            {search.trim() && (
              <p
                className="
                  mt-2
                  text-[10px]
                  text-[#8a7771]

                  sm:text-[11px]
                "
              >
                Search results for{" "}
                <span className="font-semibold text-[#9a1e2f]">
                  &quot;{search}&quot;
                </span>
              </p>
            )}
          </div>

          {/* =============================================
              COUNT
          ============================================== */}

          <div className="flex items-center gap-3">
            {(activeCategory !== "All Cakes" ||
              search.trim() !== "") && (
              <button
                type="button"
                onClick={resetFilters}
                className="
                  flex
                  items-center
                  gap-1.5

                  text-[10px]
                  font-semibold
                  text-[#8a7771]

                  transition-colors
                  duration-300

                  hover:text-[#9a1e2f]

                  sm:text-[11px]
                "
              >
                <RotateCcw size={12} />

                Reset
              </button>
            )}

            <div
              className="
                flex
                items-center
                gap-2

                rounded-full
                border
                border-[#eadbd6]

                bg-white

                px-3
                py-2
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

              <span
                className="
                  text-[10px]
                  font-medium
                  text-[#806e68]

                  sm:text-[11px]
                "
              >
                {filteredCakes.length}{" "}
                {filteredCakes.length === 1
                  ? "Cake"
                  : "Cakes"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            CAKES
        ================================================== */}

        <AnimatePresence mode="popLayout">
          {filteredCakes.length > 0 ? (
            <motion.div
              key="cakes-grid"
              layout
              className="
                grid
                grid-cols-1
                gap-5

                min-[520px]:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-4
              "
            >
              {filteredCakes.map((cake, index) => (
                <CakeCard
                  key={cake.id}
                  cake={cake}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            /* =================================================
               EMPTY RESULT
            ================================================== */

            <motion.div
              key="no-cakes"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                flex
                min-h-[330px]
                items-center
                justify-center

                rounded-[24px]

                border
                border-[#eadbd6]

                bg-white

                px-6
                py-12

                text-center

                shadow-[0_8px_30px_rgba(70,30,30,0.04)]
              "
            >
              <div className="max-w-[390px]">
                {/* ICON */}

                <div
                  className="
                    mx-auto

                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-full

                    bg-[#f9e8ea]
                    text-[#9a1e2f]
                  "
                >
                  <CakeSlice
                    size={25}
                    strokeWidth={1.6}
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-5

                    font-serif
                    text-[24px]
                    font-semibold
                    text-[#241917]

                    sm:text-[27px]
                  "
                >
                  No Cakes Found
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[340px]

                    text-[11px]
                    leading-5
                    text-[#8a7771]

                    sm:text-[12px]
                  "
                >
                  We couldn&apos;t find a cake matching your
                  current category or search. Try another
                  flavour or view our complete cake collection.
                </p>

                {/* RESET */}

                <motion.button
                  type="button"
                  onClick={resetFilters}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    mt-5

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-[#9a1e2f]

                    px-6
                    py-3

                    text-[11px]
                    font-semibold
                    text-white

                    shadow-[0_7px_18px_rgba(154,30,47,0.20)]

                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:bg-[#7f1726]
                  "
                >
                  <RotateCcw size={13} />

                  View All Cakes
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}