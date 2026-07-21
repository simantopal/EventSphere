"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AddProductPage = () => {
  const router = useRouter();

  const { data: session, isPending } =
    authClient.useSession();

  const user = session?.user;

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/auth/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const imageFile = formData.get("image") as File;

      let imageUrl = "";

      // Upload image only if selected
      if (imageFile && imageFile.size > 0) {
        const imageFormData = new FormData();

        imageFormData.append(
          "image",
          imageFile
        );

        const uploadRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          {
            method: "POST",
            body: imageFormData,
          }
        );

        const uploadResult =
          await uploadRes.json();

        imageUrl =
          uploadResult.data.display_url;
      }

      const productData = {
        title: formData.get("title"),
        category: formData.get("category"),
        shortDescription: formData.get("shortDescription"),
        fullDescription: formData.get("fullDescription"),
        price: Number(formData.get("price")),
        stock: Number(formData.get("stock")),
        brand: formData.get("brand"),
        image: imageUrl,
        createdBy: {
          id: user?.id,
          name: user?.name,
          email: user?.email,
        },
      };
      
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            productData
          ),
        }
      );

      const result = await res.json();

      if (result.success) {
        alert(
          "Product added successfully!"
        );

        form.reset();

        router.push("/shop/manage");
      } else {
        alert(
          result.message ||
          "Something went wrong"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to add product"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-background p-8 shadow-lg">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
              Add New Product
            </h1>

            <p className="mt-2 text-gray-400">
              Add a product to the Orvanta marketplace.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Product Title & Category */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Title */}
              <div>
                <label className="mb-2 block font-medium">
                  Product Title
                </label>

                <input
                  name="title"
                  type="text"
                  required
                  placeholder="Enter product title"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block font-medium">
                  Category
                </label>

                <select
                  name="category"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-300 bg-background px-4 py-3 outline-none focus:border-blue-600"
                >
                  <option
                    value=""
                    disabled
                  >
                    Select Category
                  </option>

                  <option>
                    Electronics
                  </option>

                  <option>
                    Fashion
                  </option>

                  <option>
                    Home & Living
                  </option>

                  <option>
                    Beauty & Care
                  </option>

                  <option>
                    Sports & Fitness
                  </option>

                  <option>
                    Books & Learning
                  </option>
                </select>
              </div>
            </div>

            {/* Brand & Price */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Brand */}
              <div>
                <label className="mb-2 block font-medium">
                  Brand
                </label>

                <input
                  name="brand"
                  type="text"
                  placeholder="Enter brand name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block font-medium">
                  Price ($)
                </label>

                <input
                  name="price"
                  required
                  type="number"
                  min="0"
                  placeholder="Enter product price"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* Stock & Image */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Stock */}
              <div>
                <label className="mb-2 block font-medium">
                  Available Stock
                </label>

                <input
                  required
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="Enter available stock"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              {/* Image */}
              <div>
                <label className="mb-2 block font-medium">
                  Product Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="mb-2 block font-medium">
                Short Description
              </label>

              <textarea
                name="shortDescription"
                rows={3}
                required
                placeholder="Write a short product description..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Full Description */}
            <div>
              <label className="mb-2 block font-medium">
                Full Description
              </label>

              <textarea
                name="fullDescription"
                rows={6}
                required
                placeholder="Write the complete product details..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Adding Product..."
                : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;