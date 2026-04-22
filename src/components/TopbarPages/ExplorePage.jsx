import React from "react";
import {
  Telescope,
  Search,
  Lightbulb,
  Trophy,
  BookOpen,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";

const exploreCards = [
  {
    title: "Startup Idea Lab",
    text: "Discover business ideas based on your interests, skills, and real problems around you.",
    icon: Lightbulb,
    tag: "Ideas",
    color: "bg-[#FFF1F5] text-[#FF3864]",
  },
  {
    title: "Challenge Arena",
    text: "Join weekly startup challenges, pitch tasks, and creative competitions.",
    icon: Trophy,
    tag: "Compete",
    color: "bg-[#FFF7E8] text-[#FB8500]",
  },
  {
    title: "Learning Tracks",
    text: "Explore short courses in entrepreneurship, design thinking, branding, coding, and pitching.",
    icon: BookOpen,
    tag: "Learn",
    color: "bg-[#EEF9FB] text-[#1F9AD6]",
  },
];

const opportunities = [
  "Build a campus startup in 7 days",
  "Design a product for teens in your city",
  "Create a pitch deck for a real problem",
  "Join a beginner founder bootcamp",
];

export default function ExplorePage() {
  return (
    <main className="p-4 md:p-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-[#ECECF2] bg-white p-8 shadow-sm">
        <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#89DFE7]/30 blur-3xl" />
        <div className="absolute bottom-[-90px] left-[-70px] h-56 w-56 rounded-full bg-[#FF3864]/20 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF3864]/20 bg-[#FFF1F5] px-4 py-2 text-sm font-bold text-[#FF3864]">
              <Telescope size={16} />
              Explore Hatchloom
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-[#221F35] sm:text-5xl lg:text-6xl">
              Find ideas, challenges, and learning paths that match your ambition.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F667A]">
              Explore is where learners discover what to build next. It connects
              interests to startup ideas, challenges, courses, and opportunities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Startup ideas", "Courses", "Challenges", "Opportunities"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#ECECF2] bg-white px-4 py-2 text-sm font-semibold text-[#5F667A] shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ECECF2] bg-[#F8FAFC]/80 p-5">
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Search size={18} className="text-[#1F9AD6]" />
              <span className="text-sm font-semibold text-[#7B8194]">
                Search ideas, skills, challenges...
              </span>
            </div>

            <div className="space-y-3">
              {opportunities.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF7E8] text-[#FB8500]">
                      <Flame size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#221F35]">{item}</p>
                      <p className="text-xs text-[#7B8194]">
                        Opportunity #{index + 1}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={17} className="text-[#BBC0B7]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-3">
        {exploreCards.map(({ title, text, icon: Icon, tag, color }) => (
          <div
            key={title}
            className="rounded-[1.6rem] border border-[#ECECF2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
              >
                <Icon size={22} />
              </div>
              <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-bold text-[#7B8194]">
                {tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#221F35]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#5F667A]">{text}</p>

            <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF3864]">
              Explore now <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-[1.6rem] border border-[#ECECF2] bg-[#221F35] p-6 text-white shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
              <Sparkles size={16} />
              Recommended for you
            </div>
            <h2 className="mt-4 text-2xl font-bold">
              Start with “Design Thinking 101”
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
              A beginner-friendly track that helps learners turn everyday
              problems into startup-ready ideas.
            </p>
          </div>

          <button className="rounded-full bg-[#FF3864] px-6 py-3 text-sm font-bold text-white shadow-lg">
            Open track
          </button>
        </div>
      </section>
    </main>
  );
}