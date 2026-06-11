import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — COA Strong",
};

export default function TermsOfService() {
  const effectiveDate = "June 10, 2026";

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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Effective Date: {effectiveDate}</p>

        <div className="space-y-8 text-gray-200 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and
              COA Strong (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the
              COA Strong mobile application, website, and related services (collectively, the &quot;Service&quot;).
            </p>
            <p className="mt-3">
              By downloading, installing, or using COA Strong, you agree to be bound by these Terms.
              If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use the Service. By using COA Strong, you represent
              and warrant that you meet this age requirement. If you are under 18, you represent that your
              parent or guardian has reviewed and agreed to these Terms on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">3.1 Account Creation</h3>
            <p>
              To access certain features of the Service, you must create an account. You agree to provide
              accurate, current, and complete information during registration and to keep your account
              information up to date.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for
              all activity that occurs under your account. You agree to notify us immediately of any
              unauthorized access or use of your account at{" "}
              <a href="mailto:privacy@coastrong.com" className="text-blue-400 hover:underline">
                privacy@coastrong.com
              </a>.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">3.3 One Account Per User</h3>
            <p>
              Each user may maintain only one account. You may not create an account on behalf of another
              person without their explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Organization and Coach Relationships</h2>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.1 Member Accounts</h3>
            <p>
              If you join COA Strong as a member of a gym, CrossFit affiliate, or fitness organization
              (&quot;Organization&quot;), your workout data, attendance records, and profile information may be
              visible to coaches and administrators of that Organization. By joining an Organization on
              the platform, you consent to this data sharing.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.2 Coach and Administrator Accounts</h3>
            <p>
              If you use COA Strong as a coach or organization administrator, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
              <li>Use member data only for legitimate coaching and organizational management purposes</li>
              <li>Not share or disclose member data to unauthorized third parties</li>
              <li>Comply with all applicable privacy laws in your jurisdiction when handling member data</li>
              <li>Take responsibility for the accurate management of your Organization&apos;s settings and member access</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">4.3 Organization Responsibility</h3>
            <p>
              Organizations using COA Strong are responsible for ensuring their use of the Service complies
              with these Terms and applicable laws. COA Strong is a technology platform and is not responsible
              for the coaching practices, training methods, or business decisions of any Organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Acceptable Use</h2>
            <p>You agree to use COA Strong only for lawful purposes. You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
              <li>Use the Service in any way that violates applicable local, state, national, or international laws</li>
              <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity</li>
              <li>Transmit any content that is harmful, offensive, obscene, defamatory, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to any portion of the Service or related systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Use automated scripts, bots, or other means to access the Service in an unauthorized manner</li>
              <li>Collect or harvest any personal information from other users without their consent</li>
              <li>Use the Service to send unsolicited commercial messages or spam</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the App</li>
              <li>Remove, obscure, or alter any copyright, trademark, or other proprietary rights notices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Content and Intellectual Property</h2>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">6.1 Your Content</h3>
            <p>
              You retain ownership of any workout data, records, or other content you submit to the Service
              (&quot;User Content&quot;). By submitting User Content, you grant COA Strong a limited, non-exclusive,
              royalty-free license to use, store, and display your User Content solely to operate and
              provide the Service.
            </p>

            <h3 className="text-lg font-medium text-gray-100 mt-4 mb-2">6.2 Our Intellectual Property</h3>
            <p>
              The COA Strong App, including its design, features, code, and content (excluding User Content),
              is owned by COA Strong and protected by copyright, trademark, and other intellectual property
              laws. You may not copy, modify, distribute, or create derivative works without our express
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Health and Fitness Disclaimer</h2>
            <p>
              COA Strong is a fitness tracking platform, not a medical service. The information and features
              provided through the Service are for informational and tracking purposes only and are not a
              substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified
              healthcare provider before beginning any exercise program. COA Strong is not responsible for
              any injury, illness, or health condition arising from use of the Service or participation in
              fitness activities tracked through the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE
              WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COA STRONG, ITS
              OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
              LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
              CONNECTION WITH:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
              <li>Your use of or inability to use the Service</li>
              <li>Any content obtained through the Service</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to the Service</li>
            </ul>
            <p className="mt-3">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT YOU PAID
              TO US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM, OR ONE HUNDRED DOLLARS ($100),
              WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless COA Strong and its officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, costs, or expenses
              (including reasonable attorneys&apos; fees) arising out of or in connection with your use of
              the Service, your violation of these Terms, or your violation of any rights of another person.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time, with
              or without cause, with or without notice. Upon termination, your right to use the Service
              will immediately cease. Provisions of these Terms that by their nature should survive
              termination shall survive, including ownership provisions, warranty disclaimers, and
              limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Commonwealth
              of Virginia, without regard to its conflict of law provisions. Any dispute arising from
              or relating to these Terms or the Service shall be resolved exclusively in the state or
              federal courts located in Virginia, and you consent to personal jurisdiction in those courts.
            </p>
            <p className="mt-3">
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material
              changes by posting the updated Terms in the App and updating the &quot;Effective Date&quot; above.
              Your continued use of the Service after the changes take effect constitutes your acceptance
              of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
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
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/terms" className="text-blue-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
