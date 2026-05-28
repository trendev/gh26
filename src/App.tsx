import { UtilityBar } from '@/components/sections/UtilityBar';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { Realisations } from '@/components/sections/Realisations';
import { APropos } from '@/components/sections/APropos';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Realisations />
        <APropos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
