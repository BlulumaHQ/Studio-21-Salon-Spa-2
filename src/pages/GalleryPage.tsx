import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const galleryImages = [
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503078.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503079.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503080.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503081.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503082.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503083.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503084.JPEG",
  "https://www.foreverfriendsdogsalon.com/s/cc_images/thumb_22503085.jpg",
];

const GalleryPage = () => {
  return (
    <>
      <SEO
        title="Dog Gallery | Forever Friends Dog Salon"
        description="See our happy clients! Browse photos of freshly groomed dogs at Forever Friends Dog Salon in Niles."
      />

      <section className="relative bg-hero-bg py-24 md:py-32">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
        <div className="container-site relative z-10 text-center">
          <p className="text-secondary font-heading font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Happy Clients
          </p>
          <h1 className="text-hero-foreground font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4">
            Dog Gallery
          </h1>
          <p className="text-hero-foreground/80 text-lg max-w-xl mx-auto">
            Take a look at some of our freshly groomed pups!
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-sm bg-muted">
                <img
                  src={img}
                  alt={`Groomed dog ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-foreground font-heading font-bold text-lg mb-4">
              Want your pup to look this good?
            </p>
            <Link to="/grooming-packages" className="btn-gold">
              View Our Grooming Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
