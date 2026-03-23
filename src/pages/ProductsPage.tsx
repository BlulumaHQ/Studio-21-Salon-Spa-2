import { Phone, ShoppingBag } from "lucide-react";
import SEO from "@/components/SEO";

const ProductsPage = () => {
  return (
    <>
      <SEO
        title="Products & Accessories | Forever Friends Dog Salon"
        description="Browse dog supplies at Forever Friends Dog Salon. Leashes, coats, toys, beds, and Suzie's CBD treats. Visit our salon in Niles."
      />

      <section className="relative bg-hero-bg py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22397150.JPEG?t=1756570159)",
          }}
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Shop With Us
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Products & Accessories
          </h1>
          <p className="text-hero-foreground/80 text-lg max-w-xl mx-auto">
            We carry a variety of dog supplies from leashes, coats, toys, beds and more.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="w-8 h-8 text-secondary" />
            <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground">
              Dog Supplies & More
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We carry a variety of dog supplies from leashes, coats, toys, beds and more. Visit our salon to browse our full selection of products and accessories for your furry friend.
          </p>

          <div className="bg-section-warm p-8 rounded-sm mb-8">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              Suzie's CBD Treats
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We now carry a variety of Suzie's CBD treats. CBD is a wonderful product for your dog to help with a variety of ailments. Call us for additional information.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <img
              src="https://www.foreverfriendsdogsalon.com/s/cc_images/cache_22397150.JPEG?t=1756570159"
              alt="Dog products and accessories"
              className="rounded-sm w-full aspect-[4/3] object-cover"
            />
            <img
              src="https://www.foreverfriendsdogsalon.com/s/cc_images/cache_21092497.jpg?t=1641505284"
              alt="Dog supplies"
              className="rounded-sm w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="text-center">
            <p className="text-foreground font-heading font-bold text-lg mb-4">
              Visit our salon or call for product availability
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

export default ProductsPage;
