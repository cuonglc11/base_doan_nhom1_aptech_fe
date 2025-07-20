import {
  BestSeller,
  Hero,
  LatestCollection,
  NewsletterBox,
  OurPolicy,
} from "@components/ui";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}

export default Home;
