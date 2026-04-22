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
import HomePage from "../components/dashboard/HomePage";

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
          className={`h-[calc(100vh-80px)] w-full overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "ml-[240px]" : "ml-0"
          }`}
        >
          {activePage === "home" && (
            <main className="p-4 md:p-8">
              <HomePage />
            </main>
          )}

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

          {activePage === "editProfile" && (
            <main className="p-4 md:p-8">
              <EditProfile />
            </main>
          )}

          {activePage === "contact" && (
            <main className="p-4 md:p-8">
              <ContactHatchloom />
            </main>
          )}
        </div>
      </div>
    </div>
  );
}