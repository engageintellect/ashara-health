import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Faq() {
  const items = [
    {
      q: "Do you accept insurance?",
      a: "We operate out-of-network and can provide superbills for reimbursement.",
      icon: "mdi:shield-account",
    },
    {
      q: "Are telehealth visits available?",
      a: "Yes—virtual consults are available for eligible services.",
      icon: "mdi:video",
    },
    {
      q: "Can you order labs and imaging?",
      a: "Yes. We coordinate with lab and radiology partners as indicated.",
      icon: "mdi:test-tube",
    },
    {
      q: "What ages do you see?",
      a: "Primarily adults; please contact us for specifics.",
      icon: "mdi:account-group",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 dark:from-stone-800 dark:via-stone-900 dark:to-stone-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-1.1-0.9-2-2-2s-2 0.9-2 2 0.9 2 2 2 2-0.9 2-2zm10 0c0-1.1-0.9-2-2-2s-2 0.9-2 2 0.9 2 2 2 2-0.9 2-2z' opacity='0.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
            <Icon icon="mdi:help-circle" className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-medium">
            Quick answers to help you understand our approach to care
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
        </ScrollReveal>

        <div className="mt-20 grid gap-4 sm:gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 0.1} direction="up">
              <div className="bg-white dark:bg-stone-800 rounded-2xl border border-stone-200/50 dark:border-stone-700/50 shadow-lg p-4 sm:p-6 lg:p-8 h-full">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center">
                    <Icon
                      icon={item.icon}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 sm:mb-3">
                      {item.q}
                    </h3>
                  </div>
                </div>

                <div className="pl-10 sm:pl-16">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full" />
                    <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed pl-4 sm:pl-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal className="mt-16 text-center" delay={0.4}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100/80 dark:bg-stone-800/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50">
            <Icon
              icon="mdi:chat-question"
              className="w-5 h-5 text-teal-600 dark:text-teal-400"
            />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              Have more questions? We're here to help—
            </span>
            <a
              href="#contact"
              className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              contact us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
