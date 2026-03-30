import { House, User, WalletCards, Settings } from "lucide-react";
export default function Sidebar() {
  return (
      <aside className="hidden md:block w-[240px] fixed top-16 left-0 h-[calc(100vh-4rem)] border-r border-[#ECECF2] bg-[#FCFCFE]">
        <div className="h-full flex flex-col p-4">
          <nav className="space-y-2 text-sm">
  
              <div className="group flex items-center gap-2 px-3 py-2 text-[#3F4454] font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#F3F4F7] hover:translate-x-1 hover:shadow-sm hover:text-[#221F35]">
                <House className="h-4 w-4 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-[1px]" />
                <span>Home</span>
              </div>

              <div className="border-t border-[#E7E6E7] my-3"></div>
              
              <div className="pt-4 pb-1 text-[14px] font-bold tracking-[0.1em] text-[#6D6D6D] uppercase">
                Profile
              </div>

        <div className="group flex items-center gap-2 px-3 py-2 bg-[#FDEEEF] text-[#FF3864] font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#F9E3E6] hover:translate-x-1 hover:shadow-sm">
          <User className="h-4 w-4 transition-all duration-200 group-hover:scale-110" />
          <span>Profile</span>
        </div>

             <div className="group flex items-center gap-2 px-3 py-2 text-[#3F4454] font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#F3F4F7] hover:translate-x-1 hover:shadow-sm hover:text-[#221F35]">
                <WalletCards className="h-4 w-4 transition-all duration-200 group-hover:scale-110 group-hover:-rotate-6" />
                <span>Credential Wallet</span>
              </div>

             <div className="group flex items-center gap-2 px-3 py-2 text-[#3F4454] font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#F3F4F7] hover:translate-x-1 hover:shadow-sm hover:text-[#221F35]">
                <Settings className="h-4 w-4 transition-all duration-200 group-hover:scale-110 group-hover:rotate-45" />
                <span>Settings</span>
              </div>

          </nav>

            <button className="group mt-auto w-full rounded-2xl bg-[#FF3864] px-5 py-4 text-[14px] font-semibold text-white shadow-lg shadow-[#FF3864]/20 cursor-pointer transition-all duration-200 hover:bg-[#545454] hover:scale-[1.03] hover:-translate-y-[1px] hover:shadow-xl">
              <span className="inline-flex items-center gap-2">
                <span className="transition-transform duration-200 group-hover:translate-x-1">💬</span>
                <span className="transition-all duration-200 group-hover:tracking-wide">
                  Contact Hatchloom
                </span>
              </span>
            </button>

        </div>
      </aside>
                )
            }
