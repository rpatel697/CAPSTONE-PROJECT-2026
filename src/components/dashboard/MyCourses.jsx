import React from "react";
import { BookOpen, Sparkles } from "lucide-react";

export default function MyCourses() {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[#ECECF2] bg-white shadow-sm">
      <div className="relative border-b border-[#ECECF2] px-6 py-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EEF7FF] via-[#F8F5FF] to-[#FFF5F7] opacity-80" />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4C7ECF] shadow-sm">
              <BookOpen size={24} />
            </div>

            <div>
              <h1 className="text-[28px] font-black tracking-[-0.02em] text-[#221F35]">
                My Courses
              </h1>
              <p className="mt-1 text-sm text-[#7B8194]">
                Track your current learning, completed courses, badges, and recent activity.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full bg-[#F3F7FF] px-4 py-2 text-sm font-semibold text-[#4C7ECF]">
            <Sparkles size={16} />
            <span>7 total courses</span>
          </div>
        </div>
      </div>

      <div className="space-y-8 p-6 md:p-8">
        {/* In Progress */}
        <div>
          <h3 className="text-sm font-black text-[#221F35]">In Progress (3)</h3>
          <div className="mt-4 space-y-4">
            {[
              ["Design Thinking 101", "Block 2 of 6 • Sustainable Packaging", 2, "In Progress", "🎨"],
              ["Business Model Canvas", "Block 4 of 6 • Map a Real Business Model", 4, "In Progress", "🗺️"],
              ["Financial Literacy 103", "Block 3 of 5 • Reading Financial Statements", 3, "In Progress", "💸"],
            ].map(([title, subtitle, progress, status, icon]) => (
              <CourseCard
                key={title}
                title={title}
                subtitle={subtitle}
                progress={progress}
                total={6}
                status={status}
                icon={icon}
                tone="progress"
              />
            ))}
          </div>
        </div>

        {/* Completed */}
        <div>
          <h3 className="text-sm font-black text-[#221F35]">Completed (2)</h3>
          <div className="mt-4 space-y-4">
            {[
              ["Financial Literacy 101", "All 5 blocks complete", 5, 5, "Complete", "💸"],
              ["Financial Literacy 102", "All 4 blocks complete", 4, 4, "Complete", "💡"],
            ].map(([title, subtitle, progress, total, status, icon]) => (
              <CourseCard
                key={title}
                title={title}
                subtitle={subtitle}
                progress={progress}
                total={total}
                status={status}
                icon={icon}
                tone="complete"
              />
            ))}
          </div>
        </div>

        {/* Not Started */}
        <div>
          <h3 className="text-sm font-black text-[#221F35]">Not Started (2)</h3>
          <div className="mt-4 space-y-4">
            {[
              ["From Idea to Launch", "6 blocks • Starts with Idea Validation", "🚀"],
              ["Negotiation Skills", "5 blocks • Starts with The Art of the Deal", "🧠"],
            ].map(([title, subtitle, icon]) => (
              <CourseCard
                key={title}
                title={title}
                subtitle={subtitle}
                progress={0}
                total={5}
                status="Not Started"
                icon={icon}
                tone="idle"
              />
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="mt-6">
          <h3 className="mb-3 text-[13px] font-semibold text-[#221F35]">
            Badges Earned (6)
          </h3>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Entrepreneur’s Choice", "Feb 17", "🏆"],
              ["Problem Solver", "Feb 14", "🎯"],
              ["Quick Learner", "Feb 8", "⚡"],
              ["First Challenge", "Feb 5", "🌟"],
              ["Design Thinker", "Feb 10", "💡"],
              ["BMC Builder", "Feb 12", "📊"],
            ].map(([title, date, icon]) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-xl border border-[#ECECF2] bg-white p-3 text-center transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md"
              >
                <div className="text-lg">{icon}</div>
                <p className="mt-1 text-[13px] font-medium text-[#26233A]">
                  {title}
                </p>
                <p className="text-[10px] text-[#7B8194]">{date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6">
          <h3 className="mb-3 text-[13px] font-semibold text-[#221F35]">
            Recent Activity
          </h3>

          <div>
            {[
              ["🏆", "Earned Entrepreneur’s Choice in Design Thinking 101", "Today, 9:14 AM"],
              ["📝", "Submitted Sustainable Packaging Redesign solution", "Yesterday, 4:30 PM"],
              ["🎤", "Attended Pitch Day live session with Sarah Chen", "Yesterday, 3:00 PM"],
              ["📊", "BMC review feedback available for Flavour Butter Co.", "Feb 15, 11:30 AM"],
              ["✅", "Completed Financial Literacy 102 — all 4 blocks done", "Feb 10, 2:15 PM"],
            ].map(([icon, text, time], i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8F4F7] text-sm">
                  {icon}
                </div>

                <div
                  className={`flex-1 py-3 ${
                    i !== arr.length - 1 ? "border-b border-[#ECECF2]" : ""
                  }`}
                >
                  <p className="text-[13px] text-[#26233A]">{text}</p>
                  <p className="mt-1 text-[10px] text-[#7B8194]">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  title,
  subtitle,
  progress,
  total,
  status,
  icon,
  tone,
}) {
  const statusStyles = {
    progress: "bg-[#FFF4E4] text-[#F28A00]",
    complete: "bg-[#E8F8EE] text-[#2FAF62]",
    idle: "bg-[#F2F4F8] text-[#9AA0B2]",
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#ECECF2] p-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#F7EFF2] text-xl">
          {icon}
        </div>
        <div>
          <h4 className="text-[14px] font-black text-[#221F35]">{title}</h4>
          <p className="text-[11px] text-[#72788C]">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 self-end lg:self-auto">
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${
                i < progress ? "bg-[#2FAF62]" : "bg-[#E7E8EE]"
              }`}
            />
          ))}
        </div>
        <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${statusStyles[tone]}`}>
          {status}
        </span>
      </div>
    </div>
  );
}