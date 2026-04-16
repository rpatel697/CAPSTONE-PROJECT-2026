import React, { useState } from "react";
import {
  User,
  Camera,
  School,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ShieldCheck,
  Save,
  X,
  Eye,
  Sparkles,
} from "lucide-react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    fullName: "Alex Johnson",
    username: "@firefox_hl",
    headline: "Butter entrepreneur. Design thinker.",
    aboutMe:
      "I love turning ideas into projects that solve real problems. I am especially interested in entrepreneurship, creativity, and learning how to build things that can help people in my community.",
    school: "Ridgewood Academy",
    grade: "Grade 8",
    email: "alex@example.com",
    phone: "*** *** ****",
    location: "Calgary, AB",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    showEmail: true,
    showPhone: false,
    showLocation: true,
    publicProfile: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-[28px] border border-[#ECECF2] bg-white shadow-sm">
        {/* Header */}
        <div className="relative border-b border-[#ECECF2] px-6 py-6 md:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1F5] via-[#F8F5FF] to-[#EEF9FF] opacity-80" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFEDF2] text-[#FF3864] shadow-sm">
                <User size={24} />
              </div>

              <div>
                <h1 className="text-[28px] font-black tracking-[-0.02em] text-[#221F35]">
                  Edit Profile
                </h1>
                <p className="mt-1 text-sm text-[#7B8194]">
                  Update your profile details, social links, and privacy settings.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-[#FFF4F7] px-4 py-2 text-sm font-semibold text-[#FF3864]">
              <Sparkles size={16} />
              <span>Make your profile shine</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
          {/* Left column */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] p-6">
              <h2 className="text-[18px] font-bold text-[#221F35]">Profile Photo</h2>

              <div className="mt-5 flex flex-col items-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#2D2A3A] text-5xl ring-4 ring-white shadow-[0_0_24px_rgba(255,56,100,0.25)]">
                  🦊
                </div>

                <div className="mt-4 flex w-full flex-col gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#FF3864] px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-[#e7325b]"
                  >
                    <Camera size={16} />
                    Change Photo
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-[#ECECF2] bg-white px-4 py-3 text-sm font-semibold text-[#5F667A] transition-all duration-200 hover:bg-[#F6F7FB]"
                  >
                    Remove Photo
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] p-6">
              <h2 className="text-[18px] font-bold text-[#221F35]">Profile Preview</h2>

              <div className="mt-4 rounded-2xl border border-[#ECECF2] bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D2A3A] text-xl">
                    🦊
                  </div>
                  <div>
                    <p className="font-bold text-[#221F35]">{formData.fullName}</p>
                    <p className="text-sm text-[#7B8194]">{formData.username}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium text-[#221F35]">
                  {formData.headline}
                </p>

                <p className="mt-2 text-sm leading-6 text-[#7B8194]">
                  {formData.aboutMe}
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-[#ECECF2] bg-white p-6">
              <h2 className="text-[18px] font-bold text-[#221F35]">Basic Information</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Field
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <Field
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Short Headline"
                  name="headline"
                  value={formData.headline}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-[#221F35]">
                  About Me
                </label>
                <textarea
                  name="aboutMe"
                  value={formData.aboutMe}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] px-4 py-3 text-sm text-[#221F35] outline-none transition-all duration-200 focus:border-[#FF3864]"
                />
                <p className="mt-2 text-xs text-[#98A2B3]">
                  {formData.aboutMe.length} characters
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ECECF2] bg-white p-6">
              <h2 className="text-[18px] font-bold text-[#221F35]">School & Contact</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Field
                  label="School"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  icon={School}
                />
                <Field
                  label="Grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={Mail}
                />
                <Field
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={Phone}
                />
                <div className="md:col-span-2">
                  <Field
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    icon={MapPin}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ECECF2] bg-white p-6">
              <h2 className="text-[18px] font-bold text-[#221F35]">Social Links</h2>

              <div className="mt-5 grid gap-4">
                <Field
                  label="Instagram URL"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  icon={Instagram}
                />
                <Field
                  label="Facebook URL"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  icon={Facebook}
                />
                <Field
                  label="LinkedIn URL"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  icon={Linkedin}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-[#ECECF2] bg-white p-6">
              <h2 className="text-[18px] font-bold text-[#221F35]">Privacy Settings</h2>

              <div className="mt-5 space-y-4">
                <ToggleRow
                  icon={Eye}
                  label="Show Email Publicly"
                  name="showEmail"
                  checked={formData.showEmail}
                  onChange={handleChange}
                />
                <ToggleRow
                  icon={Phone}
                  label="Show Phone Publicly"
                  name="showPhone"
                  checked={formData.showPhone}
                  onChange={handleChange}
                />
                <ToggleRow
                  icon={MapPin}
                  label="Show Location Publicly"
                  name="showLocation"
                  checked={formData.showLocation}
                  onChange={handleChange}
                />
                <ToggleRow
                  icon={ShieldCheck}
                  label="Public Profile"
                  name="publicProfile"
                  checked={formData.publicProfile}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#ECECF2] bg-white px-5 py-3 text-sm font-bold text-[#5F667A] transition-all duration-200 hover:bg-[#F6F7FB]"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#FF3864] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-[#e7325b]"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>

            {saved && (
              <div className="rounded-2xl border border-[#DDF5E6] bg-[#F2FCF6] px-4 py-3 text-sm font-semibold text-[#218A4A]">
                Profile updated successfully.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, icon: Icon }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#221F35]">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
          />
        )}

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] py-3 text-sm text-[#221F35] outline-none transition-all duration-200 focus:border-[#FF3864] ${
            Icon ? "pl-11 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

function ToggleRow({ icon: Icon, label, name, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-[#ECECF2] bg-[#FCFCFE] px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#7B8194]">
          <Icon size={18} />
        </div>
        <span className="text-sm font-semibold text-[#221F35]">{label}</span>
      </div>

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[#FF3864]"
      />
    </label>
  );
}