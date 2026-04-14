import ProfileHeader from "./ProfileHeader";
import GrowthSection from "./GrowthSection";
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  Palette,
  Laptop,
  Clapperboard,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="p-4 md:p-8 space-y-5">
      <ProfileHeader />

      <section className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-3xl border border-[#ECECF2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF9FB] text-[#1F9AD6]">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-xl font-black text-[#221F35]">Education</h2>
          </div>

          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-[#F8FAFC] px-4 py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF9FB] text-[#1F9AD6]">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#221F35]">Ridgewood Academy</p>
                  <p className="mt-1 text-sm text-[#5F667A]">Grade 8 • Current Student</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] px-4 py-4">
              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1F5]">
                <img
                    src="/hatchloom-egg-transparent.png"
                    alt="Hatchloom egg icon"
                    className="h-5 w-5 object-contain"
                />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#221F35]">Hatchloom Learning Track</p>
                  <p className="mt-1 text-sm text-[#5F667A]">
                    Entrepreneurship, Design Thinking, and Problem Solving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#ECECF2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF1F5] text-[#FF3864]">
              <Lightbulb size={20} />
            </div>
            <h2 className="text-xl font-black text-[#221F35]">Skills</h2>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              {
                label: "Solving creative problems",
                icon: Lightbulb,
                bg: "bg-[#FFF1F5]",
                text: "text-[#FF3864]",
              },
              {
                label: "Designing & visual thinking",
                icon: Palette,
                bg: "bg-[#FFF7E8]",
                text: "text-[#FB8500]",
              },
              {
                label: "Using digital tools & tech",
                icon: Laptop,
                bg: "bg-[#EEF9FB]",
                text: "text-[#1F9AD6]",
              },
            ].map(({ label, icon: Icon, bg, text }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${bg} ${text}`}
              >
                <Icon size={16} />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#ECECF2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF9FB] text-[#1F9AD6]">
              <Palette size={20} />
            </div>
            <h2 className="text-xl font-black text-[#221F35]">Interests</h2>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              {
                label: "Design & Creativity",
                icon: Palette,
                bg: "bg-[#FFF1F5]",
                text: "text-[#FF3864]",
              },
              {
                label: "Tech & Coding",
                icon: Laptop,
                bg: "bg-[#EEF9FB]",
                text: "text-[#1F9AD6]",
              },
              {
                label: "Media & Storytelling",
                icon: Clapperboard,
                bg: "bg-[#F4F0FF]",
                text: "text-[#8B63D9]",
              },
            ].map(({ label, icon: Icon, bg, text }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${bg} ${text}`}
              >
                <Icon size={16} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

     {/*BADGES EARNED */}   
        <div className="mt-6">
        <h3 className="text-sm font-black text-[#221F35] mb-3">Badges Earned (6)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
                className="rounded-xl border border-[#ECECF2] bg-white p-3 flex flex-col items-center text-center"
            >
                <div className="text-lg">{icon}</div>

                <p className="text-[13px] font-medium text-[#26233A] mt-1">
                {title}
                </p>

                <p className="text-[10px] text-[#7B8194]">{date}</p>
            </div>
            ))}
        </div>
        </div>
        
       
         

                {/* RECENT ACTIVITY*/}
                <div className="mt-6">
                <h3 className="text-sm font-black text-[#221F35] mb-3">Recent Activity
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
                 

      <GrowthSection />
    </main>
  );
}