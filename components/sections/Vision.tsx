import site from "@/content/site.json";

export default function Vision() {
  return (
    <section id="vision" className="py-20 sm:py-24 bg-white dark:bg-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Our Vision
          </h2>
          <p className="mt-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            Our approach emphasizes recognizing clients as unique beings, not
            just cases. Ashara represents a harmonious blend of East Meets West,
            integrating practices like Ayurveda and Chinese Medicine with modern
            therapies. We are a Mobile Sanctuary, bringing healing to where you
            are.
          </p>
        </div>
      </div>
    </section>
  );
}
