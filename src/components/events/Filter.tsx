"use client";

type FilterProps = {
  category: string;
  location: string;
  sort: string;
  onCategoryChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function Filter({
  category,
  location,
  sort,
  onCategoryChange,
  onLocationChange,
  onSortChange,
}: FilterProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 bg-background"
        >
          <option value="">All Categories</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Seminar">Seminar</option>
          <option value="Concert">Concert</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="Business" >Business</option>
          <option value="Education">Education</option>
          <option value="Networking">Networking</option>
          <option value="Festival">Festival</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Location
        </label>

        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 bg-background"
        >
          <option value="">All Locations</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Khulna">Khulna</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 bg-background"
        >
          <option value="">Default</option>
          <option value="latest">Latest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}