import { useNavigate } from "react-router";
import { ArrowLeft, Package } from "lucide-react";
import { BottomNav } from "./BottomNav";

const orders = [
  {
    id: "12345",
    restaurant: "Burger Palace",
    date: "May 29, 2026",
    time: "2:30 PM",
    total: "12,000 RWF",
    status: "Delivered",
    items: [
      { name: "Classic Burger", quantity: 2, price: 5000 },
      { name: "French Fries", quantity: 1, price: 2000 },
    ],
  },
  {
    id: "12344",
    restaurant: "Pizza Heaven",
    date: "May 28, 2026",
    time: "7:15 PM",
    total: "18,500 RWF",
    status: "Delivered",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 8000 },
      { name: "Pepperoni Pizza", quantity: 1, price: 10000 },
    ],
  },
  {
    id: "12343",
    restaurant: "Sushi Express",
    date: "May 26, 2026",
    time: "12:45 PM",
    total: "25,000 RWF",
    status: "Delivered",
    items: [
      { name: "California Roll", quantity: 2, price: 10000 },
      { name: "Salmon Sashimi", quantity: 1, price: 5000 },
    ],
  },
  {
    id: "12342",
    restaurant: "Chicken Delight",
    date: "May 25, 2026",
    time: "6:00 PM",
    total: "15,500 RWF",
    status: "Delivered",
    items: [
      { name: "Grilled Chicken", quantity: 2, price: 7000 },
      { name: "Coleslaw", quantity: 1, price: 1500 },
    ],
  },
  {
    id: "12341",
    restaurant: "Salad Bar",
    date: "May 23, 2026",
    time: "1:20 PM",
    total: "8,000 RWF",
    status: "Delivered",
    items: [
      { name: "Caesar Salad", quantity: 1, price: 4500 },
      { name: "Fresh Juice", quantity: 1, price: 1500 },
    ],
  },
];

export function OrderHistory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-lg">Order History</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold">{order.restaurant}</h3>
                    <p className="text-sm text-muted-foreground">
                      Order #{order.id}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] text-xs rounded-full font-medium">
                    {order.status}
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm text-muted-foreground"
                    >
                      <span>
                        {item.quantity}× {item.name}
                      </span>
                      <span>{(item.price * item.quantity).toLocaleString()} RWF</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {order.date} at {order.time}
                  </div>
                  <div className="font-bold">{order.total}</div>
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2 px-4 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                    Reorder
                  </button>
                  <button className="flex-1 py-2 px-4 bg-[#F97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-sm font-medium">
                    Leave Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Package size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-bold mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-6">
              Start ordering to see your history here
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
