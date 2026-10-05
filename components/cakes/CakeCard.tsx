"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

/* =====================================================
   CAKE TYPE
===================================================== */

export interface Cake {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;

  // Optional fields
  oldPrice?: number;
  weight?: string;
  eggless?: boolean;
}

/* =====================================================
   PROPS
===================================================== */

interface CakeCardProps {
  cake: Cake;
  index: number;
}

/* =====================================================
   CAKE CARD
===================================================== */

export default function CakeCard({
  cake,
  index,
}: CakeCardProps) {
  /* ===================================================
     ADD TO CART
     Filhaal frontend demo.
     Baad me actual cart se connect karenge.
  =================================================== */

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("Cake added to cart:", cake);
  };

  /* ===================================================
     WISHLIST
  =================================================== */

  const handleWishlist = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("Cake added to wishlist:", cake);
  };

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 15,
        scale: 0.96,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[#eddfda]
        bg-white
        shadow-[0_8px_28px_rgba(70,30,30,0.05)]
        transition-shadow
        duration-300
        hover:shadow-[0_18px_45px_rgba(70,30,30,0.12)]
      "
    >
      {/* =================================================
          IMAGE
      ================================================== */}

      <Link
        href={`/cakes/${cake.id}`}
        className="
          relative
          block
          h-[245px]
          overflow-hidden
          bg-[#f6e9e5]

          sm:h-[255px]
          lg:h-[245px]
          xl:h-[270px]
        "
      >
        <Image
          src={cake.image}
          alt={`${cake.name} - Alibros Bakery`}
          fill
          sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.07]
          "
        />

        {/* IMAGE OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-black/5
          "
        />

        {/* =============================================
            CATEGORY BADGE
        ============================================== */}

        <div
          className="
            absolute
            left-3
            top-3
            z-10
            rounded-full
            border
            border-white/70
            bg-white/90
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[1px]
            text-[#9a1e2f]
            shadow-sm
            backdrop-blur-md
          "
        >
          {cake.category}
        </div>

        {/* =============================================
            WISHLIST
        ============================================== */}

        <motion.button
          type="button"
          aria-label={`Add ${cake.name} to wishlist`}
          onClick={handleWishlist}
          whileTap={{
            scale: 0.9,
          }}
          className="
            absolute
            right-3
            top-3
            z-20

            flex
            h-9
            w-9
            items-center
            justify-center

            rounded-full
            border
            border-white/70

            bg-white/90
            text-[#806d67]

            shadow-sm
            backdrop-blur-md

            transition-all
            duration-300

            hover:bg-[#9a1e2f]
            hover:text-white
          "
        >
          <Heart
            size={15}
            strokeWidth={1.8}
          />
        </motion.button>

        {/* =============================================
            OPTIONAL EGGLESS BADGE
        ============================================== */}

        {cake.eggless && (
          <div
            className="
              absolute
              bottom-3
              left-3
              z-20

              rounded-full
              bg-white/90

              px-3
              py-1.5

              text-[9px]
              font-semibold
              text-[#53754c]

              shadow-sm
              backdrop-blur-md
            "
          >
            Eggless Available
          </div>
        )}

        {/* =============================================
            VIEW DETAILS
        ============================================== */}

        <div
          className="
            absolute
            bottom-3
            right-3
            z-20

            flex
            h-9
            w-9

            translate-y-3
            items-center
            justify-center

            rounded-full

            bg-white
            text-[#9a1e2f]

            opacity-0

            shadow-[0_7px_20px_rgba(0,0,0,0.15)]

            transition-all
            duration-300

            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={15} />
        </div>
      </Link>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-4
          sm:p-5
        "
      >
        {/* =============================================
            CATEGORY + WEIGHT
        ============================================== */}

        <div
          className="
            mb-2
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-[#9a1e2f]
            "
          >
            Alibros Bakery
          </p>

          {cake.weight && (
            <span
              className="
                rounded-full
                bg-[#fff5f2]
                px-2.5
                py-1
                text-[9px]
                font-medium
                text-[#87736d]
              "
            >
              {cake.weight}
            </span>
          )}
        </div>

        {/* =============================================
            CAKE NAME
        ============================================== */}

        <Link href={`/cakes/${cake.id}`}>
          <h3
            className="
              font-serif
              text-[19px]
              font-semibold
              leading-[1.3]
              text-[#281c19]

              transition-colors
              duration-300

              hover:text-[#9a1e2f]

              sm:text-[20px]
            "
          >
            {cake.name}
          </h3>
        </Link>

        {/* =============================================
            DESCRIPTION
        ============================================== */}

        <p
          className="
            mt-2
            line-clamp-2
            min-h-[40px]

            text-[10px]
            leading-5
            text-[#897871]

            sm:text-[11px]
          "
        >
          {cake.description}
        </p>

        {/* DIVIDER */}

        <div className="my-4 h-px bg-[#f0e4df]" />

        {/* =================================================
            PRICE + ADD CART
        ================================================== */}

        <div
          className="
            mt-auto
            flex
            items-end
            justify-between
            gap-3
          "
        >
          {/* =============================================
              PRICE
          ============================================== */}

          <div>
            <p
              className="
                mb-0.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[1px]
                text-[#a08e88]
              "
            >
              Starting From
            </p>

            <div className="flex items-center gap-2">
              <p
                className="
                  font-serif
                  text-[21px]
                  font-bold
                  text-[#9a1e2f]

                  sm:text-[23px]
                "
              >
                ₹{cake.price.toLocaleString("en-IN")}
              </p>

              {/* OLD PRICE */}

              {cake.oldPrice && (
                <span
                  className="
                    text-[10px]
                    text-[#a99a95]
                    line-through
                  "
                >
                  ₹{cake.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>

          {/* =============================================
              ADD TO CART
          ============================================== */}

          <motion.button
            type="button"
            onClick={handleAddToCart}
            whileTap={{
              scale: 0.96,
            }}
            className="
              flex
              h-[42px]
              shrink-0
              items-center
              justify-center
              gap-2

              rounded-full

              bg-[#9a1e2f]

              px-4

              text-[10px]
              font-semibold
              text-white

              shadow-[0_7px_18px_rgba(154,30,47,0.20)]

              transition-all
              duration-300

              hover:-translate-y-[2px]
              hover:bg-[#7f1726]
              hover:shadow-[0_10px_25px_rgba(154,30,47,0.25)]

              sm:px-5
              sm:text-[11px]
            "
          >
            <ShoppingBag
              size={14}
              strokeWidth={1.8}
            />

            <span className="hidden min-[360px]:inline">
              Add to Cart
            </span>

            <span className="min-[360px]:hidden">
              Add
            </span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}