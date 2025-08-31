import { Card, CardContent } from "@/components/ui/card";
import site from "@/content/site.json";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-stone-50 dark:bg-stone-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            What our patients are saying about their healing journey
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between text-sm">
                  <cite className="font-semibold text-stone-900 dark:text-stone-100 not-italic">
                    {testimonial.name}
                  </cite>
                  <span className="text-stone-500 dark:text-stone-400">
                    {testimonial.timeAgo}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
