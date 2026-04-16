import React, { useState } from "react";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

const initialWorkItems = [
  {
    id: 1,
    title: "Sustainable Packaging Redesign",
    subtitle: "Design Thinking 101 · Block 2",
    icon: "🌿",
    color: "#89DFE7",
    inWallet: true,
  },
  {
    id: 2,
    title: "Flavour Butter Co. BMC",
    subtitle: "Business Model Canvas · Block 3",
    icon: "🧈",
    color: "#FB8500",
    inWallet: true,
  },
  {
    id: 3,
    title: "Empathy Map: Teen Shoppers",
    subtitle: "Design Thinking 101 · Block 1",
    icon: "🎨",
    color: "#89DFE7",
    inWallet: false,
  },
  {
    id: 4,
    title: "Pitch: EcoSnack Concept",
    subtitle: "Design Thinking 101 · Block 1",
    icon: "💬",
    color: "#FDF79B",
    inWallet: false,
  },
  {
    id: 5,
    title: "Customer Interview Summary",
    subtitle: "Design Thinking 101 · Block 2",
    icon: "📋",
    color: "#FF3864",
    inWallet: false,
  },
  {
    id: 6,
    title: "Personal Budget Plan",
    subtitle: "Financial Literacy 101 · Block 4",
    icon: "💰",
    color: "#BBC0B7",
    inWallet: true,
  },
];

export default function MyWork() {
  const [items, setItems] = useState(initialWorkItems);

  const toggleWallet = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, inWallet: !item.inWallet } : item
      )
    );
  };

  const walletCount = items.filter((item) => item.inWallet).length;

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-[28px] border border-[#ECECF2] bg-white shadow-sm">
        <div className="relative border-b border-[#ECECF2] px-6 py-6 md:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1F5] via-[#F9F7FF] to-[#EEF9FF] opacity-70" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFEDF2] text-[#FF3864] shadow-sm">
                <BriefcaseBusiness size={24} />
              </div>

              <div>
                <h1 className="text-[28px] font-black tracking-[-0.02em] text-[#221F35]">
                  My Work
                </h1>
                <p className="mt-1 text-sm text-[#7B8194]">
                  Projects, submissions, and creative work you’ve built across your learning journey.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-[#FFF4F7] px-4 py-2 text-sm font-semibold text-[#FF3864]">
              <Sparkles size={16} />
              <span>{items.length} work items · {walletCount} in wallet</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <Card key={item.id} item={item} onToggle={() => toggleWallet(item.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, onToggle }) {
  return (
    <div className="group rounded-2xl border border-[#ECECF2] bg-white p-4 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-lg">
      <div
        className="mb-4 flex h-16 items-center justify-center rounded-xl text-2xl shadow-inner"
        style={{ backgroundColor: item.color }}
      >
        {item.icon}
      </div>

      <h3 className="text-[15px] font-bold leading-snug text-[#221F35]">
        {item.title}
      </h3>

      <p className="mt-1 text-[13px] text-[#7B8194]">
        {item.subtitle}
      </p>

      <label className="mt-4 flex cursor-pointer items-center gap-2 text-[13px]">
        <input
          type="checkbox"
          checked={item.inWallet}
          onChange={onToggle}
          className="accent-[#FF3864]"
        />

        <span className={item.inWallet ? "font-medium text-[#545454]" : "text-[#9AA0B2]"}>
          {item.inWallet ? "In Credential Wallet" : "Add to Credential Wallet"}
        </span>
      </label>
    </div>
  );
}