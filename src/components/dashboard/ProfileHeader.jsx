  export default function ProfileHeader() {
  return (
  <section className="rounded-3xl border border-[#ECECF2] bg-white overflow-hidden">
              <div className="p-8 flex flex-col xl:flex-row gap-6 xl:items-center xl:justify-between">
                <div className="flex gap-6 items-start">
                  <div className="h-24 w-24 rounded-full bg-[#2D2A3A] ring-4 ring-[#F8DCE4] flex items-center justify-center text-5xl">🦊</div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h1 className="text-2xl font-black tracking-tight text-[#221F35]">FireFox</h1>
                      <button className="rounded-xl border border-[#ECECF2] px-4 py-2 text-sm font-semibold text-[#5F667A]">✏️ Edit</button>
                    </div>
                    <p className="mt-1 text-sm text-[#5F667A]">@firefox_hl</p>
                    <p className="mt-3 text-sm max-w-2xl text-[#43485A]">Butter entrepreneur. Design thinker. Grade 8 at Ridgewood Academy.</p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6D7388]">
                      <span>👤 Alex Johnson</span>
                      <span>📧 a***@***.com</span>
                      <span>📱 *** *** ****</span>
                      <span>📍 Calgary, AB</span>
                    </div>
                    <p className="mt-3 text-xs text-[#8A90A3]">Member since Jan 2026</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 border-t border-[#ECECF2]">
                {[
                  ["4", "Real Life Problems Solved"],
                  ["2 of 5", "Courses Complete"],
                  ["3", "Credentials"],
                  ["12", "Connections"],
                  ["1 founded • 3 involved", "Ventures"],
                ].map(([value, label]) => (
                  <div key={label} className="px-6 py-3 border-r last:border-r-0 border-[#ECECF2] text-center">
                    <div className="text-[13px] font-black text-[#221F35]">{value}</div>
                    <div className="mt-1 text-[10px] font-medium text-[#6F7589]">{label}</div>
                  </div>
                ))}
              </div>
            </section>
    )
}
