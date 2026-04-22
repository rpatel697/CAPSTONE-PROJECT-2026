import {
  Menu,
  Telescope,
  Handshake,
  Rocket,
  Flame,
  Zap,
  Mail,
  Bell,
} from "lucide-react";

export default function Topbar({
  sidebarOpen,
  setSidebarOpen,
  setActivePage,
  activePage,
}) {
  return (
    <div className="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center border-b border-[#ECECF2] bg-white px-5">
      <div className="flex items-center justify-start gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECF2] bg-white text-[#5F667A] transition-all duration-200 hover:bg-[#F6F7FB] hover:text-[#221F35] hover:scale-[1.02]"
        >
          <Menu size={18} />
        </button>

        <img
          src="/hatch.png"
          alt="Hatchloom logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setActivePage("explore")}
          className={`group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activePage === "explore"
              ? "bg-[#F2F7FF] text-[#4C7ECF]"
              : "text-[#5F667A] hover:bg-[#F2F7FF] hover:text-[#4C7ECF] hover:-translate-y-[1px]"
          }`}
        >
          <Telescope
            className={`h-[17px] w-[17px] transition-all duration-200 ${
              activePage === "explore"
                ? "text-[#4C7ECF]"
                : "text-[#7C8DB5] group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#4C7ECF]"
            }`}
          />
          <span>Explore</span>
        </button>

        <button
          onClick={() => setActivePage("connect")}
          className={`group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activePage === "connect"
              ? "bg-[#F6F0FF] text-[#8B63D9]"
              : "text-[#5F667A] hover:bg-[#F6F0FF] hover:text-[#8B63D9] hover:-translate-y-[1px]"
          }`}
        >
          <Handshake
            className={`h-[17px] w-[17px] transition-all duration-200 ${
              activePage === "connect"
                ? "text-[#8B63D9]"
                : "text-[#A48AC7] group-hover:scale-110 group-hover:-rotate-6 group-hover:text-[#8B63D9]"
            }`}
          />
          <span>Connect</span>
        </button>

        <button
          onClick={() => setActivePage("launch")}
          className={`group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activePage === "launch"
              ? "bg-[#FFF1F5] text-[#FB497D]"
              : "text-[#5F667A] hover:bg-[#FFF1F5] hover:text-[#FB497D] hover:-translate-y-[1px]"
          }`}
        >
          <Rocket
            className={`h-[17px] w-[17px] transition-all duration-200 ${
              activePage === "launch"
                ? "text-[#FB497D]"
                : "text-[#FB497D] group-hover:scale-110 group-hover:-translate-y-[2px] group-hover:rotate-12"
            }`}
          />
          <span>Launch</span>
        </button>
      </div>

      <div className="flex items-center justify-end gap-3">
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

        <button className="group mail-hover relative flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF9FB] transition-all duration-200 hover:scale-110 hover:bg-[#54545410]">
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF3864] text-[9px] font-bold text-white">
            3
          </span>
          <Mail
            className="mail-icon text-[#4FBCC7] transition-all duration-200 group-hover:text-[#89DFE7]"
            size={17}
          />
        </button>

        <button className="group bell-hover relative flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3E8] transition-all duration-200 hover:scale-110 hover:bg-[#54545410]">
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF3864] text-[9px] font-bold text-white">
            3
          </span>
          <Bell
            className="bell-icon text-[#F39A1E] transition-all duration-200 group-hover:text-[#F6B53F]"
            size={17}
          />
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D2A3A] text-xl ring-2 ring-white shadow-[0_0_18px_rgba(255,56,100,0.40)] transition-all duration-200 hover:scale-[1.03]">
          🦊
        </button>
      </div>
    </div>
  );
}