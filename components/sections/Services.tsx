import site from "@/content/site.json";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Services
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Where ancient rituals meet modern healing
          </p>
        </div>
        <ul
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {site.services.map((name) => (
            <li key={name} className="group">
              <a
                href="#contact"
                className="block h-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm transition group-hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 overflow-hidden"
                aria-describedby={`svc-${name}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-teal-900/10 dark:bg-teal-700/10">
                  <svg viewBox="0 0 600 450" className="h-full w-full">
                    <defs>
                      <linearGradient
                        id={`g-${name}`}
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#0f3d36" />
                        <stop offset="100%" stopColor="#96c3b0" />
                      </linearGradient>
                    </defs>
                    <rect
                      width="600"
                      height="450"
                      fill={`url(#g-${name})`}
                      opacity="0.25"
                    />
                    <circle
                      cx="140"
                      cy="120"
                      r="70"
                      fill="#0f3d36"
                      opacity="0.5"
                    />
                    <circle
                      cx="480"
                      cy="260"
                      r="110"
                      fill="#96c3b0"
                      opacity="0.5"
                    />
                    <rect
                      x="220"
                      y="180"
                      width="160"
                      height="100"
                      rx="16"
                      fill="#0f3d36"
                      opacity="0.35"
                    />
                    <path
                      d="M120 300c60 40 180 40 300 0"
                      stroke="#0f3d36"
                      strokeWidth="10"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                      {name}
                    </h3>
                    <span
                      aria-hidden
                      className="rounded-full border border-stone-200 dark:border-stone-700 px-2 py-0.5 text-xs text-stone-600 dark:text-stone-400"
                    >
                      Inquire
                    </span>
                  </div>
                  <p
                    id={`svc-${name}`}
                    className="mt-2 text-sm text-stone-700 dark:text-stone-300"
                  >
                    Tailored care and guidance based on your goals.
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
