import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./onboarding.css";
import {
  Palette,
  Laptop,
  Clapperboard,
  Music,
  Smartphone,
  Gamepad2,
  Dumbbell,
  Pizza,
  Plane,
  Globe,
  BookOpen,
  FlaskConical,
  Sparkles,
  Mic,
  Lightbulb,
  Rocket,
  Handshake,
  Monitor,
  Search,
  PenTool,
  MessageCircle,
  BarChart3,
} from "lucide-react";


const birthYears = ["2013", "2012", "2011", "2010", "2009", "2008", "2007"];

const provinceData = {
  Canada: [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ],
  "United States": [
    "California",
    "Texas",
    "Florida",
    "New York",
    "Illinois",
    "Washington",
    "Ohio",
    "Georgia",
  ],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  India: ["Punjab", "Delhi", "Maharashtra", "Gujarat", "Rajasthan", "Haryana"],
};

const countries = ["Canada", "United States", "Australia", "India", "Other"];

const avatars = [
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=16",
  "https://i.pravatar.cc/150?img=17",
  "https://i.pravatar.cc/150?img=18",
  "https://i.pravatar.cc/150?img=19",
  "https://i.pravatar.cc/150?img=20",
  "https://i.pravatar.cc/150?img=21",
  "https://i.pravatar.cc/150?img=22",
];

const interestsList = [
  { icon: Palette, label: "Design & Creativity" },
  { icon: Laptop, label: "Tech & Coding" },
  { icon: Clapperboard, label: "Media & Storytelling" },
  { icon: Music, label: "Music & Audio" },
  { icon: Smartphone, label: "Social Media & Marketing" },
  { icon: Gamepad2, label: "Gaming & Entertainment" },
  { icon: Dumbbell, label: "Sports & Fitness" },
  { icon: Pizza, label: "Food & Lifestyle" },
  { icon: Plane, label: "Travel & Culture" },
  { icon: Globe, label: "Environment & Impact" },
  { icon: BookOpen, label: "Writing & Content" },
  { icon: FlaskConical, label: "Science & Innovation" },
  { icon: Sparkles, label: "Other" },
];

const skillsList = [
  { icon: Mic, label: "Speaking confidently in front of others" },
  { icon: Lightbulb, label: "Solving creative problems" },
  { icon: Palette, label: "Designing & visual thinking" },
  { icon: Rocket, label: "Starting & running a business" },
  { icon: Handshake, label: "Working well in teams" },
  { icon: Monitor, label: "Using digital tools & tech" },
  { icon: Search, label: "Researching & analyzing" },
  { icon: PenTool, label: "Writing & communicating ideas" },
  { icon: MessageCircle, label: "Pitching ideas convincingly" },
  { icon: BarChart3, label: "Managing projects & time" },
  { icon: Sparkles, label: "Other" },
];
const stepIcons = ["🚀", "👋", "🎂", "🌍", "🎨", "⚡", "🎯", "🎉"];
const totalSteps = 8;

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    googleConnected: false,
    firstName: "",
    birthYear: "",
    country: "",
    province: "",
    city: "",
    avatar: "",
    interests: [],
    interestsOther: "",
    skills: [],
    skillsOther: "",
  });

  const provinces = useMemo(() => {
    return provinceData[formData.country] || [];
  }, [formData.country]);

  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleMultiSelect = (key, label, maxCount) => {
    setFormData((prev) => {
      const current = prev[key];
      const exists = current.includes(label);

      if (exists) {
        return {
          ...prev,
          [key]: current.filter((item) => item !== label),
          ...(label === "Other"
            ? key === "interests"
              ? { interestsOther: "" }
              : { skillsOther: "" }
            : {}),
        };
      }

      if (current.length >= maxCount) return prev;

      return {
        ...prev,
        [key]: [...current, label],
      };
    });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return true;

      case 2:
        return formData.firstName.trim().length > 0;

      case 3:
        return formData.birthYear !== "";

      case 4: {
        const hasCountry = formData.country !== "";
        const hasCity = formData.city.trim().length > 0;
        const needsProvince =
          formData.country !== "Other" && provinces.length > 0;

        if (needsProvince) {
          return hasCountry && hasCity && formData.province !== "";
        }

        return hasCountry && hasCity;
      }

      case 5:
        return formData.avatar !== "";

      case 6: {
        const count = formData.interests.length;
        const otherSelected = formData.interests.includes("Other");
        const otherValid = !otherSelected || formData.interestsOther.trim() !== "";
        return count >= 3 && count <= 5 && otherValid;
      }

      case 7: {
        const count = formData.skills.length;
        const otherSelected = formData.skills.includes("Other");
        const otherValid = !otherSelected || formData.skillsOther.trim() !== "";
        return count >= 1 && count <= 3 && otherValid;
      }

      case 8:
        return true;

      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleGoogleContinue = () => {
    updateField("googleConnected", true);
    setStep(2);
  };

  const handleCountryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      country: value,
      province: "",
    }));
  };

  const handleFinish = () => {
    localStorage.setItem("onboardingComplete", "true");
    localStorage.setItem("onboardingData", JSON.stringify(formData));
    navigate("/dashboard");
  };

  const renderButtons = () => {
    if (step === 1) return null;

    if (step === 8) {
      return (
        <div className="nav-buttons single-center">
          <button className="btn btn-next active-btn" onClick={handleFinish}>
            Start Exploring 🚀
          </button>
        </div>
      );
    }

    return (
      <div className="nav-buttons">
        <button className="btn btn-back" onClick={handleBack}>
          Back
        </button>
        <button
          className={`btn btn-next ${isStepValid() ? "active-btn" : "inactive-btn"}`}
          onClick={handleNext}
          disabled={!isStepValid()}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="onboarding-page">
      <div className="bg-circle bg-circle-1" />
      <div className="bg-circle bg-circle-2" />
      <div className="bg-circle bg-circle-3" />

      <div className="card">
        {step <= 8 && (
          <div className="progress-wrap">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="progress-text">
              {step === 8 ? "7 of 7" : `${step} of 7`}
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[0]}</div>
            <h1 className="title">Start Your Journey!</h1>
            <p className="subtitle">
              Join teens solving real problems for real entrepreneurs
            </p>

            <button className="google-btn" onClick={handleGoogleContinue}>
              <img
  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
  alt="google"
  className="google-icon"
/>
              Continue with Google
            </button>

            <p className="tiny-text">
              By continuing, you agree to Hatchloom&apos;s Terms & Privacy Policy
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[1]}</div>
            <h1 className="title">What should we call you?</h1>
            <p className="subtitle">Choose a name your squad will see</p>

            <div className="field-group">
              <label>Your First Name</label>
              <input
                type="text"
                placeholder="Alex"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </div>

            {renderButtons()}
          </div>
        )}

        {step === 3 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[2]}</div>
            <h1 className="title">What year were you born?</h1>
            <p className="subtitle">Ages 12-17 are eligible</p>

            <div className="field-group">
              <select
                value={formData.birthYear}
                onChange={(e) => updateField("birthYear", e.target.value)}
              >
                <option value="">Select your birth year</option>
                {birthYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {renderButtons()}
          </div>
        )}

        {step === 4 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[3]}</div>
            <h1 className="title">Where do you live?</h1>
            <p className="subtitle">
              This helps us match you with the right cohort and set meeting
              times in your timezone
            </p>

            <div className="field-group">
              <label>Country</label>
              <select
                value={formData.country}
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {provinces.length > 0 && formData.country !== "Other" && (
              <div className="field-group">
                <label>Province / State</label>
                <select
                  value={formData.province}
                  onChange={(e) => updateField("province", e.target.value)}
                >
                  <option value="">Select province/state</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="field-group">
              <label>City</label>
              <input
                type="text"
                placeholder="e.g., Calgary"
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
              />
            </div>

            {renderButtons()}
          </div>
        )}

        {step === 5 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[4]}</div>
            <h1 className="title">Pick your avatar</h1>
            <p className="subtitle">
              You can change this anytime from your profile
            </p>

            <div className="avatar-grid">
              {avatars.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  className={`avatar-item ${
                    formData.avatar === avatar ? "selected-avatar" : ""
                  }`}
                  onClick={() => updateField("avatar", avatar)}
                >
                  <img src={avatar} alt="avatar" />
                </button>
              ))}
            </div>

            {renderButtons()}
          </div>
        )}

        {step === 6 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[5]}</div>
            <h1 className="title">What are you into?</h1>
            <p className="subtitle">
              Pick the topics you&apos;re curious about. We&apos;ll match you with
              relevant challenges.
            </p>

            <p className="hint">Select 3 to 5 interests</p>

           <div className="option-grid">
  {interestsList.map((item) => {
    const selected = formData.interests.includes(item.label);
    const Icon = item.icon;

    return (
      <button
        key={item.label}
        type="button"
        className={`option-card ${selected ? "selected-card" : ""} ${
          item.label === "Other" ? "other-card" : ""
        }`}
        onClick={() => toggleMultiSelect("interests", item.label, 5)}
      >
        <Icon className="option-icon" />
        <span>{item.label}</span>
      </button>
    );
  })}
</div>

            {formData.interests.includes("Other") && (
              <div className="field-group top-space">
                <input
                  type="text"
                  placeholder="Tell us what else you're into..."
                  value={formData.interestsOther}
                  onChange={(e) => updateField("interestsOther", e.target.value)}
                />
              </div>
            )}

            {renderButtons()}
          </div>
        )}

        {step === 7 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[6]}</div>
            <h1 className="title">What would you like to learn or get better at?</h1>
            <p className="subtitle">Choose the skills you want to develop</p>

            <p className="hint">Pick 1 to 3 skills</p>

           <div className="option-grid">
  {skillsList.map((item) => {
    const selected = formData.skills.includes(item.label);
    const Icon = item.icon;

    return (
      <button
        key={item.label}
        type="button"
        className={`option-card ${selected ? "selected-card" : ""} ${
          item.label === "Other" ? "other-card" : ""
        }`}
        onClick={() => toggleMultiSelect("skills", item.label, 3)}
      >
        <Icon className="option-icon" />
        <span>{item.label}</span>
      </button>
    );
  })}
</div>

            {formData.skills.includes("Other") && (
              <div className="field-group top-space">
                <input
                  type="text"
                  placeholder="What else would you like to learn?"
                  value={formData.skillsOther}
                  onChange={(e) => updateField("skillsOther", e.target.value)}
                />
              </div>
            )}

            {renderButtons()}
          </div>
        )}

        {step === 8 && (
          <div className="step-content">
            <div className="floating-icon">{stepIcons[7]}</div>
            <h1 className="title">You&apos;re Ready To Go!</h1>
            <p className="subtitle success-text">
              {formData.firstName || "Friend"}, your first challenge is waiting.
              Let&apos;s see what you can create!
            </p>

            {renderButtons()}
          </div>
        )}
      </div>
    </div>
  );
}