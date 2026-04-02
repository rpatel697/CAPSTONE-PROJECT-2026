import Topbar from "./components/layout/Topbar"
import Sidebar from "./components/layout/Sidebar"
import ProfileHeader from "./components/dashboard/ProfileHeader"
import MyCourses from "./components/dashboard/MyCourses";
import { useState } from "react";
import GrowthSection from "./components/dashboard/GrowthSection"
import React from "react";

export default function HatchloomDashboardPlaceholder() {
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
          <MyCourses /> 
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


