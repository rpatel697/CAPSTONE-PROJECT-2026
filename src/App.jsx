import Topbar from "./components/layout/Topbar"
import Sidebar from "./components/layout/Sidebar"
import MyCourses from "./components/dashboard/MyCourses";
import { useState } from "react";
import React from "react";
import ProfilePage from "./components/dashboard/ProfilePage";

export default function HatchloomDashboardPlaceholder() {
const [activePage, setActivePage] = useState("profile");
const [sidebarOpen, setSidebarOpen] = useState(true);
  
 return ( 
      <div className="min-h-screen bg-[#F6F7FB]">

    {/* 🔴 TOPBAR (FULL WIDTH — ROOF) */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#ECECF2]">
      <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>

    {/* 🔵 BODY */}
    <div className="flex pt-[80px]">

      {/* SIDEBAR */}
    <Sidebar
      activePage={activePage}
      setActivePage={setActivePage}
      sidebarOpen={sidebarOpen}
    />

     <div
      className={`w-full h-[calc(100vh-80px)] overflow-y-auto transition-all duration-300 ${
        sidebarOpen ? "ml-[240px]" : "ml-0"
      }`}
    >

      {/* MAIN CONTENT */}

      {activePage === "profile" && <ProfilePage />}
      
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

    {activePage === "my-courses" && (
      <main className="p-4 md:p-8">
        <MyCourses />
      </main>
    )}

{activePage === "my-work" && (
  <main className="p-4 md:p-8">
    <MyWork />
  </main>
)}

{activePage === "credentials" && (
  <main className="p-4 md:p-8">
    <Credentials />
  </main>
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


