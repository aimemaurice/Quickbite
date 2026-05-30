import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { BottomNav } from "./BottomNav";

const initialFavourites = [
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
    id: 4,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: "800 RWF",
    cuisine: "Sushi",
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
];

export function Favourites() {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState(initialFavourites);

  const removeFavourite = (id: number) => {
    setFavourites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-lg">Favourites</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {favourites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favourites.map((restaurant) => (
              <div key={restaurant.id} className="relative">
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
                      <p className="text-xs text-muted-foreground mb-2">
                        {restaurant.cuisine}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="fill-[#F97316] text-[#F97316]" />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                        <span className="text-muted-foreground">
                          {restaurant.deliveryTime}
                        </span>
                        <span className="text-muted-foreground">
                          {restaurant.deliveryFee}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFavourite(restaurant.id);
                  }}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors"
                >
                  <Heart size={20} className="fill-[#F97316] text-[#F97316]" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Heart size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-bold mb-2">No favourites yet</h3>
            <p className="text-muted-foreground mb-6">
              Save your favorite restaurants to find them easily
            </p>
            <button
              onClick={() => navigate("/home")}
              className="px-6 py-2.5 bg-[#F97316] text-white rounded-full font-medium hover:bg-[#ea580c] transition-colors"
            >
              Browse Restaurants
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
