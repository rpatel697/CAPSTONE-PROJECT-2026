import { Compass, Handshake, Rocket, Flame, Zap, Mail, Bell } from "lucide-react";

export default function Topbar() {
  return (
   <div className="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center border-b border-[#ECECF2] bg-white px-8">
        <div className="flex items-center justify-start">
            <img
              src="/hatch.png"
              alt="Hatchloom logo"
              className="h-10 w-auto object-contain"
            />
        </div>

        <div className="flex items-center justify-center gap-2">
          <button className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#F2F7FF] hover:text-[#4C7ECF] hover:-translate-y-[1px] cursor-pointer">
            <Compass className="h-[17px] w-[17px] text-[#7C8DB5] transition-all duration-200 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#4C7ECF]" />
            <span>Explore</span>
          </button>

          <button className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#F6F0FF] hover:text-[#8B63D9] hover:-translate-y-[1px] cursor-pointer">
            <Handshake className="h-[17px] w-[17px] text-[#A48AC7] transition-all duration-200 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-[#8B63D9]" />
            <span>Connect</span>
          </button>

          <button className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#FFF1F5] hover:text-[#FB497D] hover:-translate-y-[1px] cursor-pointer">
            <Rocket className="h-[17px] w-[17px] text-[#FB497D] transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-[2px] group-hover:rotate-12" />
            <span>Launch</span>
          </button>
        </div>
  
        <div className="flex items-center justify-end gap-2">
            <button className="rounded-full bg-[#FFF6E8] px-4 py-2 text-xs font-semibold text-[#F39A1E] transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
              <span className="flex items-center gap-2">
                <Flame size={16} />
                <span>18-day streak</span>
                </span>
            </button>

            <button className="rounded-full bg-[#EAF8FF] px-4 py-2 text-xs font-semibold text-[#1F9AD6] transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
              <span className="flex items-center gap-2">
                <Zap size={16} />
                <span>2,450 XP</span>
              </span>
            </button>

            <button className="group mail-hover relative flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF9FB] transition-all duration-200 hover:scale-110 hover:bg-[#545454]">
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF3864] text-[9px] font-bold text-white">
              3
            </span>
            <Mail
              className="mail-icon text-[#4FBCC7] transition-all duration-200 group-hover:text-[#89DFE7]"
              size={17}
            />
          </button>

            <button className="group bell-hover relative flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3E8] transition-all duration-200 hover:scale-110 hover:bg-[#545454]">
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF3864] text-[9px] font-bold text-white">
              3
            </span>
            <Bell
              className="bell-icon text-[#F39A1E] transition-all duration-200 group-hover:text-[#F6B53F]"
              size={17}
            />
          </button>

          <div className="flex items-center gap-3 rounded-full bg-[#F7F7FB] px-2.5 py-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D2A3A] text-xl">
              🦊
            </div>

          <div className="hidden lg:flex flex-col leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#2D2A3A]">
                FireFox
              </span>
            </div>

            </div>
           </div>
           </div>

    </div>
      
    
  )
}