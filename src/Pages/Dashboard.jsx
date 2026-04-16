import React, { useState } from "react";
import Topbar from "../components/layout/Topbar";
import Sidebar from "../components/layout/Sidebar";
import ProfileHeader from "../components/dashboard/ProfileHeader";
import MyCourses from "../components/dashboard/MyCourses";
import MyWork from "../components/dashboard/MyWork";
import Credentials from "../components/dashboard/credentials";
import GrowthSection from "../components/dashboard/GrowthSection";
import ContactHatchloom from "../components/dashboard/ContactHatchloom";
import EditProfile from "../components/dashboard/EditProfile";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-[#ECECF2] bg-white">
        <Topbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      <div className="flex pt-[80px]">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          sidebarOpen={sidebarOpen}
        />

        <div
          className={`h-[calc(100vh-80px)] w-full overflow-y-auto transition-all duration-300 ${sidebarOpen ? "ml-[240px]" : "ml-0"
            }`}
        >
          {activePage === "profile" && (
            <main className="space-y-5 p-4 md:p-8">
              <ProfileHeader setActivePage={setActivePage} />
              <GrowthSection />
            </main>
          )}

          {activePage === "courses" && (
            <main className="p-4 md:p-8">
              <MyCourses />
            </main>
          )}

          {activePage === "work" && (
            <main className="p-4 md:p-8">
              <MyWork />
            </main>
          )}

          {activePage === "credentials" && (
            <main className="p-4 md:p-8">
              <Credentials />
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

          {activePage === "contact" && (
            <main className="p-4 md:p-8">
              <ContactHatchloom />
            </main>
          )}

          {activePage === "editProfile" && (
            <main className="p-4 md:p-8">
              <EditProfile />
            </main>
          )}
        </div>
      </div>
    </div>
  );
}