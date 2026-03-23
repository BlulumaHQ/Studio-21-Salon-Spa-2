import { Link } from "react-router-dom";
import { Phone, MapPin, Award, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="Our Salon & About Us | Forever Friends Dog Salon"
        description="Learn about Forever Friends Dog Salon — professional dog grooming in Niles since 1995. Decades of experience, thousands of happy clients."
      />

      <section className="relative bg-hero-bg py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22101133.JPG?t=1731601622)",
          }}
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Who We Are
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Our Salon & About Us
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-6">
                Proudly Serving Since 1995
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are conveniently located in Niles at the intersection of Milwaukee and Harlem in the Niles Shopping Center plaza with ample parking for our clients. With busy schedules, most grooming appointments can be completed within 2 hours so your dog is in-and-out.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Leaving your pet alone is never an easy experience. Forever Friends's highly trained team make your pet's comfort and safety their top priority. Proper grooming is an essential part of your pet's health and well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Check out our website or contact us to learn more about the professional services we offer.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img
                src="https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22101133.JPG?t=1731601622"
                alt="Forever Friends Dog Salon interior"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, label: "Since 1995", desc: "Over 25 years of experience" },
              { icon: Heart, label: "Happy Clients", desc: "Thousands of satisfied customers" },
              { icon: MapPin, label: "Convenient Location", desc: "Niles Shopping Center with ample parking" },
              { icon: Phone, label: "Quick Service", desc: "Most appointments in 2 hours" },
            ].map((item, i) => (
              <div key={i} className="bg-section-warm p-6 rounded-sm text-center">
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              Ready to visit us?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:847-647-0002" className="btn-gold">
                <Phone className="w-4 h-4 mr-2 inline" />
                Call 847-647-0002
              </a>
              <Link to="/contact-us" className="btn-primary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
