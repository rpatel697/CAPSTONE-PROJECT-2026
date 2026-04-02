import {
  House,
  BookOpen,
  BriefcaseBusiness,
  Trophy,
  BadgeCheck,
  Users,
  Handshake,
  CalendarDays,
  User,
  Settings,
  MessageCircle,
} from "lucide-react";

function SidebarItem({ icon: Icon, label, isActive, onClick, iconClass = "" }) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
        isActive
          ? "bg-[#FDEEEF] text-[#FF3864] shadow-sm"
          : "text-[#3F4454] hover:bg-[#F6F7FB] hover:text-[#221F35] hover:translate-x-1"
      }`}
    >
      <Icon
        className={`h-4 w-4 shrink-0 transition-all duration-200 group-hover:scale-110 ${iconClass} ${
          isActive ? "text-[#FF3864]" : ""
        }`}
      />
      <span className={`text-[15px] ${isActive ? "font-semibold" : "font-medium"}`}>
        {label}
      </span>
    </button>
  );
}

function SidebarGroup({ title, children }) {
  return (
    <div className="mt-6 first:mt-0">
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A0A6B8]">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default function Sidebar({ activePage, setActivePage }) {
  return (
   <aside className="fixed left-0 top-[64px] z-30 h-[calc(100vh-80px)] w-[240px] border-r border-[#ECECF2] bg-white">
  <div className="flex h-full flex-col overflow-y-auto px-4 py-5">
   <SidebarGroup title="Main">
        <SidebarItem
          icon={House}
          label="Home"
          isActive={activePage === "home"}
          onClick={() => setActivePage("home")}
          iconClass="group-hover:-translate-y-[1px]"
        />

        <SidebarItem
          icon={BookOpen}
          label="My Courses"
          isActive={activePage === "courses"}
          onClick={() => setActivePage("courses")}
          iconClass="group-hover:rotate-[-6deg]"
        />

        <SidebarItem
          icon={BriefcaseBusiness}
          label="My Work"
          isActive={activePage === "work"}
          onClick={() => setActivePage("work")}
          iconClass="group-hover:-translate-y-[1px]"
        />

        <SidebarItem
          icon={Trophy}
          label="Challenges"
          isActive={activePage === "challenges"}
          onClick={() => setActivePage("challenges")}
          iconClass="group-hover:rotate-[8deg]"
        />

        <SidebarItem
          icon={BadgeCheck}
          label="Credentials"
          isActive={activePage === "credentials"}
          onClick={() => setActivePage("credentials")}
          iconClass="group-hover:scale-110"
        />
      </SidebarGroup>

      <SidebarGroup title="Connect">
        <SidebarItem
          icon={Users}
          label="Community"
          isActive={activePage === "community"}
          onClick={() => setActivePage("community")}
          iconClass="group-hover:-translate-y-[1px]"
        />

        <SidebarItem
          icon={Handshake}
          label="Mentors"
          isActive={activePage === "mentors"}
          onClick={() => setActivePage("mentors")}
          iconClass="group-hover:rotate-[-6deg]"
        />

        <SidebarItem
          icon={CalendarDays}
          label="Events"
          isActive={activePage === "events"}
          onClick={() => setActivePage("events")}
          iconClass="group-hover:scale-110"
        />
      </SidebarGroup>

      <SidebarGroup title="Account">
        <SidebarItem
          icon={User}
          label="Profile"
          isActive={activePage === "profile"}
          onClick={() => setActivePage("profile")}
          iconClass="group-hover:scale-110"
        />

        <SidebarItem
          icon={Settings}
          label="Settings"
          isActive={activePage === "settings"}
          onClick={() => setActivePage("settings")}
          iconClass="group-hover:rotate-45"
        />
      </SidebarGroup>

      <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF3864] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF3864]/20 transition-all duration-200 hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-[#545454] hover:shadow-xl">
        <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:scale-110" />
        <span className="transition-all duration-200 group-hover:tracking-[0.01em]">
          Contact Hatchloom
        </span>
      </button>

    </div>
    </aside>
  );
}