import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Bell, Globe, Moon, HelpCircle, Shield, FileText } from "lucide-react";
import { BottomNav } from "./BottomNav";

export function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [promotions, setPromotions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-lg">Settings</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Notifications Section */}
        <div className="bg-white rounded-xl border border-border p-4">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={20} className="text-muted-foreground" />
            <h2 className="font-bold">Notifications</h2>
          </div>
          <div className="space-y-3">
            <SettingToggle
              label="Push Notifications"
              description="Receive push notifications"
              checked={notifications}
              onChange={setNotifications}
            />
            <SettingToggle
              label="Order Updates"
              description="Get notified about your order status"
              checked={orderUpdates}
              onChange={setOrderUpdates}
            />
            <SettingToggle
              label="Promotions & Offers"
              description="Receive special offers and deals"
              checked={promotions}
              onChange={setPromotions}
            />
          </div>
        </div>

        {/* Appearance Section */}
        <div className="bg-white rounded-xl border border-border p-4">
          <div className="flex items-center gap-3 mb-4">
            <Moon size={20} className="text-muted-foreground" />
            <h2 className="font-bold">Appearance</h2>
          </div>
          <div className="space-y-3">
            <SettingToggle
              label="Dark Mode"
              description="Use dark theme"
              checked={darkMode}
              onChange={setDarkMode}
            />
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white rounded-xl border border-border p-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={20} className="text-muted-foreground" />
            <h2 className="font-bold">Language & Region</h2>
          </div>
          <div className="space-y-3">
            <SettingOption label="Language" value="English" />
            <SettingOption label="Country" value="Rwanda" />
            <SettingOption label="Currency" value="RWF" />
          </div>
        </div>

        {/* Account */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-muted-foreground" />
              <span>Privacy & Security</span>
            </div>
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="border-t border-border"></div>
          <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-muted-foreground" />
              <span>Terms & Conditions</span>
            </div>
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="border-t border-border"></div>
          <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle size={20} className="text-muted-foreground" />
              <span>Help & Support</span>
            </div>
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* App Info */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>QuickBite v1.0.0</p>
          <p>© 2026 QuickBite. All rights reserved.</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function SettingToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-7 rounded-full transition-colors ${
          checked ? "bg-[#F97316]" : "bg-muted"
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </button>
    </div>
  );
}

function SettingOption({ label, value }: { label: string; value: string }) {
  return (
    <button className="w-full flex items-center justify-between py-2 hover:bg-muted -mx-2 px-2 rounded-lg transition-colors">
      <span className="font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{value}</span>
        <svg
          className="w-5 h-5 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
}
