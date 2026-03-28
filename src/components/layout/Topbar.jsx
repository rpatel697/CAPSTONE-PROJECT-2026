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
      <div className="flex items-center gap-2.5">
        <div className="text-xl font-black tracking-tight">
          <span className="text-[#FF3864]">hatch</span>
          <span className="text-[#2D2A3A]">loom</span>
        </div>

        <span className="rounded-full bg-[#DDF5E7] px-4 py-1 text-xs font-semibold text-[#2FAF62]">
          Student
        </span>

        <span className="text-sm font-semibold text-[#2D2A3A]">
          Ridgewood Academy
        </span>
      </div>

      <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-[#5F667A]">
        <div className="flex items-center gap-2">
          <Compass size={16} className="text-[#7A6FA0]" />
          <span>Explore</span>
        </div>

        <div className="flex items-center gap-2">
          <Link2 size={18} className="text-[#B497BD]" />
          <span>Connect</span>
        </div>

        <div className="flex items-center gap-2">
          <Rocket size={16} className="text-[#FF6B8A]" />
          <span>Launch</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full border border-[#FFD7A6] bg-[#FFF4E4] px-3 py-1.5 text-xs font-bold text-[#F28A00]">
          <Flame size={16} />
          <span>18-day streak</span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#CDEFF4] bg-[#EAFBFF] px-3 py-1.5 text-xs font-bold text-[#1F9DBB]">
          <Zap size={16} />
          <span>2,450 XP</span>
        </div>

        <div className="relative flex h-9 w-9 border border-[#E6CFF3] items-center justify-center rounded-full bg-[#F7F2FA]">
          <Mail size={16} className="text-[#8B79A8]" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF3864] text-[9px] font-bold text-white">
            3
          </span>
        </div>

        <div className="relative flex h-9 w-9 border border-[#F1D7A6] items-center justify-center rounded-full bg-[#FFF7E8]">
          <Bell size={17} className="text-[#F2A100]" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF3864] text-[9px] font-bold text-white">
            3
          </span>
        </div>

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