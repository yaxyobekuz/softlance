"use client";
import Link from "next/link";

// Components
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="h-20">
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" children={<Logo />} />

          <div className="flex items-center gap-8">
            {/* Navbar */}
            <nav>
              <ul className="flex items-center justify-center gap-8">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    className="text-nowrap shrink-0 transition-colors duration-200 hover:text-brand-default/70 dark:text-white/70 dark:hover:text-white"
                  >
                    Bosh sahifa
                  </Link>
                </li>

                {/* About */}
                <li>
                  <Link
                    href="/about"
                    className="text-nowrap shrink-0 transition-colors duration-200 hover:text-brand-default/70 dark:text-white/70 dark:hover:text-white"
                  >
                    Jamoa haqida
                  </Link>
                </li>

                {/* Services */}
                <li>
                  <Link
                    href="/services"
                    className="text-nowrap shrink-0 transition-colors duration-200 hover:text-brand-default/70 dark:text-white/70 dark:hover:text-white"
                  >
                    Xizmatlar
                  </Link>
                </li>

                {/* Pricing */}
                <li>
                  <Link
                    href="/pricing"
                    className="text-nowrap shrink-0 transition-colors duration-200 hover:text-brand-default/70 dark:text-white/70 dark:hover:text-white"
                  >
                    Narxlar
                  </Link>
                </li>

                {/* Projects */}
                <li>
                  <Link
                    href="/projects"
                    className="text-nowrap shrink-0 transition-colors duration-200 hover:text-brand-default/70 dark:text-white/70 dark:hover:text-white"
                  >
                    Loyihalar
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    href="/contact"
                    className="text-nowrap shrink-0 transition-colors duration-200 hover:text-brand-default/70 dark:text-white/70 dark:hover:text-white"
                  >
                    Bog'lanish
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Theme Button */}
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
