import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Plus, Trash2, Edit2 } from "lucide-react";
import { BottomNav } from "./BottomNav";

const initialAddresses = [
  {
    id: 1,
    label: "Home",
    address: "KG 123 St, Kicukiro",
    city: "Kigali, Rwanda",
    isDefault: true,
  },
  {
    id: 2,
    label: "Work",
    address: "KN 4 Ave, Kacyiru",
    city: "Kigali, Rwanda",
    isDefault: false,
  },
  {
    id: 3,
    label: "Mom's House",
    address: "KG 567 St, Kimironko",
    city: "Kigali, Rwanda",
    isDefault: false,
  },
];

export function Addresses() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddForm, setShowAddForm] = useState(false);

  const deleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const setDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((addr) => ({ ...addr, isDefault: addr.id === id }))
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
            <h1 className="font-bold text-lg">Saved Addresses</h1>
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
            <h3 className="font-bold mb-4">Add New Address</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Label</label>
                <input
                  type="text"
                  placeholder="e.g., Home, Work, Office"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Street Address</label>
                <input
                  type="text"
                  placeholder="e.g., KG 123 St, Kicukiro"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">City</label>
                <input
                  type="text"
                  placeholder="e.g., Kigali, Rwanda"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
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
                  Save Address
                </button>
              </div>
            </div>
          </div>
        )}

        {addresses.length > 0 ? (
          <div className="space-y-3">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="bg-white rounded-xl border border-border p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-[#F97316]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{address.label}</h3>
                      {address.isDefault && (
                        <span className="px-2 py-0.5 bg-[#F97316]/10 text-[#F97316] text-xs rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{address.address}</p>
                    <p className="text-sm text-muted-foreground">{address.city}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => deleteAddress(address.id)}
                      className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                {!address.isDefault && (
                  <button
                    onClick={() => setDefault(address.id)}
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
              <MapPin size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-bold mb-2">No saved addresses</h3>
            <p className="text-muted-foreground mb-6">
              Add addresses for faster checkout
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-6 py-2.5 bg-[#F97316] text-white rounded-full font-medium hover:bg-[#ea580c] transition-colors"
            >
              Add Address
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
