import Topbar from "./components/layout/Topbar"
import Sidebar from "./components/layout/Sidebar"
import ProfileHeader from "./components/dashboard/ProfileHeader"
import { useState } from "react";
import GrowthSection from "./components/dashboard/GrowthSection";
import React from "react";
import MyWork from "./components/dashboard/MyWork";
import Credentials from "./components/dashboard/Credentials";
export default function HatchloomDashboardPlaceholder() {
 const [activeTab, setActiveTab] = useState("courses");
 const [activePage, setActivePage] = useState("profile");
  
 return ( 
      <div className="min-h-screen bg-[#F6F7FB]">

    {/* 🔴 TOPBAR (FULL WIDTH — ROOF) */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#ECECF2]">
      <Topbar />
    </div>

    {/* 🔵 BODY */}
    <div className="flex pt-[80px]">

      {/* SIDEBAR */}
     <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="ml-[240px] w-full h-[calc(100vh-80px)] overflow-y-auto">

      {/* MAIN CONTENT */}
      {activePage === "profile" && (
        <main className="p-4 md:p-8 space-y-5">
          <ProfileHeader />
          <GrowthSection />

          <section className="rounded-3xl border border-[#ECECF2] bg-white overflow-hidden">
            <div className="flex items-center gap-6 border-b border-[#ECECF2] px-8">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`relative pb-4 pt-5 text-[15px] font-semibold transition-all duration-200 ${
                    activeTab === "courses"
                      ? "text-[#FF3864]"
                      : "text-[#7B8194] hover:text-[#3F4454]"
                  }`}
                >
                  My Courses
                  {activeTab === "courses" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#FF3864]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("work")}
                  className={`relative pb-4 pt-5 text-[15px] font-semibold transition-all duration-200 ${
                    activeTab === "work"
                      ? "text-[#FF3864]"
                      : "text-[#7B8194] hover:text-[#3F4454]"
                  }`}
                >
                  My Work
                  {activeTab === "work" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#FF3864]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("credentials")}
                  className={`relative pb-4 pt-5 text-[15px] font-semibold transition-all duration-200 ${
                    activeTab === "credentials"
                      ? "text-[#FF3864]"
                      : "text-[#7B8194] hover:text-[#3F4454]"
                  }`}
                >
                  Credentials
                 {activeTab === "credentials" && (
                 <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#FF3864]" />
                 )}
                 
                </button>
              </div>


                              {activeTab === "courses" && (
                <div className="space-y-8 p-8">
                 
                    
                <div>
                  <h3 className="text-sm font-black text-[#221F35]">In Progress (3)</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      ["Design Thinking 101", "Block 2 of 6 • Sustainable Packaging", 2, "In Progress", "🎨"],
                      ["Business Model Canvas", "Block 4 of 6 • Map a Real Business Model", 4, "In Progress", "🗺️"],
                      ["Financial Literacy 103", "Block 3 of 5 • Reading Financial Statements", 3, "In Progress", "💸"],
                    ].map(([title, subtitle, progress, status, icon]) => (
                      <CourseCard key={title} title={title} subtitle={subtitle} progress={progress} total={6} status={status} icon={icon} tone="progress" />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#221F35]">Completed (2)</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      ["Financial Literacy 101", "All 5 blocks complete", 5, 5, "Complete", "💸"],
                      ["Financial Literacy 102", "All 4 blocks complete", 4, 4, "Complete", "💡"],
                    ].map(([title, subtitle, progress, total, status, icon]) => (
                      <CourseCard key={title} title={title} subtitle={subtitle} progress={progress} total={total} status={status} icon={icon} tone="complete" />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#221F35]">Not Started (2)</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      ["From Idea to Launch", "6 blocks • Starts with Idea Validation", "🚀"],
                      ["Negotiation Skills", "5 blocks • Starts with The Art of the Deal", "🧠"],
                    ].map(([title, subtitle, icon]) => (
                      <CourseCard key={title} title={title} subtitle={subtitle} progress={0} total={5} status="Not Started" icon={icon} tone="idle" />
                    ))}
                  </div>
                </div>
              </div>

              )}

            {activeTab === "work" && <MyWork />}

            {activeTab === "credentials" && <Credentials />  
            }
              
             

            </section>

            {/* BADGES EARNED */}
<div className="mt-6">
  <h3 className="text-[13px] font-semibold text-[#221F35] mb-3">
    Badges Earned (6)
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
{/* Badges Earned ends here */}


{/* RECENT ACTIVITY */}
<div className="mt-6">
  <h3 className="text-[13px] font-semibold text-[#221F35] mb-3">
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
        {/* Recent Activity ends here */}
</main>
      )}

           {activePage === "home" && (
  <div className="flex min-h-[calc(100vh-180px)] items-center justify-center p-8">
    <div className="w-full max-w-xl rounded-3xl border border-[#ECECF2] bg-white p-10 text-center shadow-sm">
      <h2 className="text-xl font-bold text-[#221F35]">Home</h2>
      <p className="mt-3 text-sm text-[#7B8194]">
        Home page coming soon.
      </p>
    </div>
  </div>
)}

       {activePage === "wallet" && (
  <div className="flex min-h-[calc(100vh-180px)] items-center justify-center p-8">
    <div className="w-full max-w-xl rounded-3xl border border-[#ECECF2] bg-white p-10 text-center shadow-sm">
      <h2 className="text-xl font-bold text-[#221F35]">Credential Wallet</h2>
      <p className="mt-3 text-sm text-[#7B8194]">
        Credential Wallet page coming soon.
      </p>
    </div>
  </div>
)}

       {activePage === "settings" && (
  <div className="flex min-h-[calc(100vh-180px)] items-center justify-center p-8">
    <div className="w-full max-w-xl rounded-3xl border border-[#ECECF2] bg-white p-10 text-center shadow-sm">
      <h2 className="text-xl font-bold text-[#221F35]">Settings</h2>
      <p className="mt-3 text-sm text-[#7B8194]">
        Settings page coming soon.
      </p>
    </div>
  </div>
)}

</div>
</div>
</div>
  )
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
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#ECECF2] p-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-[7px] bg-[#F7EFF2] text-xl">{icon}</div>
        <div>
          <h4 className="text-[13px] font-black text-[#221F35]">{title}</h4>
          <p className="text-[10px] text-[#72788C]">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 self-end lg:self-auto">
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${i < progress ? tone === "complete" ? "bg-[#2FAF62]" : "bg-[#2FAF62]" : "bg-[#E7E8EE]"}`}
            />
          ))}
        </div>
        <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${statusStyles[tone]}`}>{status}</span>
      </div>
    </div>
  )
}
