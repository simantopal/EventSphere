"use client";

type FilterProps = {
  category: string;
  priceRange: string;
  sort: string;

  onCategoryChange: (value: string) => void;
  onPriceRangeChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function Filter({
  category,
  priceRange,
  sort,
  onCategoryChange,
  onPriceRangeChange,
  onSortChange,
}: FilterProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Category */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            onCategoryChange(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 bg-background px-4 py-2 outline-none transition focus:border-blue-500"
        >
          <option value="">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Fashion">
            Fashion
          </option>

          <option value="Home & Living">
            Home & Living
          </option>

          <option value="Beauty & Care">
            Beauty & Care
          </option>

          <option value="Sports & Fitness">
            Sports & Fitness
          </option>

          <option value="Books & Learning">
            Books & Learning
          </option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Price Range
        </label>

        <select
          value={priceRange}
          onChange={(e) =>
            onPriceRangeChange(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 bg-background px-4 py-2 outline-none transition focus:border-blue-500"
        >
          <option value="">
            All Prices
          </option>

          <option value="0-50">
            Under $50
          </option>

          <option value="50-100">
            $50 - $100
          </option>

          <option value="100-500">
            $100 - $500
          </option>

          <option value="500+">
            $500+
          </option>
        </select>
      </div>

      {/* Sort */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) =>
            onSortChange(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 bg-background px-4 py-2 outline-none transition focus:border-blue-500"
        >
          <option value="">
            Default
          </option>

          <option value="latest">
            Latest
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>
        </select>
      </div>
    </div>
  );
}