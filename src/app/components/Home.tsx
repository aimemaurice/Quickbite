import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Bell, ChevronDown, MapPin, Search, ShoppingCart, Star } from "lucide-react";
import { BottomNav } from "./BottomNav";

const categories = ["Burgers", "Pizza", "Chicken", "Salads", "Sushi", "Drinks"];

const featuredRestaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    rating: 4.8,
    deliveryTime: "20-30 min",
    deliveryFee: "500 RWF",
    cuisine: "Burgers",
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: "600 RWF",
    cuisine: "Pizza",
  },
  {
    id: 3,
    name: "Chicken Delight",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: "400 RWF",
    cuisine: "Chicken",
  },
];

const nearbyRestaurants = [
  {
    id: 4,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: "800 RWF",
    cuisine: "Sushi",
  },
  {
    id: 5,
    name: "Salad Bar",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "500 RWF",
    cuisine: "Salads",
  },
  {
    id: 6,
    name: "Drink Corner",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400",
    rating: 4.4,
    deliveryTime: "10-15 min",
    deliveryFee: "300 RWF",
    cuisine: "Drinks",
  },
];

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Burgers");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-[#F97316]" />
            <div>
              <p className="text-xs text-muted-foreground">Delivering to</p>
              <button className="flex items-center gap-1 font-medium text-sm">
                Kicukiro, Kigali
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F97316] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchQuery.trim()) {
              navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            }
          }}
          className="relative"
        >
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => navigate("/search")}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </form>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center text-white font-bold">
                QB
              </div>
              <span className="font-bold text-xl">QuickBite</span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                }
              }}
              className="flex-1 max-w-xl mx-8 relative"
            >
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => navigate("/search")}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </form>

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2">
                <MapPin size={20} className="text-[#F97316]" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Delivering to</p>
                  <span className="text-sm font-medium flex items-center gap-1">
                    Kicukiro, Kigali
                    <ChevronDown size={16} />
                  </span>
                </div>
              </button>

              <Link to="/cart" className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F97316] text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              <Link to="/profile">
                <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center text-white font-medium">
                  JD
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Category Chips */}
      <div className="bg-white border-b border-border md:hidden">
        <div className="flex gap-2 overflow-x-auto p-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-[#F97316] text-white"
                  : "bg-muted text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <h3 className="font-medium mb-4">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-[#F97316] text-white"
                        : "hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <section className="mb-8">
                <h2 className="font-bold text-xl mb-4">Featured</h2>
                <div className="grid grid-cols-3 gap-4">
                  {featuredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4">Nearby restaurants</h2>
                <div className="grid grid-cols-3 gap-4">
                  {nearbyRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <section className="px-4 py-6">
          <h2 className="font-bold text-lg mb-4">Featured</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {featuredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="flex-shrink-0 w-64">
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-6">
          <h2 className="font-bold text-lg mb-4">Nearby restaurants</h2>
          <div className="space-y-3">
            {nearbyRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </div>

      <BottomNav cartCount={2} />
    </div>
  );
}

function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium mb-1">{restaurant.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{restaurant.cuisine}</p>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-[#F97316] text-[#F97316]" />
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            <span className="text-muted-foreground">{restaurant.deliveryTime}</span>
            <span className="text-muted-foreground">{restaurant.deliveryFee}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
