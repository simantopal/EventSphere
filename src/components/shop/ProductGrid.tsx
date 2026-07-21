import ProductCard from "./ProductCard";

export interface Product {
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

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({
  products,
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No Products Found
        </h2>

        <p className="mt-2 text-gray-500">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;