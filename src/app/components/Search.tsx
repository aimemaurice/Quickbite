import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowLeft, Search as SearchIcon, Star, X } from "lucide-react";
import { BottomNav } from "./BottomNav";

const allRestaurants = [
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

const popularSearches = ["Burger", "Pizza", "Sushi", "Chicken", "Salad", "Pasta"];

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [isSearching, setIsSearching] = useState(!!searchParams.get("q"));

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
      setIsSearching(true);
    }
  }, [searchParams]);

  const filteredRestaurants = query
    ? allRestaurants.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.cuisine.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3 md:hidden">
            <Link to="/home">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-bold text-lg">Search</h1>
          </div>

          <div className="relative">
            <SearchIcon
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              value={query}
              onChange={(e) => {
                const newQuery = e.target.value;
                setQuery(newQuery);
                setIsSearching(newQuery.length > 0);
                if (newQuery) {
                  setSearchParams({ q: newQuery });
                } else {
                  setSearchParams({});
                }
              }}
              className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setIsSearching(false);
                  setSearchParams({});
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {!isSearching ? (
          <div>
            <h2 className="font-bold mb-3">Popular searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    setIsSearching(true);
                    setSearchParams({ q: term });
                  }}
                  className="px-4 py-2 bg-white rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-bold mb-4">
              {filteredRestaurants.length} results for "{query}"
            </h2>
            {filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <SearchIcon size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-bold mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try searching for something else
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
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
