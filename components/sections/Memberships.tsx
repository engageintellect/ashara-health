import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";

export default function Memberships() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-stone-100/60 dark:bg-stone-900/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Memberships
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Clear options for how to engage—virtual, on-site, or in-clinic.
          </p>
        </ScrollReveal>
        <ScrollReveal
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.2}
        >
          {site.memberships.map((m, index) => (
            <Card key={m.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{m.name}</CardTitle>
                <CardDescription>{m.note}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul
                  className="space-y-2 text-sm text-stone-800 dark:text-stone-200"
                  role="list"
                >
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-800 dark:bg-teal-700" />
                    <span>Personalized plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-800 dark:bg-teal-700" />
                    <span>Access to priority scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-800 dark:bg-teal-700" />
                    <span>Messaging between visits</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="#contact">
                  <Button className="w-full">Start Journey</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
