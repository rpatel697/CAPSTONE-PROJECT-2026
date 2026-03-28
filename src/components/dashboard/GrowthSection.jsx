 export default function GrowthSection() {
  return (
 <section className="rounded-3xl bg-[#F6F7FB] p-6 border border-[#ECECF2]">
              <h2 className="text-[15px] font-black font-semibold text-[#221F35]">My Growth</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  ["Enterprise Ecosystem", "Challenger", ["#2FAF62", "#3E92E8", "#FB8500"]],
                  ["Entrepreneurship & Innovation", "Explorer", ["#2FAF62", "#3E92E8"]],
                  ["Running a Business", "Rookie", ["#2FAF62"]],
                  ["Skills to Succeed", "Pro", ["#2FAF62", "#3E92E8", "#FB8500", "#A855F7"]],
                ].map(([title, badge, dots]) => (
                  <div key={title} className="rounded-2xl border border-[#E7E8EE] bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[13px] font-bold text-[#26233A]">{title}</h3>
                        <div className="mt-2 flex items-center gap-1">
                          {dots.map((c, i) => <span key={i} className="h-3 w-3 rounded-full" style={{ backgroundColor: c }} />)}
                          {Array.from({ length: 5 - dots.length }).map((_, i) => <span key={`g-${i}`} className="h-3 w-3 rounded-full bg-[#E7E8EE]" />)}
                        </div>
                      </div>
                  <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        badge === "Rookie"
                          ? "bg-[#EAF8EF] text-[#2FAF62]"
                          : badge === "Explorer"
                          ? "bg-[#EAF4FF] text-[#3E92E8]"
                          : badge === "Challenger"
                          ? "bg-[#FFF4E4] text-[#F28A00]"
                          : "bg-[#F4EAFE] text-[#A855F7]"
                          }`}
                       >{badge}
                  </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
    )
}
