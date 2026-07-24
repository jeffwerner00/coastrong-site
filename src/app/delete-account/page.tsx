import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account — COA Strong",
  description:
    "Learn how to delete your COA Tracker account and what data is removed.",
};

export default function DeleteAccount() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
        >
          ← COA Strong
        </Link>
      </nav>

      {/* Content */}
      <article className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Delete Your COA Tracker Account
        </h1>
        <p className="text-gray-400 text-sm mb-10">
          We&apos;re sorry to see you go. Here&apos;s how to delete your account.
        </p>

        <div className="space-y-8 text-gray-200 leading-relaxed">
          {/* How to delete */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              How to Request Account Deletion
            </h2>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">
              Option 1 — In the App
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Open COA Tracker.</li>
              <li>
                Go to <span className="text-white font-medium">Account</span>.
              </li>
              <li>
                Tap{" "}
                <span className="text-white font-medium">Delete Account</span>.
              </li>
              <li>Confirm the deletion when prompted.</li>
            </ol>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">
              Option 2 — By Email
            </h3>
            <p>
              Email{" "}
              <a
                href="mailto:support@coastrong.com"
                className="text-blue-400 hover:underline"
              >
                support@coastrong.com
              </a>{" "}
              from the email address associated with your account and request
              account deletion. We&apos;ll confirm once your request has been
              processed.
            </p>
          </section>

          {/* What gets deleted */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What Gets Deleted
            </h2>
            <p className="mb-3">
              When your account is deleted, the following data is permanently
              removed:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Your account and profile information</li>
              <li>All logged health and fitness data — water, weight, sleep, steps, and training history</li>
            </ul>
          </section>

          {/* Timeline and retention */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Timeline &amp; Data Retention
            </h2>
            <p>
              Account deletion is permanent and will be processed within 30
              days. Some records may be retained where required by law.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Questions?
            </h2>
            <p>
              If you have questions about your data or the deletion process,
              contact us at{" "}
              <a
                href="mailto:support@coastrong.com"
                className="text-blue-400 hover:underline"
              >
                support@coastrong.com
              </a>
              . You can also review our{" "}
              <Link href="/privacy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>{" "}
              for more details about how we handle your data.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
