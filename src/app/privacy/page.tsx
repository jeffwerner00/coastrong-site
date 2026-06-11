import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — COA Strong",
};

export default function PrivacyPolicy() {
  const effectiveDate = "June 10, 2025";

  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
          ← COA Strong
        </Link>
      </nav>

      {/* Content */}
      <article className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Effective Date: {effectiveDate}</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-200 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              COA Strong (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use the
              COA Strong mobile application (&quot;App&quot;) and related services (collectively, the &quot;Service&quot;).
            </p>
            <p className="mt-3">
              By using COA Strong, you agree to the terms of this Privacy Policy. If you do not agree,
              please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We collect the following categories of information:</p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
              <li><strong>Account Information:</strong> Your name, email address, and password when you create an account.</li>
              <li><strong>Profile Information:</strong> Optional profile details such as profile photo or display name.</li>
              <li><strong>Organization Membership:</strong> Information about the gym, CrossFit affiliate, or fitness organization you belong to.</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">2.2 Workout &amp; Activity Data</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
              <li><strong>Workout Records:</strong> Exercises, sets, reps, weights, times, and scores you log.</li>
              <li><strong>Attendance Records:</strong> Class check-ins, attendance history, and participation data.</li>
              <li><strong>Performance Metrics:</strong> Personal records (PRs), benchmark results, and progress data.</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">2.3 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
              <li><strong>Device Information:</strong> Device type, operating system version, and unique device identifiers.</li>
              <li><strong>Usage Data:</strong> Features used, time spent in the app, and interactions with content.</li>
              <li><strong>Log Data:</strong> IP addresses, crash reports, and app diagnostics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
              <li>Provide, operate, and maintain the COA Strong App and Service</li>
              <li>Create and manage your user account</li>
              <li>Record and display your workout history, attendance, and performance data</li>
              <li>Enable coaches and organization administrators to manage memberships and view performance data</li>
              <li>Send you service-related notifications and updates</li>
              <li>Respond to your questions, comments, and support requests</li>
              <li>Analyze usage trends to improve the App and develop new features</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.1 With Your Organization</h3>
            <p>
              If you are a member of a gym or fitness organization using COA Strong, your workout data,
              attendance records, and profile information may be visible to coaches and administrators
              of that organization as part of the membership and coaching features.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.2 Service Providers</h3>
            <p>We use third-party service providers to help us operate and improve the Service:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
              <li>
                <strong>Supabase:</strong> We use Supabase for database hosting and authentication services.
                Your data is stored securely on Supabase infrastructure. Supabase&apos;s privacy policy is
                available at <a href="https://supabase.com/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>.
              </li>
              <li>
                <strong>Expo / EAS (Expo Application Services):</strong> We use Expo and EAS for mobile
                app development, building, and over-the-air updates. Expo&apos;s privacy policy is available at{" "}
                <a href="https://expo.dev/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">expo.dev/privacy</a>.
              </li>
            </ul>
            <p className="mt-3">
              These providers are contractually obligated to maintain the confidentiality and security
              of your information and may only use it to provide services to us.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law or in response to valid requests
              by public authorities (e.g., a court order or government agency).
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.4 Business Transfers</h3>
            <p>
              In connection with a merger, acquisition, or sale of all or a portion of our assets,
              your information may be transferred. We will notify you before your data is transferred
              and becomes subject to a different privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to
              provide you the Service. If you delete your account, we will delete or anonymize your
              personal information within 30 days, except where we are legally required to retain it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet or electronic storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal information.</li>
              <li><strong>Portability:</strong> Request your data in a portable, machine-readable format.</li>
              <li><strong>Opt-Out:</strong> Opt out of non-essential communications at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@coastrong.com" className="text-blue-400 hover:underline">
                privacy@coastrong.com
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>
              COA Strong is not directed to children under the age of 13. We do not knowingly collect
              personal information from children under 13. If we become aware that we have collected
              such information, we will take steps to delete it promptly. If you believe we may have
              information from a child under 13, please contact us at{" "}
              <a href="mailto:privacy@coastrong.com" className="text-blue-400 hover:underline">
                privacy@coastrong.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by posting the new policy in the App and updating the &quot;Effective Date&quot; above. Your continued
              use of the Service after any changes constitutes your acceptance of the new policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-3 p-4 bg-gray-800 rounded-lg">
              <p className="font-semibold text-white">COA Strong</p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@coastrong.com" className="text-blue-400 hover:underline">
                  privacy@coastrong.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-6 text-center text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} COA Strong. All rights reserved.</span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/privacy" className="text-blue-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
