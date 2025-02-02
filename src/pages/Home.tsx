import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Discover Unique Auctions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Bid on exclusive items and create your own auctions with ease
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/register"
              className="button-primary flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dashboard"
              className="px-6 py-3 rounded-lg border border-input hover:bg-accent transition-all duration-300"
            >
              View Auctions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="card-container"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video rounded-lg bg-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    name: "Art & Collectibles",
    description: "Unique pieces from artists and collectors worldwide",
  },
  {
    name: "Electronics",
    description: "Latest gadgets and tech accessories",
  },
  {
    name: "Luxury Items",
    description: "Premium watches, jewelry, and fashion items",
  },
];

export default Home;