
export default function Sidebar() {
  return (
      <aside className="hidden md:block w-[240px] fixed top-16 left-0 h-[calc(100vh-4rem)] border-r border-[#ECECF2] bg-[#FCFCFE]">
        <div className="h-full flex flex-col p-4">
          <nav className="space-y-2 text-sm">
  
              <div className="flex items-center gap-2 px-3 py-2 text-[#3F4454] font-medium hover:bg-[#F6F7FB] rounded-lg cursor-pointer">
              <span className="text-base">🏠</span>
              <span>Home</span>
              </div>

              <div className="border-t border-[#E7E6E7] my-3"></div>
              
              <div className="pt-4 pb-1 text-[14px] font-bold tracking-[0.1em] text-[#6D6D6D] uppercase">
                Profile
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-[#FDEEEF] text-[#FF3864] font-semibold  rounded-lg">
                <span className="text-base">👤</span>
                <span>Profile</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 text-[#3F4454] font-medium hover:bg-[#F6F7FB] rounded-lg cursor-pointer">
              <span className="text-base">🎓</span>
                <span>Credential Wallet</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 text-[#3F4454] font-medium hover:bg-[#F6F7FB] rounded-lg cursor-pointer">
                <span className="text-base">⚙️</span>
                <span>Settings</span>
              </div>

          </nav>

            <button className="mt-auto w-full rounded-2xl bg-[#FF3864] px-5 py-4 text-base font-bold text-white shadow-lg shadow-[#FF3864]/20">
              Contact Hatchloom
            </button>

        </div>
      </aside>
                )
            }
