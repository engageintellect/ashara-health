import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import site from "@/content/site.json";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-stone-100/60 dark:bg-stone-900/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-3 text-stone-700 dark:text-stone-300">
              Send a note and our team will follow up.
            </p>
            <div className="mt-6 space-y-3 text-stone-800 dark:text-stone-200">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  site.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {site.address}
              </a>
              <a
                href={`tel:${site.phone_href}`}
                className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {site.phone_display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {site.email}
              </a>
              <div className="pt-2 text-sm text-stone-700 dark:text-stone-300">
                <div className="font-semibold">Opening hours</div>
                <ul className="mt-1 space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.label}>
                      <span className="inline-block w-20">{h.label}:</span>{" "}
                      {h.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <form
            id="contact-form"
            className="rounded-2xl border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800/50 p-4 sm:p-8 shadow-lg"
            aria-describedby="form-status"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  How can we help?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us a bit about your goals…"
                  className="min-h-[120px] resize-none"
                />
              </div>
              <div className="flex items-start justify-between pt-2">
                <div
                  id="form-status"
                  role="status"
                  aria-live="polite"
                  className="text-sm text-stone-600 dark:text-stone-400 max-w-xs"
                >
                  We usually respond within one business day.
                </div>
                <Button type="submit" className="px-8 py-3 h-auto">
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
