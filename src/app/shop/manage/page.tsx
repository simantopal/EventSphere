"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    Package,
    Plus,
    Eye,
    Trash2,
    Loader2,
    ShoppingBag,
    DollarSign,
    Boxes,
} from "lucide-react";

interface Product {
    _id: string;
    title: string;
    category: string;
    brand?: string;
    price: number;
    discountPrice?: number;
    stock: number;
    image: string;
    shortDescription?: string;
}

const ManageProductsPage = () => {
    const router = useRouter();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/auth/login");
            return;
        }

        if (!session?.user?.email) return;

        const fetchProducts = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/manage?email=${encodeURIComponent(
                        session.user.email
                    )}`,
                    {
                        cache: "no-store",
                    }
                );

                const data = await res.json();

                if (data.success) {
                    setProducts(data.data);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [session, isPending, router]);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {
            setDeletingId(id);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (data.success) {
                setProducts((prev) =>
                    prev.filter((product) => product._id !== id)
                );
            } else {
                alert(data.message || "Failed to delete product");
            }
        } catch (error) {
            console.error("Delete product error:", error);
            alert("Something went wrong");
        } finally {
            setDeletingId(null);
        }
    };

    if (isPending || loading) {
        return (
            <section className="flex min-h-screen items-center justify-center">
                <div className="flex items-center gap-3 text-lg">
                    <Loader2 className="animate-spin" size={24} />
                    Loading products...
                </div>
            </section>
        );
    }

    if (!session) return null;

    return (
        <section className="min-h-screen bg-background py-10">
            <div className="mx-auto max-w-7xl px-4">

                {/* Header */}
                <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                                <ShoppingBag className="text-indigo-600" />
                            </div>

                            <h1 className="text-4xl font-bold">
                                Manage Products
                            </h1>
                        </div>

                        <p className="mt-3 text-muted-foreground">
                            View, manage, and delete the products you have added.
                        </p>
                    </div>

                    <Link
                        href="/shop/add-items"
                        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
                    >
                        <Plus size={20} />
                        Add New Product
                    </Link>
                </div>

                {/* Product Count */}
                <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border bg-background p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Products
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    {products.length}
                                </h2>
                            </div>

                            <div className="rounded-xl bg-indigo-100 p-3">
                                <Package className="text-indigo-600" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-background p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Stock
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    {products.reduce(
                                        (total, product) =>
                                            total + product.stock,
                                        0
                                    )}
                                </h2>
                            </div>

                            <div className="rounded-xl bg-green-100 p-3">
                                <Boxes className="text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-background p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Average Price
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    $
                                    {products.length > 0
                                        ? (
                                              products.reduce(
                                                  (total, product) =>
                                                      total + product.price,
                                                  0
                                              ) / products.length
                                          ).toFixed(2)
                                        : "0.00"}
                                </h2>
                            </div>

                            <div className="rounded-xl bg-yellow-100 p-3">
                                <DollarSign className="text-yellow-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {products.length === 0 ? (
                    <div className="rounded-2xl border border-dashed py-24 text-center">
                        <Package
                            size={60}
                            className="mx-auto text-gray-400"
                        />

                        <h2 className="mt-5 text-2xl font-semibold">
                            No Products Found
                        </h2>

                        <p className="mt-2 text-gray-500">
                            You have not added any products yet.
                        </p>

                        <Link
                            href="/shop/add-product"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700"
                        >
                            <Plus size={20} />
                            Create Your First Product
                        </Link>
                    </div>
                ) : (
                    /* Products Grid */
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product._id}
                                className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    <Image
                                        src={product.image}
                                        alt={product.title || "Product image"}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    {/* Category */}
                                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
                                        {product.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 p-5">
                                    <div>
                                        <h2 className="line-clamp-1 text-xl font-semibold">
                                            {product.title}
                                        </h2>

                                        {product.brand && (
                                            <p className="mt-1 text-sm text-gray-500">
                                                {product.brand}
                                            </p>
                                        )}
                                    </div>

                                    {product.shortDescription && (
                                        <p className="line-clamp-2 text-sm text-gray-500">
                                            {product.shortDescription}
                                        </p>
                                    )}

                                    {/* Price & Stock */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {product.discountPrice ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-indigo-600">
                                                        $
                                                        {
                                                            product.discountPrice
                                                        }
                                                    </span>

                                                    <span className="text-sm text-gray-400 line-through">
                                                        ${product.price}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-lg font-bold text-indigo-600">
                                                    ${product.price}
                                                </span>
                                            )}
                                        </div>

                                        <div
                                            className={`flex items-center gap-1 text-sm font-medium ${
                                                product.stock > 0
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            <Boxes size={16} />

                                            {product.stock > 0
                                                ? `${product.stock} in stock`
                                                : "Out of stock"}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 pt-2">
                                        <Link
                                            href={`/explore-shop/${product._id}`}
                                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                                        >
                                            <Eye size={17} />
                                            View
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                            disabled={
                                                deletingId === product._id
                                            }
                                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {deletingId === product._id ? (
                                                <Loader2
                                                    size={17}
                                                    className="animate-spin"
                                                />
                                            ) : (
                                                <Trash2 size={17} />
                                            )}

                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ManageProductsPage;