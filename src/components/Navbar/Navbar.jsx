import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Vote, Menu, X, HeartHandshake } from "lucide-react";
import navbarData from "../../data/navbar.json";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-gray-900 shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Brand */}
       <div className="flex justify-center">
 <img
  src="/images/logo.jpg"
  alt="Shri Aravindgowda Police Patil"
  className="h-[100px] w-[300px] object-contain"
/>
</div>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navbarData.menu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-orange-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-orange-600"
                        : "text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-200 hover:text-orange-600 hover:after:w-full"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              to={navbarData.cta.link}
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 sm:text-sm"
            >
              <HeartHandshake className="h-4 w-4" />
              <span>{navbarData.cta.title}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-gray-200 p-2 text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="space-y-1 border-t border-gray-200 py-4 lg:hidden">
            {navbarData.menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border border-orange-200 bg-orange-50 text-orange-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <div className="px-1 pt-3">
              <Link
                to={navbarData.cta.link}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700"
              >
                <HeartHandshake className="h-4 w-4" />
                <span>{navbarData.cta.title}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;