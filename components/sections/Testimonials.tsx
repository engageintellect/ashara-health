import { Card, CardContent } from "@/components/ui/card";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";
import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
            <Icon icon="mdi:account-heart" className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
            Patient Stories
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
            Real healing journeys from our community
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
        </ScrollReveal>

        <ScrollReveal className="mt-2" delay={0.2}>
          <div className="relative">
            {/* Horizontal scroller */}
            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Testimonials carousel"
            >
              {site.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-80 sm:w-[28rem] lg:w-[32rem] snap-start"
                >
                  <div className="group relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/10 dark:hover:shadow-stone-900/30 transition-all duration-500 lg:hover:-translate-y-2 h-full">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-8">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon
                          icon="mdi:format-quote-open"
                          className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        />
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            icon="mdi:star"
                            className="w-5 h-5 text-yellow-400 drop-shadow-sm"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed text-sm font-medium italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-stone-200/50 dark:border-stone-700/50">
                        <div>
                          <cite className="font-bold text-stone-900 dark:text-stone-100 not-italic text-lg">
                            {testimonial.name}
                          </cite>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                          <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                          <span>{testimonial.timeAgo}</span>
                        </div>
                      </div>

                      {/* Hover Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => scrollByAmount("left")}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-lg hover:bg-white dark:hover:bg-stone-700 transition-colors duration-300"
              aria-label="Previous testimonials"
            >
              <Icon
                icon="mdi:chevron-left"
                className="w-6 h-6 text-stone-700 dark:text-stone-300"
              />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-lg hover:bg-white dark:hover:bg-stone-700 transition-colors duration-300"
              aria-label="Next testimonials"
            >
              <Icon
                icon="mdi:chevron-right"
                className="w-6 h-6 text-stone-700 dark:text-stone-300"
              />
            </button>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal delay={0.4} className="text-center mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8 max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />
            <div className="relative">
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                Ready to begin your own healing journey?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <span>Start Your Journey</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
