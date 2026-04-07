import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../Topic-28 Zustand/authStore";

const highlights = [
  "Lightning-fast checkout experience",
  "Live order updates after login",
  "Secure account access for every session",
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true },
      );

      login(data.user);
      navigate("/", { replace: true });
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const showPassword = () => {
    setShow(!show);
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setShow(false);
  };

  return (
    <div
      id="login-component"
      className="relative min-h-screen overflow-hidden bg-[#f7f5ff] px-4 py-8 font-['Poppins','Segoe_UI',sans-serif] sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_30px_90px_rgba(88,28,135,0.18)] backdrop-blur xl:grid-cols-[1.05fr_0.95fr]">
          <div className="relative hidden overflow-hidden bg-[linear-gradient(160deg,#4c1d95_0%,#6d28d9_55%,#a855f7_100%)] p-10 text-white xl:block">
            <div className="absolute -right-16 top-14 h-40 w-40 rounded-full border border-white/15 bg-white/10" />
            <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full border border-lime-200/30 bg-lime-300/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 font-bold text-slate-950">
                    Q
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-violet-100">
                      Quick Commerce
                    </p>
                    <p className="text-sm font-semibold">
                      Faster orders, smoother sign in
                    </p>
                  </div>
                </div>

                <h1 className="mt-10 max-w-md text-5xl font-semibold leading-[1.05] tracking-tight">
                  A login page with the polished feel of a modern delivery app.
                </h1>
                <p className="mt-6 max-w-lg text-base leading-7 text-violet-100/90">
                  Give your website a premium first impression with a clean,
                  energetic interface that feels fast before users even place an
                  order.
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold">10m</p>
                    <p className="mt-1 text-sm text-violet-100">
                      avg. delivery vibe
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold">24/7</p>
                    <p className="mt-1 text-sm text-violet-100">secure access</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold">1 tap</p>
                    <p className="mt-1 text-sm text-violet-100">
                      to continue shopping
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/20 p-5 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-violet-100">
                        Today&apos;s experience
                      </p>
                      <p className="mt-2 text-xl font-semibold">
                        Fast. Clean. Reliable.
                      </p>
                    </div>
                    <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950">
                      Live
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                        <p className="text-sm text-violet-50">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white px-5 py-8 sm:px-8 lg:px-10 xl:px-12 xl:py-10">
            <div className="mx-auto flex w-full max-w-md flex-col justify-center">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-lg font-bold text-white shadow-lg shadow-violet-200">
                    Q
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
                      Welcome Back
                    </p>
                    <p className="text-sm text-slate-500">
                      Login to continue your journey
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-lime-50 px-3 py-1 text-xs font-semibold text-lime-700">
                  Secure Login
                </span>
              </div>

              <div className="mb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                  Sign in
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-500">
                  Access your account, saved carts, and order history from one
                  beautifully simple screen.
                </p>
              </div>

              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50/70 px-4 py-3 text-sm text-slate-700 xl:hidden">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />
                Premium quick-commerce style layout, optimized for mobile too.
              </div>

              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={showPassword}
                      className="text-sm font-semibold text-violet-600 transition hover:text-violet-700"
                    >
                      {show ? "Hide password" : "Show password"}
                    </button>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                    <input
                      id="password"
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                    />
                    Keep me signed in
                  </label>
                  <button
                    type="button"
                    className="font-semibold text-violet-600 transition hover:text-violet-700"
                  >
                    Need help?
                  </button>
                </div>

                {errorMessage && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-[linear-gradient(135deg,#5b21b6_0%,#7c3aed_55%,#a855f7_100%)] px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:scale-[1.01] hover:shadow-violet-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Signing you in..." : "Continue to account"}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Clear form
                </button>
              </form>

              <p className="mt-6 text-center text-sm leading-6 text-slate-500">
                By continuing, your users get a cleaner first impression and a more
                premium app-like feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
