"use client";

import Filter from "@/components/shop/Filter";
import Pagination from "@/components/shop/Pagination";
import ProductGrid from "@/components/shop/ProductGrid";
import { useEffect, useMemo, useState } from "react";

interface Product {
  _id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  price: number;
  stock: number;
  rating?: number;
  discount?: number;
}

const ITEMS_PER_PAGE = 8;

export default function ExploreShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );

        const data = await res.json();

        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error(
          "Failed to fetch products:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category Filter
    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.category === category
      );
    }

    // Price Range Filter
    if (priceRange) {
      filtered = filtered.filter((product) => {
        if (priceRange === "0-50") {
          return product.price < 50;
        }

        if (priceRange === "50-100") {
          return (
            product.price >= 50 &&
            product.price <= 100
          );
        }

        if (priceRange === "100-500") {
          return (
            product.price > 100 &&
            product.price <= 500
          );
        }

        if (priceRange === "500+") {
          return product.price > 500;
        }

        return true;
      });
    }

    // Sorting
    if (sort === "price-low") {
      filtered.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      filtered.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      filtered.sort(
        (a, b) =>
          (b.rating ?? 0) -
          (a.rating ?? 0)
      );
    }

    if (sort === "latest") {
      filtered.reverse();
    }

    return filtered;
  }, [
    products,
    category,
    priceRange,
    sort,
  ]);

  const totalPages = Math.ceil(
    filteredProducts.length /
      ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;

  const currentProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading products...
        </h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            Explore Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Discover quality products from trusted
            sellers. Search, filter, and find exactly
            what you need.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <Filter
            category={category}
            priceRange={priceRange}
            sort={sort}
            onCategoryChange={(value) => {
              setCategory(value);
              setCurrentPage(1);
            }}
            onPriceRangeChange={(value) => {
              setPriceRange(value);
              setCurrentPage(1);
            }}
            onSortChange={(value) => {
              setSort(value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Products */}
        {currentProducts.length > 0 ? (
          <>
            <ProductGrid
              products={currentProducts}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold">
              No Products Found
            </h2>

            <p className="mt-2 text-gray-500">
              There are no products matching
              your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}