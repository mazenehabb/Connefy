import { Link, useNavigate } from "react-router-dom";
import BrandPanel from "./components/BrandPanel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import { loginSchema, type LoginFormValues } from "../schemas/loginSchema";

const input = (hasError = false) =>
  `mt-1.5 w-full rounded-[10px] border bg-brand-paper px-3.5 py-2.5 text-[13px] outline-none transition placeholder:text-[#9ba3a3] focus:ring-3 ${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/12"
      : "border-brand-border focus:border-brand-secondary focus:ring-brand-secondary/12"
  }`;
const logo =
  "inline-flex items-center gap-2.5 text-[30px] font-bold tracking-[-1.2px]";

export default function LoginPage() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function handleLogin({ email, password, rememberMe }: LoginFormValues) {
    if (formState.isSubmitting) return;
    try {
      const { data } = await axios.post(
        "https://route-posts.routemisr.com/users/signin",
        { email, password },
      );

      if (data.token) {
        const storage = rememberMe ? localStorage : sessionStorage;
        const otherStorage = rememberMe ? sessionStorage : localStorage;

        otherStorage.removeItem("token");
        storage.setItem("token", data.token);
      }

      toast.success(data.message || "Welcome back!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          "Unable to log in. Please try again.";
        toast.error(message);
      } else {
        toast.error("Unable to log in. Please try again.");
      }
    }
  }

  return (
    <main className="grid min-h-screen bg-brand-bg lg:grid-cols-[minmax(0,1fr)_minmax(380px,.82fr)]">
      <BrandPanel
        subtitle="Good to see you again"
        title="Your people are already making plans."
        description=" Pick up the conversation, find a new corner of campus, and stay close
          to what matters."
      />
      <section className="flex min-h-screen items-center justify-center px-5 py-6 sm:px-7">
        <div className="w-full max-w-102.5">
          <Link className={`!flex w-fit ${logo} mb-5 lg:hidden`} to="/">
            <span className="grid size-7.5 place-items-center rounded-[50%_50%_50%_7px] bg-brand-primary font-mono text-[13px] font-medium text-brand-paper -rotate-[14deg]">
              c.
            </span>
            connefy
          </Link>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[.1em] text-brand-primary">
            Welcome back
          </span>
          <h2 className="mt-2 text-[34px] font-semibold leading-none tracking-[-.065em] sm:text-[39px]">
            Back in the loop.
          </h2>
          <p className="mt-1 mb-5 text-sm leading-relaxed text-brand-muted">
            Log in to see what your campus has been up to.
          </p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mt-3">
              <label className="text-xs font-bold" htmlFor="email">
                University email
              </label>
              <input
                {...register("email")}
                className={input(Boolean(formState.errors.email))}
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@university.edu"
                aria-invalid={Boolean(formState.errors.email)}
                aria-describedby={
                  formState.errors.email ? "login-email-error" : undefined
                }
              />
              {formState.errors.email && (
                <p
                  className="mt-1 text-[11px] font-medium text-red-600"
                  id="login-email-error"
                >
                  {formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-3">
              <label className="text-xs font-bold" htmlFor="password">
                Password
              </label>
              <input
                {...register("password")}
                className={input(Boolean(formState.errors.password))}
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Your password"
                aria-invalid={Boolean(formState.errors.password)}
                aria-describedby={
                  formState.errors.password ? "login-password-error" : undefined
                }
              />
              {formState.errors.password && (
                <p
                  className="mt-1 text-[11px] font-medium text-red-600"
                  id="login-password-error"
                >
                  {formState.errors.password.message}
                </p>
              )}
            </div>
            <div className="my-3 flex items-center justify-between text-xs text-brand-muted">
              <label className="flex items-center gap-2">
                <input
                  {...register("rememberMe")}
                  className="accent-brand-primary"
                  type="checkbox"
                />{" "}
                Remember me
              </label>
              <a
                className="font-bold text-brand-secondary"
                href="#forgot-password"
              >
                Forgot password?
              </a>
            </div>
            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-brand-primary py-3.5 text-sm font-bold text-brand-paper shadow-[4px_4px_0_#11242d] transition hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none disabled:transform-none"
              type="submit"
              disabled={formState.isSubmitting}
              aria-busy={formState.isSubmitting}
            >
              {formState.isSubmitting ? (
                <>
                  <TailSpin
                    ariaLabel="Logging you in"
                    color="#fffdf8"
                    height={18}
                    width={18}
                    strokeWidth={4}
                  />
                  Logging you in...
                </>
              ) : (
                "Log in →"
              )}
            </button>
          </form>
          <div className="my-5 flex items-center gap-3 font-mono text-[10px] uppercase text-[#829095] before:h-px before:flex-1 before:bg-brand-border after:h-px after:flex-1 after:bg-brand-border">
            or continue with
          </div>

          <p className="mt-5 text-center text-[13px] text-brand-muted">
            New around here?{" "}
            <Link className="font-bold text-brand-secondary" to="/signup">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
