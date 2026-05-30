import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Minus, Plus, CreditCard } from "lucide-react";
import { BottomNav } from "./BottomNav";

const cartItems = [
  {
    id: 1,
    name: "Classic Burger",
    price: 5000,
    quantity: 2,
  },
  {
    id: 2,
    name: "French Fries",
    price: 2000,
    quantity: 1,
  },
];

type PaymentMethod = "momo" | "card" | "cash";

export function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState(cartItems);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("momo");

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 500;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    navigate("/tracking/12345");
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="md:hidden">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="font-bold text-lg md:text-xl">Your cart</h1>
            <p className="text-sm text-muted-foreground">Burger Palace</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Desktop Two-Column Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Left Column - Cart Items & Address */}
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-xl border border-border p-4 md:p-6">
              <h2 className="font-bold mb-4">Items</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.price.toLocaleString()} RWF
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-[#F97316] text-white flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium w-20 text-right">
                        {(item.price * item.quantity).toLocaleString()} RWF
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-xl border border-border p-4 md:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-bold mb-2">Delivery address</h2>
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="text-[#F97316] mt-0.5" />
                    <div>
                      <p className="font-medium">Home</p>
                      <p className="text-sm text-muted-foreground">
                        KG 123 St, Kicukiro
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                </div>
                <button className="text-[#F97316] text-sm font-medium">Edit</button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Payment */}
          <div className="space-y-6 mt-6 md:mt-0">
            {/* Order Summary */}
            <div className="bg-white rounded-xl border border-border p-4 md:p-6">
              <h2 className="font-bold mb-4">Order summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{subtotal.toLocaleString()} RWF</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery fee</span>
                  <span>{deliveryFee.toLocaleString()} RWF</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{total.toLocaleString()} RWF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-border p-4 md:p-6">
              <h2 className="font-bold mb-4">Payment method</h2>
              <div className="space-y-2">
                <PaymentOption
                  method="momo"
                  label="Mobile Money (MoMo)"
                  selected={paymentMethod === "momo"}
                  onSelect={() => setPaymentMethod("momo")}
                />
                <PaymentOption
                  method="card"
                  label="Credit/Debit Card"
                  selected={paymentMethod === "card"}
                  onSelect={() => setPaymentMethod("card")}
                />
                <PaymentOption
                  method="cash"
                  label="Cash on Delivery"
                  selected={paymentMethod === "cash"}
                  onSelect={() => setPaymentMethod("cash")}
                />
              </div>
            </div>

            {/* Place Order Button - Desktop */}
            <button
              onClick={handlePlaceOrder}
              className="hidden md:block w-full py-3 bg-[#F97316] text-white rounded-full font-medium hover:bg-[#ea580c] transition-colors"
            >
              Place order — {total.toLocaleString()} RWF
            </button>
          </div>
        </div>

        {/* Place Order Button - Mobile */}
        <div className="md:hidden fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-border z-40">
          <button
            onClick={handlePlaceOrder}
            className="w-full py-3 bg-[#F97316] text-white rounded-full font-medium"
          >
            Place order — {total.toLocaleString()} RWF
          </button>
        </div>
      </div>

      <BottomNav cartCount={items.length} />
    </div>
  );
}

function PaymentOption({
  method,
  label,
  selected,
  onSelect,
}: {
  method: PaymentMethod;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const icons = {
    momo: (
      <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs font-bold">
        M
      </div>
    ),
    card: <CreditCard size={20} />,
    cash: (
      <div className="text-lg" role="img" aria-label="cash">
        💵
      </div>
    ),
  };

  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-colors ${
        selected ? "border-[#F97316] bg-[#F97316]/5" : "border-border hover:bg-muted"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        {icons[method]}
        <span className="font-medium">{label}</span>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-[#F97316]" : "border-border"
        }`}
      >
        {selected && <div className="w-3 h-3 rounded-full bg-[#F97316]"></div>}
      </div>
    </button>
  );
}
