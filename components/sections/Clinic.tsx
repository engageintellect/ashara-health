import { Card, CardContent } from "@/components/ui/card";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.2!2d-117.7831!3d33.5423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf0a1a2b3c4d5%3A0x123456789abcdef0!2s32406%20S%20Coast%20Hwy%2C%20Laguna%20Beach%2C%20CA%2092651!5e0!3m2!1sen!2sus!4v1693123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
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
