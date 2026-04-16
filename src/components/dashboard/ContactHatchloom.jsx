import React from "react";
import {
    MessageCircle,
    Mail,
    Globe,
    Sparkles,
    ArrowRight,
    Users,
    Lightbulb,
    Rocket,
} from "lucide-react";

export default function ContactHatchloom() {
    return (
        <section className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-[#ECECF2] bg-white shadow-sm">
                {/* Header */}
                <div className="relative border-b border-[#ECECF2] px-6 py-6 md:px-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1F5] via-[#F7F6FF] to-[#EEF9FF] opacity-80" />
                    <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFEDF2] text-[#FF3864] shadow-sm">
                                <MessageCircle size={24} />
                            </div>

                            <div>
                                <h1 className="text-[28px] font-black tracking-[-0.02em] text-[#221F35]">
                                    Get In Touch
                                </h1>
                                <p className="mt-1 max-w-2xl text-sm text-[#7B8194]">
                                    Have a question, idea, partnership, or need support? Reach out to Hatchloom and we’ll be happy to help.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 self-start rounded-full bg-[#FFF4F7] px-4 py-2 text-sm font-semibold text-[#FF3864]">
                            <Sparkles size={16} />
                            <span>We’d love to hear from you</span>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
                    {/* Left content */}
                    <div className="space-y-6 md:col-span-2">
                        <div className="rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] p-6">
                            <h2 className="text-[20px] font-bold text-[#221F35]">
                                About Hatchloom
                            </h2>
                            <p className="mt-3 text-[14px] leading-7 text-[#6F768A]">
                                Hatchloom is a learning and innovation platform designed to help young people
                                explore ideas, build real projects, connect with mentors, and turn creativity
                                into action. It blends learning, entrepreneurship, and hands-on problem solving
                                into one growing ecosystem.
                            </p>
                            <p className="mt-3 text-[14px] leading-7 text-[#6F768A]">
                                Whether you’re a learner, educator, parent, mentor, or partner, Hatchloom aims
                                to create meaningful pathways for growth through courses, challenges, credentials,
                                and venture-building experiences.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <InfoCard
                                icon={Lightbulb}
                                title="Explore Ideas"
                                text="Discover creative ways to solve real problems and turn ideas into action."
                                iconBg="bg-[#EEF7FF]"
                                iconColor="text-[#4C7ECF]"
                            />
                            <InfoCard
                                icon={Users}
                                title="Build Connections"
                                text="Meet mentors, peers, and collaborators who can support your journey."
                                iconBg="bg-[#F6F0FF]"
                                iconColor="text-[#8B63D9]"
                            />
                            <InfoCard
                                icon={Rocket}
                                title="Launch Growth"
                                text="Create projects, earn credentials, and build momentum for the future."
                                iconBg="bg-[#FFF1F5]"
                                iconColor="text-[#FF3864]"
                            />
                        </div>
                    </div>

                    {/* Right contact panel */}
                    <div className="space-y-4">
                        <div className="rounded-2xl border border-[#ECECF2] bg-white p-6 shadow-sm">
                            <h3 className="text-[18px] font-bold text-[#221F35]">
                                Contact Information
                            </h3>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-start gap-3 rounded-xl bg-[#FAFBFE] p-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1F5] text-[#FF3864]">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-[#98A2B3]">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:contact@hatchloom.com"
                                            className="mt-1 inline-block text-sm font-semibold text-[#221F35] hover:text-[#FF3864]"
                                        >
                                            contact@hatchloom.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-xl bg-[#FAFBFE] p-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF7FF] text-[#4C7ECF]">
                                        <Globe size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-[#98A2B3]">
                                            Website
                                        </p>
                                        <a
                                            href="https://hatchloom.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-block text-sm font-semibold text-[#221F35] hover:text-[#FF3864]"
                                        >
                                            hatchloom.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="mailto:contact@hatchloom.com"
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF3864] px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-[#e7325b]"
                            >
                                Send an Email
                                <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] p-6">
                            <h3 className="text-[16px] font-bold text-[#221F35]">
                                What can you contact us about?
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-[#6F768A]">
                                <li>General questions about Hatchloom</li>
                                <li>Platform support and account help</li>
                                <li>Mentorship or partnership opportunities</li>
                                <li>School, parent, or educator inquiries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoCard({ icon: Icon, title, text, iconBg, iconColor }) {
    return (
        <div className="rounded-2xl border border-[#ECECF2] bg-white p-5 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
                <Icon size={18} />
            </div>
            <h3 className="mt-4 text-[15px] font-bold text-[#221F35]">{title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[#7B8194]">{text}</p>
        </div>
    );
}