export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          COA <span className="text-blue-500">Strong</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-6">
          The all-in-one certificate of analysis and compliance tracker for
          cannabis and hemp operators.
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12">
          COA Strong helps growers, processors, and retailers store, organize,
          and verify lab results (Certificates of Analysis) in one place — so you
          can prove product compliance, share results with customers, and keep
          your team audit-ready.
        </p>

        {/* App store buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            disabled
            className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-xl opacity-60 cursor-not-allowed border border-gray-200"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs font-normal">Download on the</span>
              App Store
            </span>
          </button>

          <button
            disabled
            className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-xl opacity-60 cursor-not-allowed border border-gray-200"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.18 23.76c.31.17.68.18 1.03-.01l12.04-6.95-2.5-2.5-10.57 9.46z"
                fill="#EA4335"
              />
              <path
                d="M20.82 9.79L17.57 7.9l-2.8 2.8 2.8 2.8 3.27-1.88c.93-.54.93-1.81-.02-2.83z"
                fill="#FBBC04"
              />
              <path
                d="M3.18.24C2.8.45 2.5.85 2.5 1.42v21.16c0 .57.3.97.68 1.18l12.05-11.76L3.18.24z"
                fill="#4285F4"
              />
              <path
                d="M14.75 12l2.82-2.82-12.04-6.94c-.37-.21-.74-.2-1.03-.01L14.75 12z"
                fill="#34A853"
              />
            </svg>
            <span>
              <span className="block text-xs font-normal">Get it on</span>
              Google Play
            </span>
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Available soon on the App Store and Google Play.
        </p>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What COA Strong does
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Purpose-built for compliance. COA Strong gives your team a single,
            secure home for every lab result — accessible on web and mobile.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-blue-500 text-2xl mb-3 font-bold">01</div>
              <h3 className="text-xl font-semibold mb-2">
                Store every COA in one place
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Upload and organize Certificates of Analysis by product, batch,
                and date. No more chasing PDFs across email and drives.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-blue-500 text-2xl mb-3 font-bold">02</div>
              <h3 className="text-xl font-semibold mb-2">
                Verify and share results
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Instantly confirm product compliance and share verified results
                with customers, partners, and regulators via secure links.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-blue-500 text-2xl mb-3 font-bold">03</div>
              <h3 className="text-xl font-semibold mb-2">
                Stay audit-ready
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Keep your whole team on the same page with role-based access, so
                you&apos;re always ready for an inspection or audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How it works</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Sign in to COA Strong on your phone or the web, add your products,
            and attach their lab-issued Certificates of Analysis. COA Tracker
            keeps everything organized and searchable, and lets you generate
            shareable, verifiable proof of compliance in seconds.
          </p>
          <p className="text-gray-500 text-sm">
            Built for cannabis and hemp businesses that need to prove their
            products are tested, safe, and compliant.
          </p>
        </div>
      </section>
    </main>
  );
}
