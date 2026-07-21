import Image from "next/image";
import {
  Package,
  Star,
  ShoppingCart,
  ShieldCheck,
  Truck,
} from "lucide-react";
import AddToCartButton from "@/components/shared/AddToCartButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.text();
    console.log(error);

    throw new Error("Failed to fetch product");
  }

  const result = await res.json();

  return result.data;
}

const ProductDetailsPage = async ({
  params,
}: PageProps) => {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      {/* Main Product Section */}
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <Image
            src={product.image}
            alt={product.title}
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <span className="mb-3 w-fit rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          {/* Short Description */}
          <p className="mt-4 text-gray-600">
            {product.shortDescription}
          </p>

          {/* Product Information */}
          <div className="mt-6 space-y-4">

            {/* Price */}
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} />

              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-3">
              <Package size={20} />

              <span>
                {product.stock > 0
                  ? `${product.stock} items available`
                  : "Out of stock"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span>
                {product.rating
                  ? `${product.rating} / 5`
                  : "No ratings yet"}
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-xl border p-4">
              <ShieldCheck className="text-indigo-600" />

              <div>
                <p className="font-semibold">
                  Secure Shopping
                </p>

                <p className="text-sm text-gray-500">
                  Safe and reliable checkout
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border p-4">
              <Truck className="text-indigo-600" />

              <div>
                <p className="font-semibold">
                  Fast Delivery
                </p>

                <p className="text-sm text-gray-500">
                  Reliable delivery service
                </p>
              </div>
            </div>
          </div>

          {/* Add To Cart */}
          <AddToCartButton product={product} />
        </div>
      </div>

      {/* About Product */}
      <section className="mt-16">
        <div className="rounded-3xl border border-gray-200 bg-background p-8 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <Package className="h-6 w-6 text-indigo-600" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-600">
                About This Product
              </h2>

              <p className="text-sm text-gray-400">
                Everything you need to know about this product.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-justify leading-8">
            <p>
              {product.fullDescription}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetailsPage;