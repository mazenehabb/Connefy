import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function NavBar() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error(
      "AuthContext is undefined. Make sure you are using AuthProvider.",
    );
  }
  const { token, user, logout } = auth;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/75 bg-brand-bg/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-320 items-center justify-between gap-3 px-5 py-3 sm:gap-6 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          className="group inline-flex items-center gap-2.5 text-[21px] font-bold tracking-[-1.2px]"
          to="/"
          aria-label="Connefy home"
        >
          <span className="grid size-8 place-items-center rounded-[50%_50%_50%_7px] bg-brand-primary font-mono text-[13px] font-medium text-brand-paper shadow-[2px_2px_0_#11242d] transition group-hover:-rotate-6">
            c.
          </span>
          connefy
        </Link>
        <div className="hidden items-center rounded-full border border-brand-border bg-brand-paper p-1 text-sm font-semibold text-brand-muted lg:flex">
          <Link
            className="rounded-full px-3 py-1.5 transition hover:bg-brand-bg hover:text-brand-ink"
            to="/#how-it-works"
          >
            How it works
          </Link>
          <Link
            className="rounded-full px-3 py-1.5 transition hover:bg-brand-bg hover:text-brand-ink"
            to="/#community"
          >
            Community
          </Link>
          {token && (
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 transition ${
                  isActive
                    ? "bg-brand-ink text-brand-paper"
                    : "hover:bg-brand-bg hover:text-brand-ink"
                }`
              }
              to="/feed"
            >
              Explore pulse
            </NavLink>
          )}
        </div>
        <div className="flex items-center gap-2.5">
          {token ? (
            <>
              {user?.name && (
                <span className="hidden items-center gap-2 rounded-full border border-brand-border bg-brand-paper py-1.5 pr-3 pl-1.5 text-sm font-semibold text-brand-ink md:inline-flex">
                  <span className="grid size-6 place-items-center rounded-full bg-brand-lime font-mono text-[10px] font-bold text-brand-ink">
                    {getInitials(user.name)}
                  </span>
                  <span className="max-w-32 truncate">{user.name}</span>
                </span>
              )}
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-brand-ink/20 bg-brand-paper px-3.5 py-2 text-sm font-bold text-brand-ink transition hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper sm:px-4"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                className="hidden px-3 py-2 text-sm font-bold text-brand-ink transition hover:text-brand-primary sm:inline"
                to="/login"
              >
                Log in
              </Link>
              <Link
                className="rounded-full bg-brand-ink px-4 py-2.5 text-sm font-bold text-brand-paper shadow-[3px_3px_0_#4758e8] transition hover:-translate-y-0.5 hover:bg-brand-primary"
                to="/signup"
              >
                Join Connefy
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
