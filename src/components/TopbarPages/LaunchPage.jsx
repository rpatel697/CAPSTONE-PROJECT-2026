import React from "react";
import {
  Rocket,
  Target,
  FileText,
  Presentation,
  BadgeCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Trophy,
} from "lucide-react";

const launchSteps = [
  {
    title: "Validate the idea",
    text: "Test if the problem is real and if people care enough about the solution.",
    icon: Target,
    color: "bg-[#FFF1F5] text-[#FF3864]",
  },
  {
    title: "Build the business model",
    text: "Use simple tools to define users, value, pricing, channels, and next steps.",
    icon: FileText,
    color: "bg-[#EEF9FB] text-[#1F9AD6]",
  },
  {
    title: "Prepare the pitch",
    text: "Create a clean pitch deck and practice explaining the idea clearly.",
    icon: Presentation,
    color: "bg-[#FFF7E8] text-[#FB8500]",
  },
  {
    title: "Submit for review",
    text: "Get mentor feedback, earn badges, and prepare for demo day.",
    icon: BadgeCheck,
    color: "bg-[#F4F0FF] text-[#8B63D9]",
  },
];

const startupKit = [
  "Problem statement builder",
  "Business model canvas",
  "Pitch deck checklist",
  "Mentor review request",
  "Demo day submission",
];

export default function LaunchPage() {
  return (
    <main className="p-4 md:p-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-[#ECECF2] bg-[#221F35] p-8 text-white shadow-sm">
        <div className="absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-[#FF3864]/30 blur-3xl" />
        <div className="absolute bottom-[-90px] left-[-70px] h-60 w-60 rounded-full bg-[#89DFE7]/25 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/85">
              <Rocket size={16} />
              Launch
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              Turn projects into startup-ready work that people can see.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Launch is where Hatchloom becomes real. Learners move from idea to
              proof-of-work, pitch decks, mentor feedback, and demo-day readiness.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Pitch deck", "Business model", "Feedback", "Demo day"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="rounded-3xl bg-white p-5 text-[#221F35] shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3864] text-white">
                  <Trophy size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#7B8194]">
                    Demo day status
                  </p>
                  <h3 className="text-lg font-bold">Flavour Butter Co.</h3>
                </div>
              </div>

              <div className="space-y-3">
                {["Idea validated", "Canvas started", "Pitch deck 70% done"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3"
                    >
                      <span className="text-sm font-bold text-[#221F35]">
                        {item}
                      </span>
                      <BadgeCheck size={18} className="text-[#1F9AD6]" />
                    </div>
                  )
                )}
              </div>

              <button className="mt-5 w-full rounded-full bg-[#221F35] px-5 py-3 text-sm font-bold text-white">
                Continue launch plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-4">
        {launchSteps.map(({ title, text, icon: Icon, color }) => (
          <div
            key={title}
            className="rounded-[1.6rem] border border-[#ECECF2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-black text-[#221F35]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#5F667A]">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.6rem] border border-[#ECECF2] bg-white p-6 shadow-sm">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF1F5] px-4 py-2 text-sm font-bold text-[#FF3864]">
            <Sparkles size={16} />
            Startup Kit
          </div>

          <h2 className="text-2xl font-bold text-[#221F35]">
            Everything needed before demo day.
          </h2>

          <div className="mt-5 space-y-3">
            {startupKit.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3"
              >
                <span className="text-sm font-bold text-[#221F35]">{item}</span>
                <ArrowRight size={16} className="text-[#BBC0B7]" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-[#ECECF2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF9FB] text-[#1F9AD6]">
              <TrendingUp size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#221F35]">
                Launch readiness
              </h2>
              <p className="text-sm text-[#7B8194]">
                Track how close the learner is to presenting.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {[
              ["Problem clarity", "85%"],
              ["Customer research", "70%"],
              ["Pitch deck", "62%"],
              ["Mentor feedback", "45%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-bold text-[#221F35]">{label}</p>
                  <p className="text-sm font-bold text-[#FF3864]">{value}</p>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#F1F2F6]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FF3864] via-[#FB8500] to-[#89DFE7]"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 rounded-full bg-[#FF3864] px-6 py-3 text-sm font-bold text-white shadow-lg">
            Submit for review
          </button>
        </div>
      </section>
    </main>
  );
}