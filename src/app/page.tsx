import Image from "next/image";
import { HeroComponent } from "@/components/hero-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroComponent />
    </main>
  );
}
