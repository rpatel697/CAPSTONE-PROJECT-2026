import {
  Compass,
  Link2,
  Rocket,
  Flame,
  Zap,
  Mail,
  Bell,
} from "lucide-react"

export default function Topbar() {
  return (
    <div className="h-16 border-b border-[#ECECF2] flex items-center justify-between px-8 w-full bg-white">
      <div className="flex items-center gap-5">
        <img
              src="/hatch.png"
              alt="Hatchloom logo"
              className="h-8 w-auto object-contain"
            />

        <span className="rounded-full bg-[#DDF5E7] px-4 py-1 text-xs font-semibold text-[#2FAF62]">
          Student
        </span>

        <span className="text-sm font-semibold text-[#2D2A3A]">
          Ridgewood Academy
        </span>
      </div>

      <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-[#5F667A]">
        <button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#F4F0FF] hover:text-[#FB497D] hover:-translate-y-[1px] cursor-pointer">
  <Compass size={16} className="text-[#7A6FA0]" />
  <span>Explore</span>
</button>

<button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#F4F0FF] hover:text-[#FB497D] hover:-translate-y-[1px] cursor-pointer">
  <Link2 size={18} className="text-[#B497BD]" />
  <span>Connect</span>
</button>

<button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#F4F0FF] hover:text-[#FB497D] hover:-translate-y-[1px] cursor-pointer">
  <Rocket size={16} className="text-[#FB497D]" />
  <span>Launch</span>
</button>
      </div>

      <div className="flex items-center gap-3">
  <button className="rounded-full border border-[#F5C67A] bg-[#FFF6E8] px-4 py-2 text-sm font-semibold text-[#F39A1E] transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
    <span className="flex items-center gap-2">
      <Flame size={16} />
      <span>18-day streak</span>
    </span>
  </button>

  <button className="rounded-full bg-[#EAF8FF] px-4 py-2 text-sm font-semibold text-[#1F9AD6] transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
    <span className="flex items-center gap-2">
      <Zap size={16} />
      <span>2,450 XP</span>
    </span>
  </button>

  

  <button className="group bell-hover relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3E8] transition-all duration-200 hover:scale-110 hover:bg-[#545454]">
  <Bell className="bell-icon text-[#F39A1E] transition-all duration-200 group-hover:text-[#F6B53F]" size={18} />
</button>

        <div className="flex items-center gap-3 rounded-full bg-[#F7F7FB] px-2.5 py-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D2A3A] text-xl">
            🦊
          </div>
          <span className="hidden lg:block text-xs font-semibold text-[#2D2A3A]">
            FireFox
          </span>
        </div>
      </div>
      
    </div>
  )
}