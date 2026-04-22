import React from "react";
import {
  Handshake,
  Users,
  MessageCircle,
  CalendarDays,
  UserPlus,
  Star,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const mentors = [
  {
    name: "Sarah Chen",
    role: "Startup Mentor",
    focus: "Pitching, product ideas, confidence",
    rating: "4.9",
  },
  {
    name: "Marcus Lee",
    role: "Product Designer",
    focus: "Branding, UI, customer research",
    rating: "4.8",
  },
  {
    name: "Amara Cole",
    role: "Young Founder Coach",
    focus: "Team building, launch strategy",
    rating: "5.0",
  },
];

const groups = [
  {
    title: "Teen Founders Circle",
    members: "1.2k members",
    icon: Users,
    color: "bg-[#FFF1F5] text-[#FF3864]",
  },
  {
    title: "Pitch Practice Room",
    members: "540 members",
    icon: MessageCircle,
    color: "bg-[#EEF9FB] text-[#1F9AD6]",
  },
  {
    title: "Design & Branding Crew",
    members: "860 members",
    icon: GraduationCap,
    color: "bg-[#FFF7E8] text-[#FB8500]",
  },
];

export default function ConnectPage() {
  return (
    <main className="p-4 md:p-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-[#ECECF2] bg-white p-8 shadow-sm">
        <div className="absolute right-[-90px] top-[-90px] h-60 w-60 rounded-full bg-[#FF3864]/20 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-70px] h-56 w-56 rounded-full bg-[#89DFE7]/30 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1F9AD6]/20 bg-[#EEF9FB] px-4 py-2 text-sm font-bold text-[#1F9AD6]">
              <Handshake size={16} />
              Connect
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] text-[#221F35] md:text-6xl">
              Meet mentors, teammates, and builders who help ideas move faster.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F667A]">
              Connect gives Hatchloom its community. Learners can find people to
              build with, get feedback, ask questions, and grow through real
              collaboration.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Mentors", "Teams", "Community rooms", "Live sessions"].map(
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
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#221F35] text-white">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#7B8194]">Live today</p>
                  <h3 className="text-lg font-bold text-[#221F35]">
                    Pitch Feedback Session
                  </h3>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-[#FFF1F5] p-3">
                  <p className="text-lg font-bold text-[#FF3864]">24</p>
                  <p className="text-xs text-[#7B8194]">spots</p>
                </div>
                <div className="rounded-2xl bg-[#EEF9FB] p-3">
                  <p className="text-lg font-bold text-[#1F9AD6]">6 PM</p>
                  <p className="text-xs text-[#7B8194]">time</p>
                </div>
                <div className="rounded-2xl bg-[#FFF7E8] p-3">
                  <p className="text-lg font-bold text-[#FB8500]">Live</p>
                  <p className="text-xs text-[#7B8194]">online</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-full bg-[#FF3864] px-5 py-3 text-sm font-bold text-white">
                Reserve spot
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-3">
        {groups.map(({ title, members, icon: Icon, color }) => (
          <div
            key={title}
            className="rounded-[1.6rem] border border-[#ECECF2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#221F35]">{title}</h3>
            <p className="mt-2 text-sm text-[#7B8194]">{members}</p>
            <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF3864]">
              Join room <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-[1.6rem] border border-[#ECECF2] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#221F35]">
              Recommended Mentors
            </h2>
            <p className="mt-1 text-sm text-[#7B8194]">
              Match with mentors based on your goals and interests.
            </p>
          </div>
          <button className="hidden rounded-full border border-[#ECECF2] px-5 py-2 text-sm font-bold text-[#221F35] md:block">
            View all
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-3xl border border-[#ECECF2] bg-[#F8FAFC] p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#221F35] text-white">
                  <UserPlus size={21} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#221F35]">{mentor.name}</h3>
                  <p className="text-sm text-[#7B8194]">{mentor.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[#FB8500]">
                  <Star size={15} fill="currentColor" />
                  <span className="text-xs font-bold">{mentor.rating}</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#5F667A]">
                {mentor.focus}
              </p>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#221F35]">
                Request mentor <CalendarDays size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}