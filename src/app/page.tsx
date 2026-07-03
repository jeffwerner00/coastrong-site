export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <div className="mb-6">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full mb-6">
            Coming Soon
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          COA <span className="text-blue-500">Strong</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-xl mb-12">
          Track your workouts. Strengthen your community.
        </p>

        {/* App store placeholders */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
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
          App launching soon. Stay tuned.
        </p>
      </section>

    </main>
  );
}
