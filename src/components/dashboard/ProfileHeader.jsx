import {
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function ProfileHeader() {
  return (
    <section className="space-y-6">
      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-[#ECECF2] bg-white">
        
         <div className="bg-[#c7f9ff7f] px-8 py-8 md:px-10 xl:min-h-[255px] xl:pr-[440px]">
          
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8A90A3]">
              Learner
            </p>

           <h1 className="mt-3 text-3xl font-black tracking-tight text-[#221F35] md:text-[44px]">
             Alex Johnson
            </h1>

            <p className="mt-2 text-base font-medium text-[#6D7388]">
              @firefox_hl
            </p>

            <p className="mt-4 text-[15px] font-semibold text-[#221F35]">
            Butter entrepreneur. Design thinker.
          </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5F667A]">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-[#8A90A3]" />
                <span>Grade 8 at Ridgewood Academy</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#8A90A3]" />
                <span>a***@***.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#8A90A3]" />
                <span>*** *** ****</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#8A90A3]" />
                <span>Calgary, AB</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#8A90A3]" />
                <span>Member since Jan 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-8 md:px-10">
            <h2 className="text-2xl font-black text-[#221F35]">About Me</h2>

            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#43485A]">
              I love turning ideas into projects that solve real problems. I am
              especially interested in entrepreneurship, creativity, and learning
              how to build things that can help people in my community.
            </p>
          </div>
        </div>

      <div className="mt-6 xl:absolute xl:right-[60px] xl:top-[32px] xl:mt-0 xl:w-[360px]">
         
         <div className="rounded-3xl border border-[#ECECF2] bg-white px-9 py-[40px] shadow-[0_10px_40px_rgba(34,31,53,0.30)]">
           
            <div className="flex flex-col items-center text-center">

             <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#2D2A3A] ring-4 ring-white shadow-[0_0_30px_rgba(255,56,100,0.50)] overflow-hidden">
              <span className="translate-y-[4px] text-[92px] leading-none">🦊</span>
            </div>

              <button className="mt-6 w-full rounded-2xl bg-[#FF3864] px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#e7335b] shadow-[0_5px_20px_rgba(34,31,53,0.40)]">
                Edit Profile
              </button>

          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://instagram.com/ka.ycee1863"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#F3DCE3] bg-white text-[#E4405F] transition hover:-translate-y-[1px] hover:bg-[#FFF4F7]"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://facebook.com/ka.ycee1863"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#E5E7EB] bg-white text-[#1877F2] transition hover:-translate-y-[1px] hover:bg-[#F5F9FF]"
              aria-label="Facebook"
            >
              <FaFacebookF size={17} />
            </a>

            <a
              href="https://linkedin.com/in/kelechi-ekeh-68460a214"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#DCE8F7] bg-white text-[#0A66C2] transition hover:-translate-y-[1px] hover:bg-[#F3F8FF]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
          </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
  {[
    ["4", "Real Life Problems Solved"],
    ["2 of 5", "Courses Complete"],
    ["3", "Credentials"],
    ["12", "Connections"],
    ["1 founded • 3 involved", "Ventures"],
  ].map(([value, label]) => (
    <div
      key={label}
      className="rounded-2xl border border-[#ECECF2] bg-white px-4 py-3 text-center"
    >
      <div className="text-base font-black text-[#221F35]">{value}</div>
      <div className="mt-1 text-[10px] font-medium leading-4 text-[#6F7589]">
        {label}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}