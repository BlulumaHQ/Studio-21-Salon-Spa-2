import { Link } from "react-router-dom";
import { Phone, ShowerHead } from "lucide-react";
import SEO from "@/components/SEO";

const SelfServiceWashPage = () => {
  return (
    <>
      <SEO
        title="Self Service Wash | Forever Friends Dog Salon"
        description="Self-service dog wash at Forever Friends Dog Salon. Stainless steel tubs, shampoo, heated dryers, towels, and smock — all included for $20.00."
      />

      <section className="relative bg-hero-bg py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22101129.JPG?t=1731601330)",
          }}
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            DIY Option
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Self Service Wash
          </h1>
          <p className="text-hero-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Our new self wash area is now open! Everything included for just $20.00.
          </p>
          <a href="tel:847-647-0002" className="btn-gold">
            <Phone className="w-4 h-4 mr-2 inline" />
            Call for Availability
          </a>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShowerHead className="w-8 h-8 text-secondary" />
                <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground">
                  Everything You Need
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our new self wash area is now open! We provide everything you need to give your dog a professional-quality bath right here in our salon.
              </p>
              <div className="bg-section-warm p-8 rounded-sm mb-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  All Included for $20.00
                </h3>
                <ul className="space-y-3">
                  {[
                    "Stainless steel tubs (low profile for extra large dogs)",
                    "Shampoo",
                    "Heated Dryers",
                    "Towels",
                    "Smock",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:847-647-0002" className="btn-gold">
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Call 847-647-0002
                </a>
                <Link to="/contact-us" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img
                src="https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22101129.JPG?t=1731601330"
                alt="Self Service Dog Wash"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelfServiceWashPage;
