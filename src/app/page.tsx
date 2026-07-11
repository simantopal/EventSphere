import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <FeaturedEvents />
      <Categories />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </div>
  );
}
