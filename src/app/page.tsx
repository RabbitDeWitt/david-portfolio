import { About, Hero, Portfolio, Skills } from "@/components";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </main>
  );
}
