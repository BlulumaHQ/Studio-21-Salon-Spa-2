import { Phone } from "lucide-react";
import SEO from "@/components/SEO";

const HelpWantedPage = () => {
  return (
    <>
      <SEO
        title="Help Wanted | Forever Friends Dog Salon"
        description="Join the Forever Friends Dog Salon team! We're looking for passionate dog lovers. Call 847-647-0002 for career opportunities."
      />

      <section className="relative bg-hero-bg py-24 md:py-32">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Join Our Team
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Help Wanted
          </h1>
          <p className="text-hero-foreground/80 text-lg max-w-xl mx-auto">
            We're looking for passionate dog lovers to join our experienced team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-6">
            Career Opportunities
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Forever Friends Dog Salon has been a trusted grooming salon since 1995. We're always looking for talented, caring individuals to join our highly trained team.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you're passionate about dogs and want to work in a professional, caring environment, we'd love to hear from you.
          </p>

          <div className="bg-section-warm p-8 rounded-sm text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              Interested? Get in touch!
            </h3>
            <p className="text-muted-foreground mb-6">
              Please call us to inquire about current openings and opportunities.
            </p>
            <a href="tel:847-647-0002" className="btn-gold">
              <Phone className="w-4 h-4 mr-2 inline" />
              Call 847-647-0002
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpWantedPage;
