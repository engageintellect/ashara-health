import { Card } from "@/components/ui/card";

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
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Short answers to common questions. Replace with your actual FAQ.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.q}>
              <div className="font-semibold text-stone-900 dark:text-stone-100">
                {item.q}
              </div>
              <div className="mt-2 text-stone-700 dark:text-stone-300">
                {item.a}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
