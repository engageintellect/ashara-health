import site from "@/content/site.json";

export default function Conditions() {
  return (
    <section className="py-20 sm:py-24 bg-stone-50 dark:bg-stone-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            What we treat
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Comprehensive care for mind and body
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.conditions.map((condition) => (
            <div
              key={condition}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-800 p-6 shadow-sm transition-all hover:shadow-md border border-stone-200 dark:border-stone-700"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 mb-4">
                <div className="w-6 h-6 rounded-full bg-teal-800 dark:bg-teal-700"></div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                {condition}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Personalized treatment plans addressing root causes
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
