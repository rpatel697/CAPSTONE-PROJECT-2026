import React, { useState } from "react";

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

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} item={item} onToggle={() => toggleWallet(item.id)} />
        ))}
      </div>
    </div>
  );
}

function Card({ item, onToggle }) {
  return (
    <div className="group rounded-xl border border-[#ECECF2] bg-white p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-[2px]">

      {/* TOP STRIP */}
      <div
        className="mb-3 flex h-14 items-center justify-center rounded-lg text-xl"
        style={{ backgroundColor: item.color }}
      >
        {item.icon}
      </div>

      {/* TEXT */}
      <h3 className="text-[14px] font-semibold text-[#221F35] leading-snug">
        {item.title}
      </h3>

      <p className="mt-1 text-[12px] text-[#7B8194]">
        {item.subtitle}
      </p>

      {/* CHECKBOX */}
      <label className="mt-3 flex cursor-pointer items-center gap-2 text-[12px]">
        <input
          type="checkbox"
          checked={item.inWallet}
          onChange={onToggle}
          className="accent-[#FF3864]"
        />

        <span className={item.inWallet ? "text-[#545454]" : "text-[#9AA0B2]"}>
          {item.inWallet ? "In Credential Wallet" : "Add to Credential Wallet"}
        </span>
      </label>
    </div>
  );
}