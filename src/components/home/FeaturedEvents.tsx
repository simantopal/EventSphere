"use client";

import { useEffect, useState } from "react";
import ProductCard from "../shop/ProductCard";

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

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );

        const data = await res.json();

        if (data.success) {
          // Show only latest 8 products
          setProducts(data.data.slice(0, 8));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wider text-primary">
            Featured Products
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Discover Products You&apos;ll Love
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore carefully selected products from trusted sellers,
            designed to make your everyday life better.
          </p>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <h3 className="text-xl font-semibold">
              No Products Available
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;