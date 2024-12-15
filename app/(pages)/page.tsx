import { HomeClients } from '../components/Home/HomeClients';
import { HomeHero } from '../components/Home/HomeHero';
import { HomeWhatWeDo } from '../components/Home/HomeWhatWeDo';
import { HomeWhoWeWorkWith } from '../components/Home/HomeWhoWeWorkWith';
import { HomeWhyWebredone } from '../components/Home/HomeWhyWebredone';
import { ContactCTA } from '../components/Sections/ContactCTA';
import { ThemeRedoneEntry } from '../components/ThemeRedoneEntry';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeWhatWeDo />
      <ThemeRedoneEntry />
      <HomeWhoWeWorkWith />
      <HomeWhyWebredone />
      <HomeClients />
      <ContactCTA />
    </div>
  );
}
