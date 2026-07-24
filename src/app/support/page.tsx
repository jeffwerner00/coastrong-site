import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — COA Strong",
};

export default function Support() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Support</h1>
        <p className="text-gray-400 text-sm mb-10">We&apos;re here to help.</p>

        <div className="space-y-8 text-gray-200 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              Have a question, found a bug, or need help with your account? Reach out and
              we&apos;ll get back to you as soon as we can.
            </p>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <p className="font-semibold text-white">COA Strong Support</p>
              <p>
                Email:{" "}
                <a href="mailto:support@coastrong.com" className="text-blue-400 hover:underline">
                  support@coastrong.com
                </a>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                We typically respond within 1–2 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Frequently Asked Questions</h2>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">How do I reset my password?</h3>
            <p>
              On the sign-in screen, tap &quot;Forgot Password&quot; and follow the instructions sent to
              your email to reset it.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">How do I join my team or organization?</h3>
            <p>
              Your coach or organization admin will send you an invite link. Open it on your device
              with COA Strong installed and you&apos;ll be added automatically after signing in.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">How do I manage my subscription?</h3>
            <p>
              Subscriptions are managed through your Apple App Store account. Open Settings on your
              device, tap your name, then Subscriptions, and select COA Strong to change or cancel.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">How do I delete my account?</h3>
            <p>
              You can request account deletion by emailing{" "}
              <a href="mailto:support@coastrong.com" className="text-blue-400 hover:underline">
                support@coastrong.com
              </a>{" "}
              from the address associated with your account. We&apos;ll process your request and confirm
              once complete.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy &amp; Terms</h2>
            <p>
              Review our{" "}
              <Link href="/privacy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-blue-400 hover:underline">
                Terms of Service
              </Link>{" "}
              for more information about how we handle your data and the terms governing your use of
              the Service.
            </p>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-6 text-center text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} COA Strong. All rights reserved.</span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/support" className="text-blue-400 hover:text-white transition-colors">
            Support
          </Link>
        </div>
      </footer>
    </main>
  );
}
