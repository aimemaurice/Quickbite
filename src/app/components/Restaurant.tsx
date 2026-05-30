import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Heart, Plus, Star, Minus } from "lucide-react";
import { BottomNav } from "./BottomNav";

const menuCategories = ["Burgers", "Sides", "Drinks"];

const menuItems = {
  Burgers: [
    {
      id: 1,
      name: "Classic Burger",
      description: "Beef patty, lettuce, tomato, cheese",
      price: 5000,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200",
    },
    {
      id: 2,
      name: "Cheese Burger",
      description: "Double cheese, beef patty, special sauce",
      price: 6000,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200",
    },
    {
      id: 3,
      name: "Veggie Burger",
      description: "Plant-based patty, fresh vegetables",
      price: 5500,
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200",
    },
  ],
  Sides: [
    {
      id: 4,
      name: "French Fries",
      description: "Crispy golden fries",
      price: 2000,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200",
    },
    {
      id: 5,
      name: "Onion Rings",
      description: "Crunchy battered onion rings",
      price: 2500,
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=200",
    },
  ],
  Drinks: [
    {
      id: 6,
      name: "Coca Cola",
      description: "330ml can",
      price: 1000,
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200",
    },
    {
      id: 7,
      name: "Fresh Juice",
      description: "Orange or mango",
      price: 1500,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200",
    },
  ],
};

export function Restaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Burgers");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 2, 4: 1 });
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [itemId, qty]) => {
    const item = Object.values(menuItems)
      .flat()
      .find((i) => i.id === Number(itemId));
    return sum + (item?.price || 0) * qty;
  }, 0);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Restaurant Header */}
      <div className="relative">
        <div className="h-48 md:h-64 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Restaurant Info */}
        <div className="bg-white -mt-6 md:-mt-8 relative z-10 rounded-t-2xl p-4 md:p-6 border border-border">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="font-bold text-xl md:text-2xl mb-1">Burger Palace</h1>
              <p className="text-sm text-muted-foreground">American • Burgers</p>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isFavorite ? "bg-[#F97316] text-white" : "bg-muted"
              }`}
            >
              <Heart size={20} className={isFavorite ? "fill-current" : ""} />
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-[#F97316] text-[#F97316]" />
              <span className="font-medium">4.8</span>
            </div>
            <span className="text-muted-foreground">20-30 min</span>
            <span className="text-muted-foreground">500 RWF delivery</span>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-6">
          {/* Menu Section */}
          <div className="col-span-2">
            {/* Category Tabs */}
            <div className="bg-white rounded-xl border border-border sticky top-20 z-30 mb-4">
              <div className="flex gap-2 p-2">
                {menuCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex-1 py-2.5 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-[#F97316] text-white"
                        : "hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  quantity={cart[item.id] || 0}
                  onAdd={() => addToCart(item.id)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Cart Summary - Desktop */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl border border-border p-6 sticky top-36">
              <h3 className="font-bold text-lg mb-4">Your Order</h3>
              {totalItems === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {Object.entries(cart).map(([itemId, qty]) => {
                      const item = Object.values(menuItems)
                        .flat()
                        .find((i) => i.id === Number(itemId));
                      if (!item) return null;
                      return (
                        <div key={itemId} className="flex justify-between text-sm">
                          <span>
                            {qty}× {item.name}
                          </span>
                          <span className="font-medium">
                            {(item.price * qty).toLocaleString()} RWF
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-border pt-4 mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Subtotal</span>
                      <span>{totalPrice.toLocaleString()} RWF</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Delivery fee</span>
                      <span>500 RWF</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{(totalPrice + 500).toLocaleString()} RWF</span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/cart")}
                    className="w-full py-3 bg-[#F97316] text-white rounded-full font-medium hover:bg-[#ea580c] transition-colors"
                  >
                    Go to checkout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Category Tabs */}
          <div className="bg-white rounded-xl border border-border sticky top-0 z-30 my-4">
            <div className="flex gap-2 p-2">
              {menuCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-1 py-2.5 rounded-lg transition-colors text-sm ${
                    selectedCategory === category
                      ? "bg-[#F97316] text-white"
                      : "hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-3 pb-4">
            {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                quantity={cart[item.id] || 0}
                onAdd={() => addToCart(item.id)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar - Mobile */}
      {totalItems > 0 && (
        <div className="md:hidden fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-border z-40">
          <button
            onClick={() => navigate("/cart")}
            className="w-full py-3 bg-[#F97316] text-white rounded-full font-medium flex items-center justify-between px-6"
          >
            <span>View cart — {totalItems} items</span>
            <span>{totalPrice.toLocaleString()} RWF</span>
          </button>
        </div>
      )}

      <BottomNav cartCount={totalItems} />
    </div>
  );
}

function MenuItem({
  item,
  quantity,
  onAdd,
  onRemove,
}: {
  item: any;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-4 flex gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
          {item.description}
        </p>
        <p className="font-medium">{item.price.toLocaleString()} RWF</p>
      </div>
      <div className="flex items-center gap-2">
        {quantity === 0 ? (
          <button
            onClick={onAdd}
            className="w-8 h-8 rounded-full bg-[#F97316] text-white flex items-center justify-center"
          >
            <Plus size={18} />
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
            <button
              onClick={onRemove}
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center"
            >
              <Minus size={14} />
            </button>
            <span className="text-sm font-medium w-6 text-center">{quantity}</span>
            <button
              onClick={onAdd}
              className="w-6 h-6 rounded-full bg-[#F97316] text-white flex items-center justify-center"
            >
              <Plus size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
