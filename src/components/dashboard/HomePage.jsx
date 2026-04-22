import React from "react";
import {
  Lightbulb,
  Users,
  Trophy,
  Briefcase,
  Star,
  Rocket,
} from "lucide-react";

const features = [
  {
    title: "Discover your lane",
    text: "Match interests, skills, and ambition into startup ideas that actually fit you.",
    icon: Lightbulb,
  },
  {
    title: "Build with real people",
    text: "Meet teammates, mentors, and creators who make the journey feel alive, not lonely.",
    icon: Users,
  },
  {
    title: "Compete for impact",
    text: "Join challenges, demo days, and competitions that turn learning into momentum.",
    icon: Trophy,
  },
  {
    title: "Launch proof-of-work",
    text: "Ship projects, earn credibility, and create a portfolio that speaks before you do.",
    icon: Briefcase,
  },
];

const stats = [
  { value: "12k+", label: "Active learners" },
  { value: "3.8k", label: "Project teams formed" },
  { value: "540+", label: "Challenges completed" },
  { value: "1.2k", label: "Mentor sessions" },
];

export default function HomePage() {
  return (
    <div className="min-h-full rounded-[32px] bg-[#FFFDF8] p-6 text-[#545454] md:p-8">
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#FF3864]/20 bg-white px-5 py-2 text-sm font-medium text-[#545454] shadow-sm">
            The youth startup platform that feels alive
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#221F35] sm:text-6xl">
            Where ideas{" "}
            <span className="bg-gradient-to-r from-[#FF3864] via-[#FB8500] to-[#89DFE7] bg-clip-text text-transparent">
              hatch
            </span>
            , creators connect, and startups begin.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#545454]">
            Hatchloom helps ambitious students and young builders discover their
            strengths, meet the right people, join exciting startup challenges,
            and turn curiosity into real proof-of-work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#221F35] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(34,31,53,0.22)] transition duration-300 hover:-translate-y-0.5">
              Start your journey
            </button>

            <button className="rounded-full border border-[#BBC0B7] bg-white px-7 py-4 text-sm font-semibold text-[#221F35] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#89DFE7] hover:bg-[#89DFE7]/10">
              Watch the vibe
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Startup challenges",
              "Mentor matching",
              "Skill-building tracks",
              "Portfolio wins",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#BBC0B7]/40 bg-white px-4 py-2 text-sm text-[#545454] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
              alt="Startup ideas"
              className="h-48 w-full rounded-[1.8rem] object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
              alt="Team brainstorming"
              className="mt-10 h-56 w-full rounded-[1.8rem] object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Students collaborating"
              className="h-56 w-full rounded-[1.8rem] object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80"
              alt="Creative startup work"
              className="mt-[-20px] h-48 w-full rounded-[1.8rem] object-cover shadow-lg"
            />
          </div>

          <div className="absolute -bottom-8 left-8 rounded-3xl border border-[#BBC0B7]/35 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#221F35] p-3 text-white">
                <Rocket size={20} />
              </div>
              <div>
                <p className="text-xs text-[#545454]/70">Live challenge</p>
                <p className="font-semibold text-[#221F35]">
                  Build a campus startup in 7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[#BBC0B7]/35 bg-white p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-black text-[#221F35]">{item.value}</div>
            <div className="mt-2 text-sm text-[#545454]">{item.label}</div>
          </div>
        ))}
      </section>

      <section className="mt-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#FF3864]/20 bg-white px-5 py-2 text-sm font-medium text-[#545454]">
            What makes Hatchloom different
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#221F35] sm:text-5xl">
            Not just learning. Not just networking. A launchpad.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#545454]">
            Every part of the experience is designed to move people from
            interest to identity, and from identity to execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-[#BBC0B7]/35 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#221F35] text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#221F35]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#545454]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}