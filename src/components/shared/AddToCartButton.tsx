"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";

interface Props {
  product: {
    _id: string;
    title: string;
    image: string;
    price: number;
    stock: number;
  };
}

const AddToCartButton = ({
  product,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();

  const { data: session } = useSession();

  const user = session?.user;

  const handleOpen = () => {
    if (!user) {
      router.push(
        `/auth/login?redirect=/explore-shop/${product._id}`
      );

      return;
    }

    setOpen(true);
  };

  const handleAddToCart = async () => {
    try {
      const cartData = {
        productId: product._id,
        productTitle: product.title,
        productImage: product.image,
        price: product.price,
        quantity,
        totalPrice: product.price * quantity,
        name: user?.name,
        email: user?.email,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Product added to cart successfully");

        setOpen(false);
        setQuantity(1);
      } else {
        alert(data.message || "Failed to add product to cart");
      }
    } catch (error) {
      console.error(error);

      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* Add To Cart Button */}
      <button
        onClick={handleOpen}
        disabled={product.stock === 0}
        className="mt-8 flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        <ShoppingCart size={20} />

        {product.stock === 0
          ? "Out of Stock"
          : "Add to Cart"}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

          <div className="relative w-full max-w-md rounded-2xl bg-background p-6 shadow-xl">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold">
              Add to Cart
            </h2>

            <p className="mt-2 text-gray-500">
              {product.title}
            </p>

            {/* User Info */}
            <input
              value={user?.name || ""}
              readOnly
              className="mt-5 w-full rounded-lg border p-3"
            />

            <input
              value={user?.email || ""}
              readOnly
              className="mt-4 w-full rounded-lg border p-3"
            />

            {/* Quantity */}
            <div className="mt-5 flex items-center justify-between rounded-lg border p-3">

              <span className="font-medium">
                Quantity
              </span>

              <div className="flex items-center gap-4">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                  className="rounded-md border p-2"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.min(
                        product.stock,
                        quantity + 1
                      )
                    )
                  }
                  className="rounded-md border p-2"
                >
                  <Plus size={16} />
                </button>

              </div>
            </div>

            {/* Total Price */}
            <div className="mt-5 flex items-center justify-between rounded-lg bg-background p-4">
              <span className="font-medium">
                Total
              </span>

              <span className="text-xl font-bold text-indigo-600">
                $
                {(
                  product.price * quantity
                ).toFixed(2)}
              </span>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border px-5 py-3"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Add to Cart
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;