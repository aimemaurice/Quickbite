import { Home, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav({ cartCount = 0 }: { cartCount?: number }) {
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/cart", icon: ShoppingCart, label: "Cart", badge: cartCount },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full relative"
            >
              <div className="relative">
                <Icon
                  size={24}
                  className={isActive ? "text-[#F97316]" : "text-muted-foreground"}
                />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#F97316] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive ? "text-[#F97316] font-medium" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
