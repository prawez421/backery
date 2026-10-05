"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingBag,
  Heart,
} from "lucide-react";

/* =====================================================
   PRODUCT TYPE
===================================================== */

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

/* =====================================================
   PROPS
===================================================== */

interface ProductCardProps {
  product: Product;
  index: number;
}

/* =====================================================
   PRODUCT CARD
===================================================== */

export default function ProductCard({
  product,
  index,
}: ProductCardProps) {
  /* ===================================================
     ADD TO CART
     Abhi frontend demo hai.
     Baad me Cart Context / API connect karenge.
  =================================================== */

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("Add to cart:", product);
  };

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[#eee0da]
        bg-white
        shadow-[0_8px_28px_rgba(70,30,30,0.05)]
        transition-shadow
        duration-300
        hover:shadow-[0_18px_45px_rgba(70,30,30,0.11)]
      "
    >
      {/* =================================================
          IMAGE AREA
      ================================================== */}

      <Link
        href={`/menu/product/${product.id}`}
        className="
          relative
          block
          h-[230px]
          w-full
          overflow-hidden
          bg-[#f8efeb]
          sm:h-[245px]
          lg:h-[235px]
          xl:h-[250px]
        "
      >
        <Image
          src={product.image}
          alt={`${product.name} - Alibros Bakery`}
          fill
          sizes="(max-width: 500px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="
            object-cover
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
            from-black/20
            via-transparent
            to-transparent
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
            text-[#a71930]
            shadow-sm
            backdrop-blur-md
          "
        >
          {product.category}
        </div>

        {/* =============================================
            WISHLIST BUTTON
        ============================================== */}

        <motion.button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          whileTap={{
            scale: 0.9,
          }}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            console.log("Wishlist:", product);
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
            text-[#8a716a]
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-[#a71930]
            hover:text-white
          "
        >
          <Heart size={15} strokeWidth={1.8} />
        </motion.button>

        {/* =============================================
            VIEW PRODUCT HOVER BUTTON
        ============================================== */}

        <div
          className="
            absolute
            bottom-3
            left-1/2
            z-20
            flex
            -translate-x-1/2
            translate-y-4
            items-center
            gap-1.5
            whitespace-nowrap
            rounded-full
            bg-white
            px-4
            py-2
            text-[10px]
            font-semibold
            text-[#a71930]
            opacity-0
            shadow-[0_8px_25px_rgba(0,0,0,0.12)]
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          View Product

          <ArrowRight size={12} />
        </div>
      </Link>

      {/* =================================================
          PRODUCT CONTENT
      ================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-4
          pb-4
          pt-4
          sm:px-5
          sm:pb-5
        "
      >
        {/* PRODUCT NAME */}

        <Link href={`/menu/product/${product.id}`}>
          <h3
            className="
              font-serif
              text-[18px]
              font-semibold
              leading-[1.3]
              text-[#261b18]
              transition-colors
              duration-300
              hover:text-[#a71930]
              sm:text-[19px]
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2
            line-clamp-2
            min-h-[40px]
            text-[10px]
            leading-5
            text-[#8a7973]
            sm:text-[11px]
          "
        >
          {product.description}
        </p>

        {/* DIVIDER */}

        <div className="my-4 h-px w-full bg-[#f1e5e1]" />

        {/* =================================================
            PRICE + CART
        ================================================== */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {/* PRICE */}

          <div>
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[1px]
                text-[#a3928c]
              "
            >
              Price
            </p>

            <p
              className="
                mt-[2px]
                font-serif
                text-[20px]
                font-bold
                text-[#a71930]
                sm:text-[22px]
              "
            >
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>

          {/* ADD TO CART */}

          <motion.button
            type="button"
            onClick={handleAddToCart}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group/cart
              flex
              h-[42px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#a71930]
              px-4
              text-[10px]
              font-semibold
              text-white
              shadow-[0_7px_18px_rgba(167,25,48,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#851326]
              hover:shadow-[0_10px_24px_rgba(167,25,48,0.24)]
              sm:px-5
              sm:text-[11px]
            "
          >
            <ShoppingBag
              size={14}
              strokeWidth={1.8}
            />

            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}