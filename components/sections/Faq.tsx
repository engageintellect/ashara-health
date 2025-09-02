import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

export default function Faq() {
  const items = [
    {
      q: "Do you accept insurance?",
      a: "We operate out-of-network and can provide superbills for reimbursement.",
    },
    {
      q: "Are telehealth visits available?",
      a: "Yes—virtual consults are available for eligible services.",
    },
    {
      q: "Can you order labs and imaging?",
      a: "Yes. We coordinate with lab and radiology partners as indicated.",
    },
    {
      q: "What ages do you see?",
      a: "Primarily adults; please contact us for specifics.",
    },
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 sm:py-24 bg-stone-100 dark:bg-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-stone-700 dark:text-stone-300">
            Short answers to common questions. Replace with your actual FAQ.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 0.1} direction="up">
              <Card className="h-full hover:shadow-lg transition-all duration-300 p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300 mb-3">
                    Q: {item.q}
                  </h3>
                  <div className="pl-4 border-l-2 border-teal-200 dark:border-teal-700">
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                      <span className="font-medium text-teal-700 dark:text-teal-400">
                        A:
                      </span>{" "}
                      {item.a}
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
