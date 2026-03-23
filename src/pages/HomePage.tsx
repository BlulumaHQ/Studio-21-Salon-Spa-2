import { Link } from "react-router-dom";
import { Phone, Clock, Award, Heart, Scissors, ShowerHead, ShoppingBag } from "lucide-react";
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Forever Friends Dog Salon | Professional Dog Grooming Since 1995"
        description="Since 1995, Forever Friends Dog Salon has been grooming dogs for thousands of happy clients. We carry a variety of dog supplies from leashes, coats, toys, beds and more. We have decades of experience and in many cases we can complete your dog within 2 hours."
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center bg-hero-bg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.foreverfriendsdogsalon.com/s/img/emotionheader.JPEG?1767817530.1180.422px)",
          }}
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-65" />
        <div className="container-site relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Trusted Since 1995
            </p>
            <h1 className="text-hero-foreground font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Your Dog Deserves{" "}
              <span className="text-secondary">The Best</span> Grooming
            </h1>
            <p className="text-hero-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Professional grooming with decades of experience. Most appointments completed within 2 hours. Thousands of happy clients trust us with their furry friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:847-647-0002" className="btn-gold text-center">
                <Phone className="w-4 h-4 mr-2 inline" />
                Book Now — 847-647-0002
              </a>
              <Link to="/grooming-packages" className="btn-hero text-center">
                View Our Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-site py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, label: "Since 1995" },
              { icon: Heart, label: "Thousands of Happy Clients" },
              { icon: Clock, label: "2-Hour Appointments" },
              { icon: Scissors, label: "Highly Trained Team" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-secondary" />
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-primary-foreground/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="text-foreground font-heading font-black text-3xl md:text-4xl lg:text-5xl">
              Everything Your Dog Needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Grooming Packages",
                desc: "Full-service professional grooming with decades of experience. Most appointments completed within 2 hours so your dog is in-and-out.",
                link: "/grooming-packages",
                cta: "View Packages",
                img: "https://www.foreverfriendsdogsalon.com/s/cc_images/cache_12210293.JPEG?t=1766866875",
              },
              {
                icon: ShowerHead,
                title: "Self Service Wash",
                desc: "Our new self wash area is now open! Stainless steel tubs, shampoo, heated dryers, towels, and smock — all included for $20.00.",
                link: "/self-service-wash",
                cta: "Learn More",
                img: "https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22101129.JPG?t=1731601330",
              },
              {
                icon: ShoppingBag,
                title: "Products & Accessories",
                desc: "We carry a variety of dog supplies from leashes, coats, toys, beds and more. Plus Suzie's CBD treats for your dog's well-being.",
                link: "/products-accessories",
                cta: "Browse Products",
                img: "https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22397150.JPEG?t=1756570159",
              },
            ].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon className="w-5 h-5 text-secondary" />
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="text-secondary font-heading font-bold text-xs uppercase tracking-widest group-hover:underline">
                    {service.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="bg-section-dark text-section-dark-foreground">
        <div className="container-site section-padding text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            Ready to Book Your Dog's Appointment?
          </h2>
          <p className="text-section-dark-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            With busy schedules, most grooming appointments can be completed within 2 hours so your dog is in-and-out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:847-647-0002" className="btn-gold text-center">
              <Phone className="w-4 h-4 mr-2 inline" />
              Call 847-647-0002
            </a>
            <Link to="/contact-us" className="btn-secondary text-center">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-section-warm">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
                About Our Salon
              </p>
              <h2 className="text-foreground font-heading font-black text-3xl md:text-4xl mb-6">
                Decades of Experience, Thousands of Happy Clients
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are conveniently located in Niles at the intersection of Milwaukee and Harlem in the Niles Shopping Center plaza with ample parking for our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Leaving your pet alone is never an easy experience. Forever Friends's highly trained team make your pet's comfort and safety their top priority. Proper grooming is an essential part of your pet's health and well-being.
              </p>
              <Link to="/our-salon-about-us" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img
                src="https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22101133.JPG?t=1731601622"
                alt="Forever Friends Dog Salon"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Our Happy Clients
            </p>
            <h2 className="text-foreground font-heading font-black text-3xl md:text-4xl">
              Dog Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503078.JPEG",
              "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503079.JPEG",
              "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503080.JPEG",
              "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503081.JPEG",
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-sm">
                <img
                  src={img}
                  alt={`Happy dog ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/dog-gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-site section-padding text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            Give Your Dog the Care They Deserve
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
            Contact us today to schedule your dog's grooming appointment. Walk-ins welcome!
          </p>
          <a href="tel:847-647-0002" className="btn-gold text-center">
            <Phone className="w-4 h-4 mr-2 inline" />
            Call Now — 847-647-0002
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
