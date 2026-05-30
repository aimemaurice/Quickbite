import { useNavigate } from "react-router";
import {
  Clock,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { BottomNav } from "./BottomNav";

const menuItems = [
  { icon: Clock, label: "Order history", path: "/orders" },
  { icon: Heart, label: "Favourites", path: "/favourites" },
  { icon: MapPin, label: "Saved addresses", path: "/addresses" },
  { icon: CreditCard, label: "Payment methods", path: "/payments" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-border p-4">
        <h1 className="font-bold text-lg">Profile</h1>
      </header>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl border border-border p-6">
                {/* Avatar and Info */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#F97316] flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <h2 className="font-bold">John Doe</h2>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border">
                  <div className="text-center">
                    <p className="font-bold text-lg">12</p>
                    <p className="text-xs text-muted-foreground">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">4.9</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">3</p>
                    <p className="text-xs text-muted-foreground">Saved</p>
                  </div>
                </div>

                {/* Menu */}
                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
                      >
                        <Icon size={20} className="text-muted-foreground" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left text-destructive"
                  >
                    <LogOut size={20} />
                    <span>Log out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="col-span-3">
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-bold text-xl mb-6">Order history</h2>
                <div className="space-y-4">
                  <OrderCard
                    orderId="12345"
                    restaurant="Burger Palace"
                    date="May 29, 2026"
                    total="12,000 RWF"
                    status="Delivered"
                    items="Classic Burger × 2, French Fries × 1"
                  />
                  <OrderCard
                    orderId="12344"
                    restaurant="Pizza Heaven"
                    date="May 28, 2026"
                    total="18,500 RWF"
                    status="Delivered"
                    items="Margherita Pizza × 1, Pepperoni Pizza × 1"
                  />
                  <OrderCard
                    orderId="12343"
                    restaurant="Sushi Express"
                    date="May 26, 2026"
                    total="25,000 RWF"
                    status="Delivered"
                    items="California Roll × 2, Salmon Sashimi × 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="p-4">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-border p-6 mb-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xl font-bold">
                JD
              </div>
              <div>
                <h2 className="font-bold text-lg">John Doe</h2>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="font-bold text-lg">12</p>
                <p className="text-xs text-muted-foreground">Orders</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="font-bold text-lg">4.9</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="font-bold text-lg">3</p>
                <p className="text-xs text-muted-foreground">Saved</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                    index !== menuItems.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-muted-foreground" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </button>
              );
            })}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full mt-4 flex items-center justify-center gap-2 p-4 bg-white rounded-xl border border-border text-destructive hover:bg-muted transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function OrderCard({
  orderId,
  restaurant,
  date,
  total,
  status,
  items,
}: {
  orderId: string;
  restaurant: string;
  date: string;
  total: string;
  status: string;
  items: string;
}) {
  return (
    <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-medium">{restaurant}</h3>
          <p className="text-sm text-muted-foreground">Order #{orderId}</p>
        </div>
        <span className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] text-xs rounded-full font-medium">
          {status}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{items}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{date}</span>
        <span className="font-medium">{total}</span>
      </div>
    </div>
  );
}
