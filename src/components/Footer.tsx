import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 - Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="text-footer-heading font-heading font-bold text-xl tracking-tight">
                Forever Friends Dog Salon
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-footer-foreground/80">
              Since 1995, providing professional dog grooming with decades of experience and thousands of happy clients.
            </p>
          </div>

          {/* Col 2 - Spacer */}
          <div className="hidden lg:block" />

          {/* Col 3 - Navigation */}
          <div>
            <h4 className="text-footer-heading font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Grooming Packages", path: "/grooming-packages" },
                { label: "Self Service Wash", path: "/self-service-wash" },
                { label: "Gallery", path: "/dog-gallery" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-footer-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - More */}
          <div>
            <h4 className="text-footer-heading font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/our-salon-about-us" },
                { label: "Products & Accessories", path: "/products-accessories" },
                { label: "Help Wanted", path: "/help-wanted" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-footer-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 - Contact */}
          <div>
            <h4 className="text-footer-heading font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:847-647-0002"
                className="flex items-center gap-2 text-sm text-footer-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                847-647-0002
              </a>
              <div className="flex items-start gap-2 text-sm text-footer-foreground/80">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>
                  Niles Shopping Center,<br />
                  Milwaukee & Harlem, Niles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="container-site py-5">
          <p className="text-xs text-footer-foreground/50 text-center">
            © {year} Forever Friends Dog Salon. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
