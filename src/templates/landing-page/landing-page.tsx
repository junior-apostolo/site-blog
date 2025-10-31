import {
  Hero,
  CallToAction,
  CustomerStorySection,
  FeatureSection,
  SupportSection,
} from "./sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
};
