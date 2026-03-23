import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products-accessories" },
  { label: "Gallery", path: "/dog-gallery" },
  { label: "About Us", path: "/our-salon-about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-site flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="https://www.foreverfriendsdogsalon.com/s/misc/logo.png?t=1773501319"
            alt="Forever Friends Dog Salon"
            className="h-[65px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-xs font-heading font-semibold uppercase tracking-wider transition-colors ${
                location.pathname === item.path
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-2 text-xs font-heading font-semibold uppercase tracking-wider text-primary-foreground/80 hover:text-secondary transition-colors">
              More
            </button>
            <div className="absolute top-full right-0 mt-1 w-48 bg-primary border border-secondary/20 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {navItems.slice(6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-3 text-xs font-heading font-semibold uppercase tracking-wider text-primary-foreground/80 hover:text-secondary hover:bg-secondary/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <a
          href="tel:847-647-0002"
          className="hidden lg:flex btn-hero text-xs py-2.5 px-6 gap-2"
        >
          <Phone className="w-3.5 h-3.5" />
          847-647-0002
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-secondary/20">
          <nav className="container-site py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-sm font-heading font-semibold uppercase tracking-wider transition-colors ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-primary-foreground/80 hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:847-647-0002"
              className="btn-gold mt-3 text-center"
            >
              <Phone className="w-4 h-4 mr-2 inline" />
              Call 847-647-0002
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
