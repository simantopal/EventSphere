"use client";

import {
    FormEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { useRouter } from "next/navigation";

import {
    Bot,
    BrainCircuit,
    ChevronRight,
    CircleUserRound,
    MessageSquare,
    RotateCcw,
    Send,
    Sparkles,
    Star,
    WandSparkles,
} from "lucide-react";

interface Product {
    _id: string;
    title: string;
    category?: string;
    brand?: string;
    price: number;
    discountPrice?: number;
    stock?: number;
    image?: string;
    imageUrl?: string;
    shortDescription?: string;
}

interface Message {
    role: "user" | "assistant";
    content: string;
    products?: Product[];
}

const suggestions = [
    {
        icon: "🎧",
        title: "Find headphones",
        text: "I need good headphones under $100",
    },
    {
        icon: "🎮",
        title: "Gaming products",
        text: "Show me the best products for gaming",
    },
    {
        icon: "🏋️",
        title: "Fitness essentials",
        text: "What products are good for fitness?",
    },
    {
        icon: "💻",
        title: "Tech products",
        text: "Recommend some useful electronics",
    },
];

export default function AIAssistantPage() {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    const messagesEndRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!message.trim() || loading) return;

        const userMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/ai/chat`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        message: userMessage,
                    }),
                }
            );

            const data = await res.json();

            if (data.success) {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            data.data.message,
                        products:
                            data.data.products || [],
                    },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            "Sorry, I couldn't find a suitable answer right now.",
                    },
                ]);
            }
        } catch (error) {
            console.error(
                "AI chat error:",
                error
            );

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Something went wrong. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestion = (
        suggestion: string
    ) => {
        setMessage(suggestion);
    };

    const clearChat = () => {
        setMessages([]);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f8f9fc] dark:bg-[#08090d]">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

                {/* Top Header */}
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
                            <Sparkles size={23} />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                                Orvanta AI
                            </h1>

                            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">

                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                </span>

                                AI Shopping Assistant

                            </div>
                        </div>
                    </div>

                    {messages.length > 0 && (
                        <button
                            onClick={clearChat}
                            className="flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:bg-white/5 dark:text-gray-300"
                        >
                            <RotateCcw size={16} />
                            New Chat
                        </button>
                    )}
                </div>

                {/* Main Layout */}
                <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

                    {/* Sidebar */}
                    <aside className="hidden rounded-3xl border border-gray-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-xl lg:block dark:border-white/10 dark:bg-white/[0.03]">

                        <div className="mb-6 flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                                <BrainCircuit size={20} />
                            </div>

                            <div>
                                <h2 className="font-semibold">
                                    Smart Assistant
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Powered by AI
                                </p>
                            </div>

                        </div>

                        <div className="space-y-3">

                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Try asking
                            </p>

                            {suggestions.map(
                                (suggestion) => (
                                    <button
                                        key={
                                            suggestion.title
                                        }
                                        onClick={() =>
                                            handleSuggestion(
                                                suggestion.text
                                            )
                                        }
                                        className="group flex w-full items-center gap-3 rounded-2xl border border-transparent p-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50 dark:hover:border-indigo-500/20 dark:hover:bg-indigo-500/10"
                                    >

                                        <span className="text-xl">
                                            {
                                                suggestion.icon
                                            }
                                        </span>

                                        <span className="min-w-0 flex-1">

                                            <span className="block text-sm font-medium">
                                                {
                                                    suggestion.title
                                                }
                                            </span>

                                            <span className="mt-0.5 block truncate text-xs text-gray-500">
                                                {
                                                    suggestion.text
                                                }
                                            </span>

                                        </span>

                                        <ChevronRight
                                            size={15}
                                            className="text-gray-400 transition group-hover:translate-x-1"
                                        />

                                    </button>
                                )
                            )}

                        </div>

                        <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white">

                            <WandSparkles size={20} />

                            <h3 className="mt-3 text-sm font-semibold">
                                Find better products
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-indigo-100">
                                Tell me your needs, budget,
                                and preferences. I’ll help
                                you find the right products.
                            </p>

                        </div>

                    </aside>

                    {/* Chat Area */}
                    <section className="flex min-h-[calc(100vh-150px)] flex-col overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 shadow-xl shadow-gray-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20">

                        {/* Chat Header */}
                        <div className="flex items-center justify-between border-b border-gray-200/70 px-5 py-4 dark:border-white/10 sm:px-7">

                            <div className="flex items-center gap-3">

                                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white">

                                    <Bot size={21} />

                                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-[#111217]" />

                                </div>

                                <div>
                                    <h2 className="font-semibold">
                                        Orvanta AI Assistant
                                    </h2>

                                    <p className="text-xs text-gray-500">
                                        Ready to help you shop smarter
                                    </p>
                                </div>

                            </div>

                            <div className="hidden items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 sm:flex dark:bg-green-500/10">

                                <Star size={13} />

                                Smart Recommendations

                            </div>

                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-7">

                            {messages.length === 0 ? (

                                <div className="flex min-h-[500px] items-center justify-center">

                                    <div className="max-w-xl text-center">

                                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 text-4xl shadow-inner dark:from-indigo-500/10 dark:to-violet-500/10">
                                            🛍️
                                        </div>

                                        <h2 className="mt-6 text-3xl font-bold tracking-tight">
                                            What can I help you find?
                                        </h2>

                                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                                            Tell me what you’re looking
                                            for and I’ll search through
                                            the Orvanta marketplace to
                                            find the best match for you.
                                        </p>

                                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                                            {suggestions.map(
                                                (suggestion) => (

                                                    <button
                                                        key={
                                                            suggestion.title
                                                        }
                                                        onClick={() =>
                                                            handleSuggestion(
                                                                suggestion.text
                                                            )
                                                        }
                                                        className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]"
                                                    >

                                                        <span className="text-2xl">
                                                            {
                                                                suggestion.icon
                                                            }
                                                        </span>

                                                        <span className="flex-1">

                                                            <span className="block text-sm font-semibold">
                                                                {
                                                                    suggestion.title
                                                                }
                                                            </span>

                                                            <span className="mt-1 block text-xs text-gray-500">
                                                                Ask AI for recommendations
                                                            </span>

                                                        </span>

                                                        <ChevronRight
                                                            size={16}
                                                            className="text-gray-400 transition group-hover:translate-x-1"
                                                        />

                                                    </button>

                                                )
                                            )}

                                        </div>

                                    </div>

                                </div>

                            ) : (

                                <div className="mx-auto max-w-4xl space-y-6">

                                    {messages.map(
                                        (item, index) => (

                                            <div
                                                key={index}
                                                className={`flex gap-3 ${item.role ===
                                                    "user"
                                                    ? "justify-end"
                                                    : "justify-start"
                                                    }`}
                                            >

                                                {/* Assistant Avatar */}
                                                {item.role ===
                                                    "assistant" && (

                                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">

                                                            <Bot
                                                                size={17}
                                                            />

                                                        </div>

                                                    )}

                                                <div className="max-w-[85%]">

                                                    {/* Message */}
                                                    <div
                                                        className={`rounded-2xl px-5 py-4 text-sm leading-7 shadow-sm ${item.role ===
                                                            "user"
                                                            ? "rounded-br-md bg-indigo-600 text-white"
                                                            : "rounded-bl-md border border-gray-200 bg-white text-gray-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-200"
                                                            }`}
                                                    >

                                                        <p className="whitespace-pre-wrap">
                                                            {
                                                                item.content
                                                            }
                                                        </p>

                                                    </div>

                                                    {/* Recommended Products */}
                                                    {item.role ===
                                                        "assistant" &&
                                                        item.products &&
                                                        item.products
                                                            .length >
                                                        0 && (

                                                            <div className="mt-4 grid gap-3 sm:grid-cols-2">

                                                                {item.products.map(
                                                                    (
                                                                        product
                                                                    ) => (

                                                                        <div
                                                                            key={
                                                                                product._id
                                                                            }
                                                                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
                                                                        >

                                                                            {/* Product Image */}
                                                                            <div className="relative h-36 overflow-hidden bg-gray-100 dark:bg-white/5">

                                                                                {product.image ||
                                                                                    product.imageUrl ? (

                                                                                    <img
                                                                                        src={
                                                                                            product.image ||
                                                                                            product.imageUrl
                                                                                        }
                                                                                        alt={
                                                                                            product.title
                                                                                        }
                                                                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                                                    />

                                                                                ) : (

                                                                                    <div className="flex h-full items-center justify-center text-4xl">
                                                                                        🛍️
                                                                                    </div>

                                                                                )}

                                                                            </div>

                                                                            {/* Product Content */}
                                                                            <div className="p-4">

                                                                                <h3 className="line-clamp-1 text-sm font-semibold">
                                                                                    {
                                                                                        product.title
                                                                                    }
                                                                                </h3>

                                                                                <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                                                                                    {product.brand ||
                                                                                        product.category ||
                                                                                        "Product"}
                                                                                </p>

                                                                                {product.shortDescription && (

                                                                                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                                                                                        {
                                                                                            product.shortDescription
                                                                                        }
                                                                                    </p>

                                                                                )}

                                                                                <div className="mt-4 flex items-center justify-between">

                                                                                    <div>

                                                                                        {product.discountPrice ? (

                                                                                            <div className="flex items-center gap-2">

                                                                                                <span className="text-base font-bold text-indigo-600">
                                                                                                    $
                                                                                                    {
                                                                                                        product.discountPrice
                                                                                                    }
                                                                                                </span>

                                                                                                <span className="text-xs text-gray-400 line-through">
                                                                                                    $
                                                                                                    {
                                                                                                        product.price
                                                                                                    }
                                                                                                </span>

                                                                                            </div>

                                                                                        ) : (

                                                                                            <span className="text-base font-bold text-indigo-600">
                                                                                                $
                                                                                                {
                                                                                                    product.price
                                                                                                }
                                                                                            </span>

                                                                                        )}

                                                                                    </div>

                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() =>
                                                                                            router.push(
                                                                                                `/explore-shop/${product._id}`
                                                                                            )
                                                                                        }
                                                                                        className="flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-indigo-700"
                                                                                    >
                                                                                        View

                                                                                        <ChevronRight size={13} />
                                                                                    </button>

                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    )
                                                                )}

                                                            </div>

                                                        )}

                                                </div>

                                                {/* User Avatar */}
                                                {item.role ===
                                                    "user" && (

                                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300">

                                                            <CircleUserRound
                                                                size={18}
                                                            />

                                                        </div>

                                                    )}

                                            </div>

                                        )
                                    )}

                                    {/* Loading */}
                                    {loading && (

                                        <div className="flex items-start gap-3">

                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">

                                                <Bot
                                                    size={17}
                                                />

                                            </div>

                                            <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.05]">

                                                <div className="flex items-center gap-2">

                                                    <span className="text-sm text-gray-500">
                                                        Searching the marketplace
                                                    </span>

                                                    <span className="flex gap-1">

                                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500" />

                                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500 [animation-delay:150ms]" />

                                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-500 [animation-delay:300ms]" />

                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    )}

                                    <div
                                        ref={
                                            messagesEndRef
                                        }
                                    />

                                </div>

                            )}

                        </div>

                        {/* Input Area */}
                        <div className="border-t border-gray-200/70 p-4 dark:border-white/10 sm:p-5">

                            <form
                                onSubmit={
                                    handleSubmit
                                }
                                className="mx-auto max-w-4xl"
                            >

                                <div className="relative flex items-end rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 dark:border-white/10 dark:bg-white/[0.04]">

                                    <MessageSquare
                                        size={19}
                                        className="mb-3 ml-3 shrink-0 text-gray-400"
                                    />

                                    <input
                                        value={
                                            message
                                        }
                                        onChange={(e) =>
                                            setMessage(
                                                e.target
                                                    .value
                                            )
                                        }
                                        placeholder="Ask me anything about products..."
                                        disabled={
                                            loading
                                        }
                                        className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
                                    />

                                    <button
                                        type="submit"
                                        disabled={
                                            loading ||
                                            !message.trim()
                                        }
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 transition hover:scale-105 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                                    >

                                        <Send
                                            size={18}
                                        />

                                    </button>

                                </div>

                                <p className="mt-3 text-center text-[11px] text-gray-400">
                                    Orvanta AI can help you discover
                                    products based on your needs and budget.
                                </p>

                            </form>

                        </div>

                    </section>

                </div>

            </div>

        </main>
    );
}