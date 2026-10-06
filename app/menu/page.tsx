"use client";

import { useState } from "react";

import MenuSidebar from "@/components/menu/MenuSidebar";
import MenuSearch from "@/components/menu/MenuSearch";
import ProductsGrid from "@/components/menu/ProductsGrid";

export default function MenuPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fffaf7]">
      <section
        id="menu-products"
        className="
          relative
          flex
          items-start
          min-h-screen
          bg-[#fffaf7]
          py-4
        "
      >
        {/* ==========================================
            DESKTOP STICKY SIDEBAR (Footer ke sath chalega)
        =========================================== */}
        <aside
          className="
            sticky
            top-[92px]
            left-[10px]
            z-30
            hidden
            w-[280px]
            shrink-0
            self-start
            lg:block
            xl:w-[300px]
            h-[calc(100vh-108px)]
          "
        >
          <div
            className="
              h-full
              w-full
              overflow-x-hidden
              overflow-y-auto
              rounded-[24px]

              [&::-webkit-scrollbar]:w-[4px]
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#d8c4be]
            "
          >
            <MenuSidebar />
          </div>
        </aside>

        {/* ==========================================
            MOBILE SIDEBAR
        =========================================== */}
        <div className="lg:hidden">
          <MenuSidebar
            mobileOpen={mobileSidebarOpen}
            onMobileClose={() => setMobileSidebarOpen(false)}
          />
        </div>

        {/* ==========================================
            RIGHT CONTENT
        =========================================== */}
        <div
          className="
            w-full
            min-w-0
            px-3
            sm:px-4
            lg:pl-5
            lg:pr-5
            xl:pr-6
          "
        >
          {/* SEARCH */}
          <MenuSearch
            onOpenSidebar={() => setMobileSidebarOpen(true)}
          />

          {/* PRODUCTS */}
          <ProductsGrid />
        </div>
      </section>
    </main>
  );
}