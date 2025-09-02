import site from "@/content/site.json";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Information We Collect
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              We collect information you provide directly to us, such as when
              you:
            </p>
            <ul className="list-disc pl-6 text-stone-700 dark:text-stone-300 mb-4">
              <li>Contact us through our website forms</li>
              <li>Schedule appointments or consultations</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Interact with our social media accounts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-stone-700 dark:text-stone-300 mb-4">
              <li>Provide and improve our healthcare services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you appointment reminders and health information</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Protect the security and integrity of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Information Sharing
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 text-stone-700 dark:text-stone-300 mb-4">
              <li>With healthcare providers involved in your care</li>
              <li>As required by law or legal process</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              HIPAA Compliance
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              As a healthcare provider, {site.brand} complies with the Health
              Insurance Portability and Accountability Act (HIPAA). We maintain
              appropriate safeguards to protect your health information and will
              provide you with a separate Notice of Privacy Practices regarding
              your protected health information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Data Security
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Your Rights
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-stone-700 dark:text-stone-300 mb-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your health records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and analyze website usage. You
              can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the updated policy
              on our website with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
              Contact Us
            </h2>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              If you have questions about this privacy policy or our privacy
              practices, please contact us:
            </p>
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
