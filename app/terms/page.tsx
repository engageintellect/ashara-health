import site from "@/content/site.json";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              By accessing and using the {site.brand} website and services, you
              accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Medical Disclaimer
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              The information provided on this website is for educational
              purposes only and is not intended as medical advice. Always
              consult with a qualified healthcare provider before making any
              healthcare decisions or for guidance about a specific medical
              condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Services
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              {site.brand} provides naturopathic healthcare services. All
              services are subject to availability and may be modified or
              discontinued at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Appointment Policy
            </h2>
            <ul className="list-disc pl-6 text-stone-700 dark:text-stone-300 mb-4">
              <li>
                Appointments must be cancelled at least 24 hours in advance
              </li>
              <li>Late cancellations may be subject to fees</li>
              <li>No-shows will be charged the full appointment fee</li>
              <li>Rescheduling is subject to availability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              {site.brand} shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising from the use
              of our services or website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Contact Information
            </h2>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-lg">
              <p className="text-stone-700 dark:text-stone-300 mb-2">
                <strong>{site.brand}</strong>
              </p>
              <p className="text-stone-700 dark:text-stone-300 mb-2">
                {site.address}
              </p>
              <p className="text-stone-700 dark:text-stone-300 mb-2">
                Phone: {site.phone_display}
              </p>
              <p className="text-stone-700 dark:text-stone-300">
                Email: {site.email}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
