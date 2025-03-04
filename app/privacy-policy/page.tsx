export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">When you use ContentMuse, we collect:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Information from your Instagram account (posts, engagement metrics,
            profile data)
          </li>
          <li>Facebook login information for authentication</li>
          <li>Usage data to improve our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Generate personalized content suggestions</li>
          <li>Analyze content performance</li>
          <li>Improve our AI recommendations</li>
          <li>Provide customer support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          3. Data Storage and Security
        </h2>
        <p className="mb-4">
          We use Supabase for secure data storage. All data is encrypted and
          stored in compliance with industry standards.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Third-Party Services</h2>
        <p className="mb-4">We integrate with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Meta (Facebook/Instagram) for authentication and data access</li>
          <li>Supabase for data storage</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal data</li>
          <li>Request data deletion</li>
          <li>Opt out of data collection</li>
          <li>Export your data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
        <p className="mb-4">
          For any privacy-related questions, please contact us at:{" "}
          <strong>info@postpilot.com</strong>
        </p>
      </section>

      <section className="mb-8" id="data-deletion">
        <h2 className="text-xl font-semibold mb-4">7. Data Deletion</h2>
        <p className="mb-4">You can request deletion of your data in two ways:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Through your account settings in the dashboard</li>
          <li>By emailing our support team at support@yourapp.com</li>
        </ul>
        <p className="mt-4">
          When you request data deletion, we will:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remove all your personal information</li>
          <li>Delete your content analysis history</li>
          <li>Remove your account and associated data</li>
          <li>Disconnect all social media integrations</li>
        </ul>
        <p className="mt-4">
          Data deletion requests are processed within 30 days.
        </p>
      </section>

      <footer className="text-sm text-gray-600 mt-16">
        Last updated: {new Date().toLocaleDateString()}
      </footer>
    </div>
  );
}
