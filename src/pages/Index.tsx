import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="animate-fadeIn space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
              Welcome to AuctionPro
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover a world of unique items and exciting auctions. Bid, sell, and connect
              with collectors worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeIn" 
               style={{ animationDelay: "0.2s" }}>
            <Link
              to="/register"
              className="button-primary bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700
                       flex items-center gap-2 px-8 py-4 text-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/auctions"
              className="px-8 py-4 rounded-lg border-2 border-indigo-200 hover:border-indigo-300
                       text-indigo-600 hover:bg-indigo-50 transition-all duration-300 text-lg"
            >
              Browse Auctions
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-container backdrop-blur-sm bg-white/50 hover:bg-white/60"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500
                              flex items-center justify-center text-white mb-4 mx-auto">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Live Bidding",
    description: "Participate in real-time auctions with instant bid updates and notifications.",
    icon: ArrowRight,
  },
  {
    title: "Secure Transactions",
    description: "Safe and protected payment processing for all your auction activities.",
    icon: ArrowRight,
  },
  {
    title: "Expert Support",
    description: "24/7 customer service to assist you with any questions or concerns.",
    icon: ArrowRight,
  },
];

export default Index;