import { Link } from "react-router-dom";
import { Phone, Scissors } from "lucide-react";
import SEO from "@/components/SEO";

const GroomingPackagesPage = () => {
  return (
    <>
      <SEO
        title="Grooming Packages | Forever Friends Dog Salon"
        description="Professional dog grooming packages at Forever Friends Dog Salon. Most appointments completed within 2 hours. Call 847-647-0002 to book."
      />

      {/* Hero */}
      <section className="relative bg-hero-bg py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://www.foreverfriendsdogsalon.com/s/cc_images/cache_12210293.JPEG?t=1766866875)",
          }}
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Our Services
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Grooming Packages
          </h1>
          <p className="text-hero-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Professional grooming with decades of experience. Most appointments completed within 2 hours.
          </p>
          <a href="tel:847-647-0002" className="btn-gold">
            <Phone className="w-4 h-4 mr-2 inline" />
            Book Now — 847-647-0002
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scissors className="w-8 h-8 text-secondary" />
              <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground">
                Professional Grooming Services
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With busy schedules, most grooming appointments can be completed within 2 hours so your dog is in-and-out. This may not be the exception all the time but we will work with your schedule.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leaving your pet alone is never an easy experience. Forever Friends's highly trained team make your pet's comfort and safety their top priority. Proper grooming is an essential part of your pet's health and well-being.
            </p>

            <div className="bg-section-warm p-8 rounded-sm mb-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                Why Choose Our Grooming?
              </h3>
              <ul className="space-y-3">
                {[
                  "Over 25 years of professional grooming experience",
                  "Most appointments completed within 2 hours",
                  "Highly trained team focused on your pet's comfort",
                  "Conveniently located with ample parking",
                  "Thousands of satisfied clients since 1995",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-foreground font-heading font-bold text-lg mb-4">
                Ready to book your dog's grooming appointment?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:847-647-0002" className="btn-gold">
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Call 847-647-0002
                </a>
                <Link to="/contact-us" className="btn-primary">
                  Contact Us Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroomingPackagesPage;
