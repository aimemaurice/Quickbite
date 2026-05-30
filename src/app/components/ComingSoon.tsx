import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "./BottomNav";

export function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="bg-white border-b border-border p-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-lg">Coming Soon</h1>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center px-6">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#F97316]/10 rounded-full flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            This feature is currently under development.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 bg-[#F97316] text-white rounded-full font-medium hover:bg-[#ea580c] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
