import { Link, useNavigate } from "react-router-dom";
import BrandPanel from "./components/BrandPanel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { signUpSchema, type SignUpFormValues } from "../schemas/signUpSchema";

const input = (hasError = false) =>
  `mt-1.5 w-full rounded-[10px] border bg-brand-paper px-3.5 py-2.5 text-[13px] outline-none transition placeholder:text-[#9ba3a3] focus:ring-3 ${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/12"
      : "border-brand-border focus:border-brand-secondary focus:ring-brand-secondary/12"
  }`;
const logo =
  "inline-flex items-center gap-2.5 text-[21px] font-bold tracking-[-1.2px]";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { handleSubmit, register, formState, reset } =
    useForm<SignUpFormValues>({
      resolver: zodResolver(signUpSchema),
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        name: "",
        username: "",
        email: "",
        dateOfBirth: "",
        gender: undefined,
        password: "",
        rePassword: "",
      },
    });

  async function handleSignUp(value: SignUpFormValues) {
    if (formState.isSubmitting) return;
    try {
      const { data } = await axios.post(
        "https://route-posts.routemisr.com/users/signup",
        value,
      );
      toast.success(data.message || "Account created successfully!");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1600);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Something went wrong!";
        toast.error(message);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      reset();
    }
  }
  return (
    <main className="grid min-h-screen bg-brand-bg lg:grid-cols-[minmax(0,1fr)_minmax(380px,.82fr)]">
      <BrandPanel
        subtitle="Your community, in motion"
        title="Make this place feel more like home."
        description="Find communities you care about and the people who make ordinary days unexpectedly good."
      />
      <section className="flex min-h-screen items-center justify-center px-5 py-6 sm:px-7 lg:py-4">
        <div className="w-full max-w-102.5">
          <Link className={`!flex w-fit ${logo} mb-5 lg:hidden`} to="/">
            <span className="grid size-7.5 place-items-center rounded-[50%_50%_50%_7px] bg-brand-primary font-mono text-[13px] font-medium text-brand-paper -rotate-[14deg]">
              c.
            </span>
            connefy
          </Link>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[.1em] text-brand-primary">
            Join the community
          </span>
          <h2 className="mt-2 text-[34px] font-semibold leading-none tracking-[-.065em] sm:text-[39px]">
            Find your circle.
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-brand-muted">
            A few details and you are in. It takes less than a minute.
          </p>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="mt-5 space-y-3"
          >
            <div className="grid gap-3 min-[480px]:grid-cols-2">
              <div>
                <label className="text-xs font-bold" htmlFor="name">
                  Full name
                </label>
                <input
                  {...register("name")}
                  className={input(Boolean(formState.errors.name))}
                  id="name"
                  autoComplete="name"
                  placeholder="Jordan Lee"
                  aria-invalid={Boolean(formState.errors.name)}
                  aria-describedby={
                    formState.errors.name ? "name-error" : undefined
                  }
                />
                {formState.errors.name && (
                  <p
                    className="mt-1 text-[11px] font-medium text-red-600"
                    id="name-error"
                  >
                    {formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-xs font-bold" htmlFor="username">
                  Username
                </label>
                <input
                  {...register("username")}
                  className={input(Boolean(formState.errors.username))}
                  id="username"
                  type="text"
                  autoComplete="username"
                  placeholder="mazene611"
                  aria-invalid={Boolean(formState.errors.username)}
                  aria-describedby={
                    formState.errors.username ? "username-error" : undefined
                  }
                />
                {formState.errors.username && (
                  <p
                    className="mt-1 text-[11px] font-medium text-red-600"
                    id="username-error"
                  >
                    {formState.errors.username.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold" htmlFor="email">
                Email address
              </label>
              <input
                {...register("email")}
                className={input(Boolean(formState.errors.email))}
                id="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(formState.errors.email)}
                aria-describedby={
                  formState.errors.email ? "email-error" : undefined
                }
              />
              {formState.errors.email && (
                <p
                  className="mt-1 text-[11px] font-medium text-red-600"
                  id="email-error"
                >
                  {formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="grid gap-3 min-[480px]:grid-cols-2">
              <div>
                <label className="text-xs font-bold" htmlFor="dateOfBirth">
                  Birth date
                </label>
                <input
                  {...register("dateOfBirth")}
                  className={input(Boolean(formState.errors.dateOfBirth))}
                  id="dateOfBirth"
                  type="date"
                  aria-invalid={Boolean(formState.errors.dateOfBirth)}
                  aria-describedby={
                    formState.errors.dateOfBirth
                      ? "date-of-birth-error"
                      : undefined
                  }
                />
                {formState.errors.dateOfBirth && (
                  <p
                    className="mt-1 text-[11px] font-medium text-red-600"
                    id="date-of-birth-error"
                  >
                    {formState.errors.dateOfBirth.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-xs font-bold" htmlFor="gender">
                  Gender
                </label>
                <div className="relative mt-1.5">
                  <select
                    {...register("gender")}
                    className={`${input(Boolean(formState.errors.gender))} cursor-pointer appearance-none pr-11 text-brand-ink hover:border-brand-secondary`}
                    id="gender"
                    aria-invalid={Boolean(formState.errors.gender)}
                    aria-describedby={
                      formState.errors.gender ? "gender-error" : undefined
                    }
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-3 grid size-6 -translate-y-1/2 place-items-center rounded-md bg-brand-bg text-brand-primary"
                  >
                    <svg
                      className="size-3"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2.25 4.5 3.75 3.75L9.75 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                {formState.errors.gender && (
                  <p
                    className="mt-1 text-[11px] font-medium text-red-600"
                    id="gender-error"
                  >
                    {formState.errors.gender.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-3 min-[480px]:grid-cols-2">
              <div>
                <label className="text-xs font-bold" htmlFor="new-password">
                  Password
                </label>
                <input
                  {...register("password")}
                  className={input(Boolean(formState.errors.password))}
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  aria-invalid={Boolean(formState.errors.password)}
                  aria-describedby={
                    formState.errors.password ? "password-error" : undefined
                  }
                />
                {formState.errors.password && (
                  <p
                    className="mt-1 text-[11px] font-medium text-red-600"
                    id="password-error"
                  >
                    {formState.errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-xs font-bold" htmlFor="rePassword">
                  Confirm password
                </label>
                <input
                  {...register("rePassword")}
                  className={input(Boolean(formState.errors.rePassword))}
                  id="rePassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Type it again"
                  aria-invalid={Boolean(formState.errors.rePassword)}
                  aria-describedby={
                    formState.errors.rePassword
                      ? "confirm-password-error"
                      : undefined
                  }
                />
                {formState.errors.rePassword && (
                  <p
                    className="mt-1 text-[11px] font-medium text-red-600"
                    id="confirm-password-error"
                  >
                    {formState.errors.rePassword.message}
                  </p>
                )}
              </div>
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
                    ariaLabel="Creating your account"
                    color="#fffdf8"
                    height={18}
                    width={18}
                    strokeWidth={4}
                  />
                  Creating your account...
                </>
              ) : (
                "Create my account →"
              )}
            </button>
          </form>
          <p className="mt-5 text-center text-[13px] text-brand-muted">
            Already part of the loop?{" "}
            <Link className="font-bold text-brand-secondary" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
