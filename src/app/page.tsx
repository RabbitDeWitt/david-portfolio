import { About, Footer, Header, Hero, Portfolio, Skills } from "@/components";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  );
}
