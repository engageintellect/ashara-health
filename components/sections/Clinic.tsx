import { Card, CardContent } from "@/components/ui/card";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("@/components/CustomMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-stone-100 dark:bg-stone-800 rounded-t-xl flex items-center justify-center">
      <div className="text-stone-500 dark:text-stone-400">Loading map...</div>
    </div>
  ),
});

export default function Clinic() {
  return (
    <section className="py-20 sm:py-24 bg-stone-50 dark:bg-stone-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Visit Our Clinic
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Located in the heart of Laguna Beach, California
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-4xl" delay={0.2}>
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="aspect-[16/9] w-full relative">
              <CustomMap address={site.address} />
            </div>

            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                    Ashara Health & Wellness
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-xs mb-2">
                    32406 S Coast Hwy, Laguna Beach, CA 92651
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      site.address
                    )}&navigate=yes`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-teal-800 dark:bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 transition-colors"
                  >
                    Directions
                  </a>
                  <a
                    href={`tel:${site.phone_href}`}
                    className="inline-flex items-center justify-center rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-4 py-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 transition-colors"
                  >
                    Call Clinic
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
