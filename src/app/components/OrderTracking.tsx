import { useNavigate, useParams } from "react-router";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { BottomNav } from "./BottomNav";

const orderSteps = [
  { label: "Order confirmed", completed: true },
  { label: "Preparing your food", completed: true },
  { label: "Rider on the way", completed: false, active: true },
  { label: "Delivered", completed: false },
];

export function OrderTracking() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate("/home")}>
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="font-bold text-lg">Order tracking</h1>
            <p className="text-sm text-muted-foreground">Order #{orderId}</p>
          </div>
        </div>
      </header>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-5 gap-6">
            {/* Map - Takes 3 columns */}
            <div className="col-span-3">
              <div className="bg-muted rounded-xl overflow-hidden border border-border aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#F97316]/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#F97316]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">Live tracking map</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Takes 2 columns */}
            <div className="col-span-2 space-y-6">
              {/* Estimated Time */}
              <div className="bg-[#F97316] text-white rounded-xl p-6 text-center">
                <p className="text-sm mb-2">Estimated arrival</p>
                <p className="text-3xl font-bold">25 min</p>
              </div>

              {/* Order Status */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-bold mb-6">Order status</h2>
                <div className="space-y-6">
                  {orderSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            step.completed
                              ? "bg-muted"
                              : step.active
                              ? "bg-[#1C1C1E]"
                              : "border-2 border-border bg-white"
                          }`}
                        >
                          {step.completed && (
                            <svg
                              className="w-4 h-4 text-muted-foreground"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                          {step.active && <div className="w-2 h-2 rounded-full bg-white"></div>}
                        </div>
                        {index < orderSteps.length - 1 && (
                          <div className="w-0.5 h-12 bg-border mt-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p
                          className={`${
                            step.active
                              ? "font-bold text-foreground"
                              : step.completed
                              ? "text-muted-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rider Info */}
              <div className="bg-white rounded-xl border border-border p-6">
                <p className="text-sm text-muted-foreground mb-3">Your rider</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Jean Marie</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star />
                      <span>4.9</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80">
                      <Phone size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80">
                      <MessageCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Map */}
        <div className="bg-muted h-64 flex items-center justify-center border-b border-border">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-[#F97316]/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#F97316]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Live tracking map</p>
          </div>
        </div>

        {/* Estimated Time */}
        <div className="mx-4 mt-4">
          <div className="bg-[#F97316] text-white rounded-xl p-4 text-center">
            <p className="text-sm mb-1">Arriving in</p>
            <p className="text-2xl font-bold">25 min</p>
          </div>
        </div>

        {/* Order Status */}
        <div className="p-4">
          <div className="bg-white rounded-xl border border-border p-4">
            <div className="space-y-6">
              {orderSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        step.completed
                          ? "bg-muted"
                          : step.active
                          ? "bg-[#1C1C1E]"
                          : "border-2 border-border bg-white"
                      }`}
                    >
                      {step.completed && (
                        <svg
                          className="w-4 h-4 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {step.active && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    {index < orderSteps.length - 1 && (
                      <div className="w-0.5 h-12 bg-border mt-1"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p
                      className={`text-sm ${
                        step.active
                          ? "font-bold text-foreground"
                          : step.completed
                          ? "text-muted-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rider Info */}
        <div className="px-4 pb-4">
          <div className="bg-white rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground mb-3">Your rider</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div className="flex-1">
                <p className="font-medium">Jean Marie</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star />
                  <span>4.9</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function Star() {
  return (
    <svg className="w-4 h-4 fill-[#F97316] text-[#F97316]" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
