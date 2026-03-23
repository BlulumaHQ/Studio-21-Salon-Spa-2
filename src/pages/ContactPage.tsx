import { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon. You can also call us at 847-647-0002.");
  };

  return (
    <>
      <SEO
        title="Contact Us | Forever Friends Dog Salon"
        description="Contact Forever Friends Dog Salon in Niles. Call 847-647-0002 or use our contact form. Located at the intersection of Milwaukee and Harlem."
      />

      <section className="relative bg-hero-bg py-24 md:py-32">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Get in Touch
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-hero-foreground/80 text-lg max-w-xl mx-auto">
            Please call or use our contact form. We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2 inline" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-heading font-bold text-foreground">Phone</p>
                    <a href="tel:847-647-0002" className="text-muted-foreground hover:text-secondary transition-colors">
                      847-647-0002
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-heading font-bold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Niles Shopping Center plaza<br />
                      Intersection of Milwaukee and Harlem<br />
                      Niles, IL
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-sm overflow-hidden shadow-lg">
                <iframe
                  title="Forever Friends Dog Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5!2d-87.8!3d42.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sForever+Friends+Dog+Salon!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
