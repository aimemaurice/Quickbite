import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop: Split layout */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen">
        {/* Left: Hero Image */}
        <div className="bg-gradient-to-br from-[#F97316] to-[#ea580c] flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="w-48 h-48 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl font-bold">QB</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">QuickBite</h1>
            <p className="text-xl opacity-90">Order food. Fast. Easy.</p>
          </div>
        </div>

        {/* Right: Login Form */}
        <div className="flex items-center justify-center p-12 bg-white">
          <div className="w-full max-w-md">
            <LoginForm
              isSignUp={isSignUp}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              onSubmit={handleLogin}
              onToggleMode={() => setIsSignUp(!isSignUp)}
            />
          </div>
        </div>
      </div>

      {/* Mobile: Single column */}
      <div className="md:hidden flex flex-col min-h-screen p-6 pt-20 bg-white">
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-[#F97316] rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-white">QB</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">QuickBite</h1>
          <p className="text-muted-foreground">Order food. Fast. Easy.</p>
        </div>

        <LoginForm
          isSignUp={isSignUp}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          onSubmit={handleLogin}
          onToggleMode={() => setIsSignUp(!isSignUp)}
        />
      </div>
    </div>
  );
}

function LoginForm({
  isSignUp,
  showPassword,
  onTogglePassword,
  onSubmit,
  onToggleMode,
}: {
  isSignUp: boolean;
  showPassword: boolean;
  onTogglePassword: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onToggleMode: () => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-2 text-foreground">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-foreground">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-full bg-[#F97316] text-white font-medium hover:bg-[#ea580c] transition-colors"
      >
        {isSignUp ? "Sign up" : "Log in"}
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-muted-foreground">or</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-3 rounded-lg border-2 border-border text-foreground font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </button>

      <p className="text-center text-sm text-muted-foreground mt-6">
        {isSignUp ? "Already have an account? " : "Don't have an account? "}
        <button
          type="button"
          onClick={onToggleMode}
          className="text-[#F97316] font-medium hover:underline"
        >
          {isSignUp ? "Log in" : "Sign up"}
        </button>
      </p>
    </form>
  );
}
