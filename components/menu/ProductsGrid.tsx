"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MenuCategories from "./MenuCategories";
import MenuSearch from "./MenuSearch";
import ProductCard, { Product } from "./ProductCard";

/* =====================================================
   PRODUCTS DATA
===================================================== */

const products: Product[] = [
  // =========================
  // CAKES
  // =========================

  {
    id: 1,
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    description:
      "Rich chocolate sponge layered with smooth chocolate ganache.",
  },

  {
    id: 2,
    name: "Black Forest Cake",
    category: "Cakes",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
    description:
      "Classic chocolate cake layered with fresh cream and cherries.",
  },

  {
    id: 3,
    name: "Red Velvet Cake",
    category: "Cakes",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft red velvet layers finished with creamy frosting.",
  },

  {
    id: 4,
    name: "Butterscotch Cake",
    category: "Cakes",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft butterscotch cake topped with crunchy caramel goodness.",
  },

  // =========================
  // PASTRIES
  // =========================

  {
    id: 5,
    name: "Chocolate Pastry",
    category: "Pastries",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft chocolate pastry topped with rich chocolate cream.",
  },

  {
    id: 6,
    name: "Black Forest Pastry",
    category: "Pastries",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80",
    description:
      "Chocolate pastry layered with cream and delicious cherries.",
  },

  {
    id: 7,
    name: "Red Velvet Pastry",
    category: "Pastries",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=900&q=80",
    description:
      "Velvety soft pastry with smooth creamy frosting.",
  },

  // =========================
  // CUPCAKES
  // =========================

  {
    id: 8,
    name: "Chocolate Cupcake",
    category: "Cupcakes",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=900&q=80",
    description:
      "Chocolate cupcake topped with creamy chocolate frosting.",
  },

  {
    id: 9,
    name: "Vanilla Cupcake",
    category: "Cupcakes",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=900&q=80",
    description:
      "Classic vanilla cupcake topped with smooth vanilla frosting.",
  },

  // =========================
  // COOKIES
  // =========================

  {
    id: 10,
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    description:
      "Crunchy golden cookies packed with delicious chocolate chips.",
  },

  {
    id: 11,
    name: "Butter Cookies",
    category: "Cookies",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    description:
      "Classic buttery cookies freshly baked until golden.",
  },

  // =========================
  // BREADS
  // =========================

  {
    id: 12,
    name: "Fresh Bread",
    category: "Breads",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft and freshly baked bread for your everyday meals.",
  },

  {
    id: 13,
    name: "Artisan Bread",
    category: "Breads",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=80",
    description:
      "Fresh artisan bread baked until beautifully golden.",
  },

  // =========================
  // DESSERTS
  // =========================

  {
    id: 14,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    description:
      "Rich and fudgy chocolate brownie with an indulgent centre.",
  },

  {
    id: 15,
    name: "Cheesecake",
    category: "Desserts",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    description:
      "Smooth and creamy cheesecake served on a biscuit base.",
  },

  {
    id: 16,
    name: "Chocolate Donut",
    category: "Desserts",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft donut finished with a delicious chocolate topping.",
  },

  // =========================
  // SNACKS
  // =========================

  {
    id: 17,
    name: "Veg Sandwich",
    category: "Snacks",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    description:
      "Fresh sandwich filled with vegetables and creamy dressing.",
  },

  {
    id: 18,
    name: "Mini Pizza",
    category: "Snacks",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    description:
      "Freshly baked pizza topped with vegetables and cheese.",
  },
];

/* =====================================================
   PRODUCTS GRID
===================================================== */

export default function ProductsGrid() {
  /* ===================================================
     STATES
  =================================================== */

  const [activeCategory, setActiveCategory] =
    useState<string>("All Products");

  const [search, setSearch] = useState<string>("");

  /* ===================================================
     FILTER PRODUCTS
  =================================================== */

  const filteredProducts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return products.filter((product) => {
      /* CATEGORY FILTER */

      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      /* SEARCH FILTER */

      const matchesSearch =
        searchValue === "" ||
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  /* ===================================================
     CLEAR FILTERS
  =================================================== */

  const clearFilters = () => {
    setActiveCategory("All Products");
    setSearch("");
  };

  return (
    <section
      id="products"
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
            CATEGORY FILTER
        ================================================== */}

        <MenuCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* =================================================
            SEARCH
        ================================================== */}

        <div className="mt-7">
          <MenuSearch
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* =================================================
            PRODUCTS HEADER
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
            border-[#eee1dc]

            pb-5

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                mb-1
                text-[9px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#a71930]

                sm:text-[10px]
              "
            >
              Our Collection
            </p>

            <h2
              className="
                font-serif
                text-[27px]
                font-semibold
                tracking-[-0.6px]
                text-[#241a17]

                sm:text-[31px]
              "
            >
              {activeCategory === "All Products"
                ? "All Bakery Products"
                : activeCategory}
            </h2>
          </div>

          {/* PRODUCT COUNT */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#a71930]
              "
            />

            <p
              className="
                text-[11px]
                font-medium
                text-[#84726c]

                sm:text-[12px]
              "
            >
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "Product"
                : "Products"}
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PRODUCTS
        ================================================== */}

        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
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
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            /* =============================================
               NO PRODUCTS
            ============================================== */

            <motion.div
              key="no-products"
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
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                flex
                min-h-[320px]
                items-center
                justify-center

                rounded-[24px]
                border
                border-[#eee0da]

                bg-white

                px-5
                text-center

                shadow-[0_8px_30px_rgba(70,30,30,0.04)]
              "
            >
              <div className="max-w-[400px]">
                {/* ICON */}

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-full

                    bg-[#f9e8eb]

                    text-[24px]
                  "
                >
                  🧁
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-4

                    font-serif
                    text-[24px]
                    font-semibold
                    text-[#241a17]
                  "
                >
                  No Products Found
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[330px]

                    text-[11px]
                    leading-5
                    text-[#8b7973]

                    sm:text-[12px]
                  "
                >
                  We couldn&apos;t find any bakery products
                  matching your current search or category.
                </p>

                {/* CLEAR BUTTON */}

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-5

                    rounded-full

                    bg-[#a71930]

                    px-6
                    py-2.5

                    text-[11px]
                    font-semibold
                    text-white

                    shadow-[0_7px_18px_rgba(167,25,48,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:bg-[#851326]
                  "
                >
                  View All Products
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}