export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          COA <span className="text-blue-500">Strong</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-6">
          Build strong habits. Stay accountable. Get after it together.
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12">
          COA Strong is a whole-person health and fitness tracker. Log your
          training, nutrition, sleep, and daily habits, earn badges as you
          build consistency, and stay accountable alongside your crew.
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

      {/* What you track */}
      <section className="px-6 py-16 bg-gray-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Track what matters
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            COA Strong helps you show up every day across the habits that build a
            healthier, stronger you.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Training", desc: "Log your workouts and stay on track with your weekly plan." },
              { title: "Nutrition", desc: "Eat the right foods and amounts, and track your progress." },
              { title: "Sleep", desc: "Record your hours and build a consistent rest routine." },
              { title: "Steps & Water", desc: "Hit your daily movement and hydration targets." },
              { title: "Be Still", desc: "Make time for stillness, prayer, and reflection." },
              { title: "Weekly Anchor", desc: "Choose a focus habit for the week and lock it in." },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community + badges */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stronger together
            </h2>
            <p className="text-gray-400 leading-relaxed">
              COA Strong is built for accountability. Join a crew, follow your
              team&apos;s progress, and encourage each other to keep showing up.
              Consistency is easier when you&apos;re not doing it alone.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Earn your badges
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Every logged day counts. Build streaks, hit milestones, and earn
              badges that celebrate the discipline you&apos;re putting in — one
              habit at a time.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-gray-900/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How it works</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Sign in on your phone, set your weekly focus, and log your habits
            each day. COA Strong keeps your streaks, badges, and progress in one
            place — and connects you with your crew so you stay accountable and
            motivated.
          </p>
          <p className="text-gray-500 text-sm">
            Build the habits. Stay the course. Get COA Strong.
          </p>
        </div>
      </section>
    </main>
  );
}
