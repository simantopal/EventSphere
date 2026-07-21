import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Star,
  ShoppingCart,
} from "lucide-react";

export interface Product {
  _id: string;
  title: string;
  image: string;
  shortDescription: string;
  category: string;
  price: number;
  stock: number;
  rating?: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  const {
    _id,
    title,
    image,
    shortDescription,
    category,
    price,
    stock,
    rating,
    discount,
  } = product;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />

        {/* Discount Badge */}
        {discount && discount > 0 ? (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            {discount}% OFF
          </span>
        ) : null}
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category */}
        <p className="text-sm font-medium text-indigo-600">
          {category}
        </p>

        {/* Title */}
        <h3 className="mt-1 line-clamp-1 text-xl font-bold">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {shortDescription}
        </p>

        {/* Meta Information */}
        <div className="mt-4 space-y-3 text-sm text-gray-600">

          {/* Stock */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package size={16} />
              <span>
                {stock > 0
                  ? `${stock} in stock`
                  : "Out of stock"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />

              <span>
                {rating ?? "New"}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <ShoppingCart size={16} />

            <span className="text-lg font-bold text-indigo-600">
              ${price}
            </span>
          </div>
        </div>

        {/* View Details */}
        <div className="mt-auto pt-5">
          <Link
            href={`/explore-shop/${_id}`}
            className="block rounded-lg bg-indigo-600 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;