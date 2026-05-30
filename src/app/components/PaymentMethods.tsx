import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, CreditCard, Plus, Trash2 } from "lucide-react";
import { BottomNav } from "./BottomNav";

const initialPaymentMethods = [
  {
    id: 1,
    type: "momo",
    label: "MTN Mobile Money",
    details: "**** **** 1234",
    isDefault: true,
  },
  {
    id: 2,
    type: "card",
    label: "Visa ending in 5678",
    details: "Expires 12/27",
    isDefault: false,
  },
];

export function PaymentMethods() {
  const navigate = useNavigate();
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMethodType, setNewMethodType] = useState<"momo" | "card">("momo");

  const deleteMethod = (id: number) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
  };

  const setDefault = (id: number) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({ ...method, isDefault: method.id === id }))
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="font-bold text-lg">Payment Methods</h1>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {showAddForm && (
          <div className="bg-white rounded-xl border border-border p-6 mb-4">
            <h3 className="font-bold mb-4">Add Payment Method</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Payment Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setNewMethodType("momo")}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      newMethodType === "momo"
                        ? "border-[#F97316] bg-[#F97316]/5"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                      <span className="font-medium">Mobile Money</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setNewMethodType("card")}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      newMethodType === "card"
                        ? "border-[#F97316] bg-[#F97316]/5"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard size={20} />
                      <span className="font-medium">Card</span>
                    </div>
                  </button>
                </div>
              </div>

              {newMethodType === "momo" ? (
                <>
                  <div>
                    <label className="block text-sm mb-2">Provider</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>MTN Mobile Money</option>
                      <option>Airtel Money</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="078 XXX XXXX"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 py-2.5 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 py-2.5 bg-[#F97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors"
                >
                  Add Method
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentMethods.length > 0 ? (
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-xl border border-border p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                    {method.type === "momo" ? (
                      <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                    ) : (
                      <CreditCard size={20} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{method.label}</h3>
                      {method.isDefault && (
                        <span className="px-2 py-0.5 bg-[#F97316]/10 text-[#F97316] text-xs rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{method.details}</p>
                  </div>
                  <button
                    onClick={() => deleteMethod(method.id)}
                    className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                {!method.isDefault && (
                  <button
                    onClick={() => setDefault(method.id)}
                    className="mt-3 text-sm text-[#F97316] font-medium hover:underline"
                  >
                    Set as default
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <CreditCard size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-bold mb-2">No payment methods</h3>
            <p className="text-muted-foreground mb-6">
              Add a payment method for faster checkout
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-6 py-2.5 bg-[#F97316] text-white rounded-full font-medium hover:bg-[#ea580c] transition-colors"
            >
              Add Payment Method
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
